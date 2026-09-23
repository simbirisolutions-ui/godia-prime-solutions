/*
  REAL KENYA LOCATION SEED
  Source: open-admin-data/kenya-administrative-divisions
  https://github.com/open-admin-data/kenya-administrative-divisions
  CC-BY-4.0
  Run after creating the D1 database and applying migrations.

  Usage:
    node scripts/seed-location.mjs
*/
import fs from "node:fs/promises";
import { execFileSync } from "node:child_process";

const url = "https://raw.githubusercontent.com/open-admin-data/kenya-administrative-divisions/master/data/all-flat.json";
const file = ".cache-kenya-locations.json";

async function main(){
  let raw;
  try {
    raw = await fetch(url).then(async r => {
      if(!r.ok) throw new Error(`Location dataset download failed: HTTP ${r.status}`);
      return r.text();
    });
  } catch(e) {
    console.error(e.message);
    process.exit(1);
  }
  await fs.writeFile(file, raw, "utf8");
  const rows = JSON.parse(raw);
  if(!Array.isArray(rows) || rows.length < 1000) throw new Error("Dataset validation failed; refusing to seed.");
  await fs.writeFile(".location-seed.sql", buildSql(rows), "utf8");
  execFileSync("npx",["wrangler","d1","execute","godia-prime-db","--remote","--file=.location-seed.sql"],{stdio:"inherit"});
  console.log("Kenya location seed completed.");
}
function esc(v){return String(v??"").replaceAll("'","''")}
function q(v){return `'${esc(v)}'`}
function num(v){return v==null||v===""?"NULL":String(Number(v))}
function buildSql(rows){
  const counties=rows.filter(x=>Number(x.level)===1);
  const subs=rows.filter(x=>Number(x.level)===2);
  const wards=rows.filter(x=>Number(x.level)===3);
  const out=["PRAGMA foreign_keys=ON;","BEGIN;"];
  for(const x of counties) out.push(`INSERT OR REPLACE INTO counties(id,name,latitude,longitude) VALUES(${q(x.id)},${q(x.name?.en||x.name?.local||x.name)},${num(x.geo?.lat)},${num(x.geo?.lon)});`);
  for(const x of subs) {
    const parent=x.parent?.id || x.ancestors?.[0]?.id;
    out.push(`INSERT OR REPLACE INTO sub_counties(id,county_id,name,latitude,longitude) VALUES(${q(x.id)},${q(parent)},${q(x.name?.en||x.name?.local||x.name)},${num(x.geo?.lat)},${num(x.geo?.lon)});`);
  }
  for(const x of wards) {
    const parent=x.parent?.id || x.ancestors?.[1]?.id;
    out.push(`INSERT OR REPLACE INTO wards(id,sub_county_id,name,latitude,longitude) VALUES(${q(x.id)},${q(parent)},${q(x.name?.en||x.name?.local||x.name)},${num(x.geo?.lat)},${num(x.geo?.lon)});`);
  }
  out.push("COMMIT;");
  return out.join("\n");
}
main();

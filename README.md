# GODIA PRIME SOLUTIONS — REAL DATA DEPLOYMENT

This package intentionally contains NO fake suppliers, fake products, fake prices, fake stock, fake customers, or fake orders.

## What is included
- Cloudflare Worker API
- Cloudflare D1 schema
- Cloudflare R2 product-image binding
- Customer phone + WhatsApp fields
- Kenya County → Sub-county → Ward structure
- GPS fields, only when the user chooses browser location
- Category/subcategory/commodity separation
- Supplier business records
- Real product listings
- Real stock deduction when an order is created
- Customer/order relationships
- Basic receipt/order data
- Prepared/bound D1 queries

## Deployment

1. Install Node.js.
2. In this folder:
   npm install
3. Authenticate:
   npx wrangler login
4. Create D1:
   npx wrangler d1 create godia-prime-db
5. Copy the returned database_id into wrangler.toml.
6. Create R2:
   npx wrangler r2 bucket create godia-prime-product-images
7. Apply schema:
   npm run db:migrate
8. Seed the REAL Kenya administrative dataset:
   npm run seed:locations
9. Deploy:
   npm run deploy

The location seed downloads the published Kenya administrative divisions dataset at deployment/setup time and refuses to seed if the returned dataset fails basic validation.

## Important production gaps
This is a real backend foundation, not a claim that external services are already connected.

Still required before a public production launch:
- real authentication/session system
- admin authorization and supplier ownership checks
- SMS OTP provider
- WhatsApp Business provider
- payment provider/M-Pesa credentials
- production receipt generation/storage
- supplier verification workflow
- rate limiting and abuse protection
- audit/security hardening
- backups/recovery
- real map/geocoding provider if reverse geocoding is required

Do not put API secrets in frontend code.

## WhatsApp
The customer table stores a WhatsApp number. The Worker does NOT pretend to send WhatsApp messages. Connect a real WhatsApp Business/API provider later, then send only from the server after the required business/account configuration and customer consent.

## Location source
The seed script uses:
https://github.com/open-admin-data/kenya-administrative-divisions
The dataset states 47 counties, 290 sub-counties and 1,450 wards and is licensed CC-BY-4.0.

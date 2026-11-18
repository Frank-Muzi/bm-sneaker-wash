# BM Sneaker Wash

A responsive React + Vite website for a sneaker-cleaning business. Includes service information and a booking form that opens WhatsApp with the booking details.

## Requirements
- Node.js (LTS recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## Important: verify the Gauteng WhatsApp number
The supplied Gauteng number was `064982255` (9 digits). South African mobile numbers are normally 10 digits. Update `src/config.js` with the correct full number before publishing. The Mpumalanga number is set to `0824398434`.

Numbers are stored in South African international format without the leading zero:
- Mpumalanga: `27824398434`
- Gauteng: currently `2764982255` — placeholder based on the supplied digits; replace with the confirmed full number.

The booking form opens WhatsApp; the customer must press **Send** in WhatsApp to submit the message. It does not silently send messages or store bookings in a database.

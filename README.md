# CreativeLab Studio Website

A production-ready React portfolio website for CreativeLab Studio built with Vite, Tailwind CSS v4, Firebase Firestore, Framer Motion, and React Router DOM v7.

## Stack

- React 19
- Vite 8
- Tailwind CSS v4
- Firebase 12 (Firestore)
- Framer Motion
- React Router DOM v7
- Deployed on Vercel

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Environment Variables

This project uses Vite environment variables for Firebase configuration.

Copy the example file and fill in your Firebase project values:

```bash
cp .env.example .env.local
```

Required variables:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_STORAGE_BUCKET`
- `VITE_FIREBASE_MESSAGING_SENDER_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_MEASUREMENT_ID`

## Firebase Setup

Firebase is initialized in `src/lib/firebase.js` and Firestore is exported as `db`.

The application writes to the following Firestore collections:

- `discovery_calls`
- `contact_submissions`

## Deployment

This project is configured for Vercel with SPA fallback via `vercel.json`.

Custom fonts are served from `public/fonts/` and referenced in `src/index.css` as `/fonts/...`.

SEO metadata and Open Graph tags are configured in `index.html`.

## Files of note

- `src/lib/firebase.js`
- `src/pages/DiscoveryCall.jsx`
- `src/pages/Contact.jsx`
- `src/components/DiscoveryForm.jsx`
- `vercel.json`
- `public/robots.txt`
- `public/sitemap.xml`
- `.env.example`

## Notes

- Do not commit `.env.local`.
- Use `.env.example` as the template for required env vars.
- Update Firebase config values in `.env.local` to match your Firebase app.

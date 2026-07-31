# Prathmesh Dake Portfolio — Vercel Ready

This version uses plain HTML, CSS and React JavaScript. React is included
locally inside the `vendor` folder, so Node.js, npm and an internet connection
are not required.

## Run locally

1. Extract the ZIP.
2. Open the extracted folder.
3. Double-click `index.html`.

All seven pages, profile assets and download buttons work directly in the
browser.

## Deploy on Vercel

### Option 1: Upload with GitHub

1. Extract this ZIP.
2. Upload all extracted files to a new GitHub repository. Make sure
   `index.html` and `vercel.json` are at the repository root.
3. Open https://vercel.com/new and sign in.
4. Import the GitHub repository.
5. Keep **Framework Preset** set to `Other`.
6. Leave **Build Command** empty.
7. Leave **Output Directory** empty.
8. Click **Deploy**.

### Option 2: Deploy with Vercel CLI

Install the CLI once:

```bash
npm install -g vercel
```

Open a terminal inside the extracted project folder and run:

```bash
vercel
```

For the production deployment, run:

```bash
vercel --prod
```

No environment variables are required for this portfolio.

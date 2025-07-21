# EasyML Frontend

This project is a Next.js + Tailwind CSS frontend for an end-to-end machine learning pipeline. It interacts with a FastAPI backend via the following endpoints:

- `/dashboard`: ML project overview and key metrics
- `/upload`: Upload datasets (CSV, Excel, JSON)
- `/preprocessing`: Data cleaning, normalization, encoding, etc.
- `/visualizations`: Data visualizations (histograms, scatter plots, etc.)
- `/feature_selection`: Feature importance, dimension reduction
- `/choosing_models`: Select/configure ML algorithms and hyperparameters
- `/results`: Model evaluation, performance, and downloadable reports

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
- `src/app/` - Main app pages and routing
- `src/components/` - Reusable UI components
- `tailwind.config.js` - Tailwind CSS configuration

## Notes
- This project uses **JavaScript only** (no TypeScript).
- All backend communication is via the FastAPI endpoints listed above.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

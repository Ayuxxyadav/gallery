# 🎨 Gallery – Art & Asset Management Platform

A modern **Next.js** web application for managing and showcasing digital art, portraits, and paintings across the world.  
Built with **Next.js App Router**, **Drizzle ORM**, and **PostgreSQL**, this platform lets users explore, upload, and purchase creative assets.

---

## 🚀 Tech Stack

- **Framework:** Next.js 15+ (React + TypeScript)
- **ORM:** Drizzle ORM
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS + shadcn/ui
- **Auth:** NextAuth / Custom Auth
- **Deployment:** Cloudflare Pages / AWS / Docker compatible

---

## 🛠️ Local Development Setup

Follow these steps to get the project running locally 👇

### 1️⃣ Clone the repository
```bash
git clone <your-repo-url>

cd gallery

DATABASE_URL=postgresql://<user>:<password>@localhost:5432/gallery
npx drizzle-kit generate
npx drizzle-kit migrate

npm install

npm run dev

http://localhost:3000

npm run build
npm start





# 🌿 Verdant Earth

> A modern, dynamic web platform for **Verdant Earth**, an NGO dedicated to environmental protection, reforestation, and adult learning across Africa.

## 📖 About the Project

Verdant Earth's digital platform is designed to showcase the organization's high-impact initiatives—from the grassroots Fair Carbon 4 Us campaign in Morogoro to the continent-wide African Continental Project (ACP). 

The platform features a high-end, editorial aesthetic (inspired by modern architectural portfolios) while maintaining a focus on performance, dynamic content delivery, and seamless user experience.

## 🚀 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Frontend/Styling:** React, [Tailwind CSS](https://tailwindcss.com/)
- **Typography:** Zodiak (Headings) & Helvetica Neue (Body text)
- **Database & Backend:** [Supabase](https://supabase.com/) (PostgreSQL)
- **Payments/Donations:** [Lemon Squeezy](https://www.lemonsqueezy.com/)
- **Deployment:** Vercel (Recommended)

## ✨ Core Features

- **Dynamic Initiatives Index:** A fully CMS-driven showcase of current and past projects (fetching dynamically from Supabase).
- **Editorial Blog / Insights:** A dedicated publishing platform for sharing updates from Community Learning Centres (CLCs) and policy briefs.
- **Integrated Donation System:** Frictionless checkout experience powered by Lemon Squeezy.
- **Modern UI/UX:** Glassmorphism hover states, strict typographic scaling, and a custom color palette (Deep Teal `#19474E` & Verdant Green `#166534`).

## 🛠 Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (v18.17 or higher)
- npm, yarn, or pnpm
- A Supabase account and project

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/verdant-earth.git](https://github.com/yourusername/verdant-earth.git)
   cd verdant-earth

   Install dependencies:

Bash
npm install
# or yarn install / pnpm install
Set up Environment Variables:
Create a .env.local file in the root directory and add your Supabase credentials:

Code snippet
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
Database Setup:
Ensure your Supabase PostgreSQL database has the required tables:

projects (id, slug, title, description, full_description, location, image, status, donor, duration, features)

blogs (id, slug, title, category, published_date, excerpt, content, image_url)
Note: Ensure Row Level Security (RLS) policies are set to allow public read access.

Run the development server:

Bash
npm run dev
Open http://localhost:3000 with your browser to see the result.

🎨 Design System / Style Guide
To maintain consistency, please adhere to the following core brand variables:

Background Base: #F7F7F7 (Warm/Neutral White)

Primary Text/Headings: #19474E (Deep Teal)

Accent/CTAs: #166534 (Verdant Green)

Secondary Text: #5D6A6A (Muted Slate)

Card Backgrounds: #DAF3E6 (Soft Green Tint)

📄 License
This project is proprietary and confidential. All rights reserved. © 2026 Verdant Earth.


### Next Steps
Once you save that and push it to GitHub, your repository will look incredibly polished. 

Whenever you are ready, let me know if we should dive into the **"Get Involved"** page or the **"About Us"** page!

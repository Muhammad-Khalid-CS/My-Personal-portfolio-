# Muhammad Khalid — Personal Portfolio Website

A modern, responsive, and mobile-optimized personal portfolio website built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Designed with a sleek dark theme (`#080808` / `#131313`) and signature glowing red accents, featuring smooth navigation across both desktop and mobile devices.

---

## Features

- **Responsive Design (Desktop & Mobile):** Clean adaptive navigation bar with a mobile slide-down menu, responsive timeline layout, and fluid grids.
- **Hero & Typewriter Intro:** Animated role switcher (`Web Developer`, `Web Designer`, `Programmer`, `Front-End Designer`, `Freelancer`), circular glowing profile portrait, quick action buttons (`Hire`, `Contact`), and direct social icon links.
- **Education Timeline:** Interactive vertical timeline showcasing academic milestones from Primary School through BS Computer Science.
- **Services Showcase:** Highlight cards for `Programmer`, `Front-End Designer`, `Web Developer`, and `Freelancer` with hover invert animations.
- **Reviews & Interactive Feedback:** Testimonials section displaying reviewer avatars and 5-star ratings, plus a **"Give a Review"** modal allowing visitors to submit new reviews saved in browser `localStorage`.
- **Contact Section & Footer:** Dual-column contact form that prepares email inquiries along with direct icon links for LinkedIn, Facebook, WhatsApp, and Email.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`) + Custom CSS Glow Effects
- **Icons:** Lucide React
- **Typography:** Poppins (Google Fonts)

---

## Project Structure

```text
├── index.html                  # App entry HTML & Google Fonts
├── package.json                # Dependencies & npm scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundler & Tailwind plugin config
├── public/
│   └── assets/aistudio/        # Profile and reviewer image assets
└── src/
    ├── main.tsx                # React DOM root mount
    ├── App.tsx                 # Main page layout
    ├── index.css               # Global theme variables & glowing styles
    ├── data/
    │   └── portfolioData.ts    # Bio, timeline, services, reviews, & links
    └── components/
        ├── Navbar.tsx          # Responsive top navigation & mobile menu
        ├── HomeSection.tsx     # Hero banner, typewriter effect & avatar
        ├── EducationTimeline.tsx # Vertical education timeline
        ├── ServicesSection.tsx # Services grid cards
        ├── ReviewsSection.tsx  # Reviews grid & interactive "Give a Review" modal
        ├── ContactSection.tsx  # Contact form & social links
        └── Footer.tsx          # Footer links & social icons
```

---

## Getting Started (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone <your-github-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

4. **Build for production**
   ```bash
   npm run build
   ```
   The optimized production files will be generated in the `dist/` folder.

---

## Deploying to Netlify

### Option 1: Connect GitHub Repository (Recommended)
1. Push this project (including this `README.md`) to your GitHub repository.
2. Log in to [Netlify](https://app.netlify.com/) and click **Add new site → Import an existing project**.
3. Select **GitHub** and choose your repository.
4. Set the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**. Every future push to GitHub will automatically rebuild and update your live site.

### Option 2: Manual Deploy (Netlify Drop)
1. Run `npm run build` locally.
2. Drag and drop the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

---

## Connect

- **LinkedIn:** [Muhammad Khalid](https://www.linkedin.com/in/muhammad-khalid-7121642a1?utm_source=share_via&utm_content=profile&utm_medium=member_android)
- **Facebook:** [Profile](https://www.facebook.com/share/19rUCj7X3W/)
- **Email:** muhammadkhalid65787@gmail.com

---

&copy; Muhammad Khalid | All Rights Reserved

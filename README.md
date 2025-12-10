# Kristine Veneles - Portfolio Website

A modern, animated portfolio website showcasing professional experience, projects, and skills.

## Features

- **Smooth Page Transitions**: Custom GSAP-powered animations with banner slide effects when navigating between pages
- **Interactive Project Cards**: Flip animation carousel to browse through projects
- **Responsive Design**: Mobile-friendly layout with hamburger menu navigation
- **Modern UI**: Dark teal theme with clean typography using Tomorrow and Tillana fonts

## Pages

- **Home**: Introduction banner and About section with professional background
- **Resume**: Education details, technical skills organized by category (Languages, Frameworks, Tools)
- **Projects**: Interactive card carousel showcasing development projects

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP (GreenSock Animation Platform)
- **Icons**: Heroicons, React Icons

## Getting Started

### Prerequisites
- Node.js 20+
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5000`

## Project Structure

```
app/
├── components/       # Reusable UI components
│   ├── Banner.tsx
│   ├── Card.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── TransitionLink.tsx
├── utils/
│   └── animations.tsx  # GSAP animation functions
├── Projects/         # Projects page
├── Resume/           # Resume page
├── page.tsx          # Home page
├── layout.tsx        # Root layout
└── template.tsx      # Page transition wrapper
```

## Author

**Kristine Veneles**
- GitHub: [github.com/kveneles](https://github.com/kveneles)
- LinkedIn: [linkedin.com/in/kristine-v](https://www.linkedin.com/in/kristine-v/)

## License

This project is open source and available for personal use.

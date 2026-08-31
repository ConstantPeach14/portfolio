# Wanani Mamidza - Portfolio

A modern, responsive personal portfolio website built with Next.js, React, and Tailwind CSS showcasing the projects, skills, and experience of Wanani Mamidza, a Computer Science graduate and emerging software developer.

## Features

- **Modern Design**: Dark grey and white premium aesthetic with subtle animations
- **Fully Responsive**: Optimized for all device sizes from mobile to desktop
- **Performance Optimized**: Built with Next.js for fast loading and server-side rendering
- **SEO Ready**: Comprehensive SEO configuration with meta tags and structured data
- **Accessible**: WCAG compliant with proper semantic HTML and keyboard navigation
- **Project Showcase**: Detailed project pages with features, technologies, and case studies
- **Skills & Education**: Professional presentation of technical skills and academic background
- **Easy Contact**: Multiple contact options with social media integration

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4
- **Build Tool**: Next.js App Router
- **Deployment**: Vercel

## Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Pages using App Router
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects page and detail pages
│   │   ├── skills/          # Technical skills page
│   │   ├── education/       # Education page
│   │   ├── contact/         # Contact page
│   │   ├── layout.tsx       # Root layout
│   │   ├── globals.css      # Global styles
│   │   └── not-found.tsx    # 404 page
│   ├── components/          # Reusable components
│   │   ├── Navbar.tsx       # Navigation bar
│   │   ├── Footer.tsx       # Footer
│   │   ├── Button.tsx       # Button component
│   │   ├── ProjectCard.tsx  # Project card component
│   │   ├── SkillCard.tsx    # Skill category card
│   │   └── SectionHeading.tsx
│   └── data/
│       └── projects.ts      # Project data
├── public/                  # Static assets
│   └── cv.txt              # Downloadable CV
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This portfolio is configured for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel at [vercel.com](https://vercel.com)
3. Vercel will automatically build and deploy on push

No environment variables are required for basic functionality.

## Customization

### Update Personal Information

Edit contact information, social links, and personal details in:
- `src/app/layout.tsx` - Meta information
- `src/components/Navbar.tsx` - Navigation links
- `src/components/Footer.tsx` - Footer contact info
- `src/app/contact/page.tsx` - Contact details

### Add New Projects

1. Add project data to `src/data/projects.ts`
2. The project pages will automatically generate

### Modify Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component-level: Tailwind classes in component files

## Performance

- Optimized images and assets
- CSS-in-JS minimization via Tailwind
- Static generation for improved performance
- Proper font loading with Next.js Font Optimization

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels where appropriate
- Sufficient color contrast (WCAG AA standard)
- Respects `prefers-reduced-motion` preference

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

This project is owned by Wanani Mamidza. All rights reserved.

## Contact

- **Email**: wananiconstant@gmail.com
- **LinkedIn**: [Wanani Mamidza](https://www.linkedin.com/in/wanani-mamidza-a02b10361)
- **GitHub**: [ConstantPeach14](https://github.com/ConstantPeach14)
- **Phone**: 071 335 7025

---

Built with ❤️ using Next.js and Tailwind CSS

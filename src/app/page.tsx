import Button from '@/components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-80px)] md:min-h-[calc(100vh-100px)] flex items-center justify-center bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-0">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-36 md:w-36 lg:h-40 lg:w-40 overflow-hidden rounded-full border-2 border-pink-300/80 bg-dark-secondary shadow-[0_0_30px_rgba(236,72,153,0.25)] ring-4 ring-pink-500/10">
                <img
                  src="/picture.jpeg"
                  alt="Wanani Mamidza"
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Main Heading */}
            <div className="mb-6 md:mb-8">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight">
                Wanani Mamidza
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary font-medium">
                Computer Science Student | Software Developer
              </p>
            </div>

            {/* Subheading */}
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed">
              Emerging software developer with a strong foundation in web development, database management, and object-oriented programming. Building modern web applications with clean, maintainable code.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/projects" variant="primary" size="lg">
                View My Projects
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-12 md:mt-16">
              <a
                href="https://www.linkedin.com/in/wanani-mamidza-a02b10361"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://github.com/ConstantPeach14"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="mailto:wananiconstant@gmail.com"
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex justify-center mt-16">
              <div className="animate-bounce">
                <svg className="w-6 h-6 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 md:py-24 bg-dark-secondary border-y border-dark-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Highlight 1 */}
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">4+</div>
              <p className="text-text-secondary">Completed Projects</p>
            </div>

            {/* Highlight 2 */}
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">8+</div>
              <p className="text-text-secondary">Technical Skills</p>
            </div>

            {/* Highlight 3 */}
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-2">TUT</div>
              <p className="text-text-secondary">Diploma in Computer Science</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

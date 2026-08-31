import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/Button';

export const metadata = {
  title: 'About | Wanani Mamidza',
  description: 'Learn about Wanani Mamidza, a Computer Science graduate and emerging software developer from Tshwane University of Technology.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="About Me"
            subtitle="Driven by curiosity and a passion for clean, effective code"
            centered
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm an emerging software developer with a strong academic foundation in Computer Science from Tshwane University of Technology. My journey has equipped me with practical experience in full-stack web development, database management, and object-oriented programming.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              What drives me is the opportunity to solve real-world problems through thoughtful software design. I'm particularly interested in web development and building applications that are not just functional, but also intuitive and maintainable. I believe in writing code that others can understand and build upon—code that reflects professionalism and attention to detail.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a fast learner who thrives in collaborative environments, and I'm committed to continuous growth. Whether it's mastering a new technology, refining my craft, or contributing to meaningful projects, I approach every opportunity with enthusiasm and dedication.
            </p>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Core Principles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-dark-secondary border border-dark-border rounded-lg p-8">
                <h4 className="font-bold text-text-primary mb-3 text-lg">Clean Code</h4>
                <p className="text-text-secondary">I write code with clarity and maintainability in mind, making it easy for others to understand and extend.</p>
              </div>
              <div className="bg-dark-secondary border border-dark-border rounded-lg p-8">
                <h4 className="font-bold text-text-primary mb-3 text-lg">Problem Solving</h4>
                <p className="text-text-secondary">I approach challenges analytically, breaking complex problems into manageable solutions.</p>
              </div>
              <div className="bg-dark-secondary border border-dark-border rounded-lg p-8">
                <h4 className="font-bold text-text-primary mb-3 text-lg">Collaboration</h4>
                <p className="text-text-secondary">I believe in the power of teamwork and open communication to create better products.</p>
              </div>
              <div className="bg-dark-secondary border border-dark-border rounded-lg p-8">
                <h4 className="font-bold text-text-primary mb-3 text-lg">Continuous Learning</h4>
                <p className="text-text-secondary">The technology landscape evolves rapidly, and I'm committed to staying current and adapting.</p>
              </div>
            </div>
          </div>

          {/* Technical Focus */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-8">Technical Focus</h3>
            <div className="bg-dark-secondary border border-dark-border rounded-lg p-8">
              <p className="text-text-secondary mb-6">
                My technical expertise spans across the development stack, with particular strength in:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary"><strong>Web Development:</strong> Building responsive, user-friendly interfaces with HTML5, CSS3, and JavaScript</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary"><strong>Backend Development:</strong> Implementing robust business logic and server-side functionality with Java</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary"><strong>Database Design:</strong> Creating efficient, scalable database schemas using SQL</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary"><strong>Software Engineering:</strong> Applying OOP principles, testing strategies, and debugging techniques</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-text-secondary text-lg mb-8">
              Interested in learning more about my work or discussing opportunities?
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

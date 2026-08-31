import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export const metadata = {
  title: 'Projects | Wanani Mamidza',
  description: 'Explore the portfolio projects of Wanani Mamidza, including web applications, e-commerce platforms, and authentication systems.',
};

export default function Projects() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="My Projects"
            subtitle="A selection of projects showcasing my experience in full-stack development, web design, and problem-solving"
            centered
          />
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.shortDescription}
                technologies={project.technologies}
                slug={project.slug}
                category={project.category}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Button from '@/components/Button';
import SectionHeading from '@/components/SectionHeading';
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Wanani Mamidza`,
    description: project.shortDescription,
  };
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-dark-secondary border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-dark-bg bg-text-primary rounded mb-6">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-text-secondary">
            {project.institution} · {project.date}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Overview */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Overview</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-dark-secondary border border-dark-border text-text-secondary rounded font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Challenges & Solutions</h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learnings */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">Key Learnings</h2>
            <ul className="space-y-3">
              {project.learnings.map((learning, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                  <span className="text-text-secondary">{learning}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Links */}
          <div className="border-t border-dark-border pt-12">
            <h2 className="text-2xl font-bold text-text-primary mb-6">View Project</h2>
            <div className="flex flex-col sm:flex-row gap-4">
              {project.liveUrl && (
                <Button href={project.liveUrl} variant="primary" size="lg" external>
                  View Live Project →
                </Button>
              )}
              {project.githubUrl && (
                <Button href={project.githubUrl} variant="outline" size="lg" external>
                  View on GitHub →
                </Button>
              )}
            </div>
          </div>

          {/* Back to Projects */}
          <div className="mt-16 pt-8 border-t border-dark-border">
            <Button href="/projects" variant="secondary">
              ← Back to Projects
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

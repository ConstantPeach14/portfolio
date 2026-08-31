import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  slug: string;
  category: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  slug,
  category,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative bg-dark-secondary border border-dark-border rounded-lg overflow-hidden hover:shadow-card-hover hover:border-dark-tertiary transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        {/* Card Content */}
        <div className="p-6 md:p-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-dark-bg bg-text-primary rounded">
              {category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 group-hover:text-text-secondary transition-colors">
            {title}
          </h3>

          {/* Description */}
          <p className="text-text-secondary text-sm md:text-base mb-6 leading-relaxed">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs bg-dark-tertiary text-text-secondary rounded border border-dark-border"
              >
                {tech}
              </span>
            ))}
            {technologies.length > 3 && (
              <span className="px-2.5 py-1 text-xs text-text-muted">
                +{technologies.length - 3} more
              </span>
            )}
          </div>

          {/* View Project Link */}
          <div className="flex items-center text-text-primary font-medium text-sm group-hover:text-text-secondary transition-colors">
            View Project
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

import SectionHeading from '@/components/SectionHeading';
import SkillCard from '@/components/SkillCard';

export const metadata = {
  title: 'Skills | Wanani Mamidza',
  description: 'Technical skills and professional expertise of Wanani Mamidza in programming, web development, and software engineering.',
};

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'JavaScript'],
    },
    {
      title: 'Web Development',
      skills: ['HTML5', 'CSS3', 'Responsive Design', 'Web Development'],
    },
    {
      title: 'Database & Backend',
      skills: ['SQL', 'Database Management', 'Database Design'],
    },
    {
      title: 'Software Engineering',
      skills: ['Object-Oriented Programming', 'Software Testing', 'Debugging & Troubleshooting'],
    },
    {
      title: 'Professional Skills',
      skills: ['Problem Solving', 'Analytical Thinking', 'Teamwork & Collaboration', 'Communication'],
    },
    {
      title: 'Tools & Platforms',
      skills: ['NetBeans', 'Visual Studio Code', 'Git', 'GitHub'],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Technical Skills"
            subtitle="A comprehensive overview of my programming expertise, tools, and professional capabilities"
            centered
          />
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning */}
      <section className="py-16 md:py-24 bg-dark-secondary border-t border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
            Commitment to Growth
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
            I'm dedicated to continuously expanding my skill set and staying current with industry trends and best practices. I actively seek opportunities to learn new technologies, refine existing skills, and apply cutting-edge approaches to solve real-world problems.
          </p>
        </div>
      </section>
    </>
  );
}

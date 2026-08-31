interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div className="bg-dark-secondary border border-dark-border rounded-lg p-6 md:p-8 hover:border-dark-tertiary hover:shadow-card transition-all duration-300">
      <h3 className="text-xl font-bold text-text-primary mb-6">{title}</h3>
      <ul className="space-y-3">
        {skills.map((skill) => (
          <li key={skill} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-text-secondary">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

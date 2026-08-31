import SectionHeading from '@/components/SectionHeading';

export const metadata = {
  title: 'Education | Wanani Mamidza',
  description: 'Educational background of Wanani Mamidza including Diploma in Computer Science from Tshwane University of Technology.',
};

export default function Education() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-dark-bg border-b border-dark-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Education"
            subtitle="My academic journey and qualifications"
            centered
          />
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-16 md:py-24 bg-dark-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Diploma */}
          <div className="mb-12 md:mb-16">
            <div className="bg-dark-secondary border border-dark-border rounded-lg p-8 md:p-10">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-dark-bg bg-text-primary rounded mb-4">
                  Primary Qualification
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                Diploma in Computer Science
              </h3>
              <p className="text-lg text-text-secondary font-medium mb-4">
                Tshwane University of Technology (TUT)
              </p>
              <p className="text-text-secondary mb-6">
                Successfully completed all academic modules for a comprehensive Diploma in Computer Science with a strong foundation in software development, programming, database management, computer networks, systems analysis, and information technology.
              </p>
              
              {/* Key Areas of Study */}
              <div className="mt-6">
                <h4 className="font-semibold text-text-primary mb-4">Key Areas of Study</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Object-Oriented Programming</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Web Application Development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Database Design & Management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Systems Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Computer Networks</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-text-secondary">Software Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="mb-12 md:mb-16">
            <div className="bg-dark-secondary border border-dark-border rounded-lg p-8 md:p-10">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-dark-bg bg-text-primary rounded mb-4">
                  Secondary Education
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                NSC Bachelor Certificate
              </h3>
              <p className="text-lg text-text-secondary font-medium">
                Maligana Wilson Secondary School
              </p>
            </div>
          </div>

          {/* Educational Highlights */}
          <div className="bg-dark-secondary border border-dark-border rounded-lg p-8 md:p-10">
            <h3 className="text-2xl font-bold text-text-primary mb-6">Educational Achievements</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-text-secondary">Completed comprehensive curriculum covering software engineering fundamentals and advanced topics</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-text-secondary">Developed multiple full-stack projects demonstrating practical application of academic knowledge</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-text-secondary">Applied software engineering best practices including OOP, testing, and debugging throughout projects</span>
              </li>
              <li className="flex items-start">
                <span className="inline-block w-2 h-2 bg-text-primary rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                <span className="text-text-secondary">Demonstrated strong problem-solving, analytical thinking, and teamwork capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

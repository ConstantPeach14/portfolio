export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  liveUrl?: string;
  githubUrl?: string;
  institution: string;
  date: string;
}

export const projects: Project[] = [
  {
    id: '3',
    slug: 'urban-threads-store',
    title: 'Urban Threads Store',
    shortDescription: 'A modern e-commerce store showcasing fashion and apparel with a clean, professional design and smooth user experience.',
    fullDescription: `Urban Threads Store is a professional e-commerce platform dedicated to providing customers with a curated selection of urban fashion and apparel. The store features a modern, intuitive shopping experience with product browsing, detailed product pages, shopping cart functionality, and a seamless checkout process. The platform emphasizes visual presentation and user experience design.`,
    category: 'E-Commerce',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Web Development'],
    features: [
      'Product browsing and filtering',
      'Detailed product pages with images and descriptions',
      'Shopping cart functionality',
      'Responsive design for mobile and desktop',
      'Clean, modern user interface',
      'Category organization',
    ],
    challenges: [
      'Creating an engaging visual design that represents the brand',
      'Optimizing product pages for fast loading',
      'Ensuring smooth cart and checkout experience',
    ],
    learnings: [
      'Enhanced frontend development skills',
      'Improved understanding of e-commerce best practices',
      'Developed eye for responsive design and user experience',
    ],
    liveUrl: 'https://urbanthreadsstore.infinityfree.me/',
    institution: 'Personal Project',
    date: '2025',
  },
  {
    id: '4',
    slug: 'auth-demo',
    title: 'Authentication Demo',
    shortDescription: 'A demonstration of modern authentication patterns and security practices, showcasing secure login and user management implementation.',
    fullDescription: `The Authentication Demo project showcases best practices in implementing secure user authentication and session management. This project demonstrates understanding of security principles, user authentication flows, and proper credential handling. It serves as a reference implementation for authentication patterns in web applications.`,
    category: 'Backend / Security',
    technologies: ['JavaScript', 'Backend Development', 'Security'],
    features: [
      'User registration system',
      'Secure login implementation',
      'Session management',
      'Password handling',
      'Authentication verification',
    ],
    challenges: [
      'Implementing secure password storage',
      'Managing user sessions securely',
      'Preventing common authentication vulnerabilities',
    ],
    learnings: [
      'Deepened understanding of security best practices',
      'Learned about authentication protocols and standards',
      'Improved backend security implementation skills',
    ],
    githubUrl: 'https://github.com/ConstantPeach14/auth-demo.git',
    institution: 'Personal Project',
    date: '2025',
  },
];

export interface Project {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  details: {
    client: string; // The Donor/Partner
    date: string;
    location: string;
    service: string; // Project Type
  };
  features: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    number: '01',
    title: 'African Continental Project',
    slug: 'african-continental-project',
    category: 'Advocacy',
    description: 'A continent-wide initiative facilitating policy dialogue and adult learning education across African borders.',
    fullDescription: 'The African Continental Project (ACP) is a landmark initiative designed to harmonize adult learning and education (ALE) frameworks across the continent. By working with international advisory committees, we ensure that educational policies are both locally relevant and continentally aligned.',
    image: '/projects/acp.jpg',
    details: {
      client: 'DVV International',
      date: 'Jan 2025 - Dec 2026',
      location: 'Pan-African / Cape Town',
      service: 'Policy Advocacy'
    },
    features: [
      'Cross-border policy harmonization',
      'Advisory committee facilitation',
      'ALE financing framework development',
      'Stakeholder documentation'
    ]
  },
  {
    id: '2',
    number: '02',
    title: 'Community Learning Centres',
    slug: 'community-learning-centres',
    category: 'Education',
    description: 'Documenting best practices and success stories in Mzenga and Kibaha to scale community-led growth.',
    fullDescription: 'Our work in Mzenga and Kibaha focuses on the vital role of Community Learning Centres (CLCs). We are producing a detailed documentary and impact reports to showcase how localized education leads to sustainable environmental protection.',
    image: '/projects/clc.jpg',
    details: {
      client: 'Local Communities',
      date: 'Aug 2025 - Present',
      location: 'Mzenga & Kibaha, TZ',
      service: 'Community Development'
    },
    features: [
      '10-minute documentary production',
      'Best practice documentation',
      'Success story mapping',
      'Sustainable agriculture training'
    ]
  }
];
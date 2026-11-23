export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  quote: string;
}

export const PERSONAL_INFO = {
  name: 'Muhammad Khalid',
  firstName: 'Khalid',
  titles: [
    'Web Developer',
    'Web Designer',
    'Programmer',
    'Front-End Designer',
    'Freelancer'
  ],
  homeBio: 'Passionate web developer with expertise in HTML, CSS, and JavaScript, creating responsive and user-friendly websites.',
  avatarPath: '/assets/aistudio/427068-removebg-preview.jpg_b4df2a5c.jpeg',
  social: {
    linkedin: 'https://www.linkedin.com/in/muhammad-khalid-7121642a1?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    facebook: 'https://www.facebook.com/share/19rUCj7X3W/',
    whatsapp: 'https://wa.me/923424215889',
    email: 'mailto:muhammadkhalid65787@gmail.com'
  }
};

export const TIMELINE: TimelineItem[] = [
  {
    year: '2020',
    title: 'Primary School',
    description: 'Completed primary education with a strong foundation in core subjects.'
  },
  {
    year: '2022',
    title: 'Matriculation',
    description: 'Graduated with excellent grades, focusing on science and mathematics.'
  },
  {
    year: '2024',
    title: 'Intermediate',
    description: 'Completed intermediate studies with a focus on computer science.'
  },
  {
    year: '2028',
    title: 'University',
    description: 'Currently pursuing a BS in Computer Science.'
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'programmer',
    title: 'Programmer',
    description: 'Developing efficient and scalable code in languages like C++, JavaScript, and Python.'
  },
  {
    id: 'frontend',
    title: 'Front-End Designer',
    description: 'Crafting visually appealing and responsive user interfaces using HTML, CSS, and JavaScript.'
  },
  {
    id: 'web-dev',
    title: 'Web Developer',
    description: 'Building dynamic and user-friendly websites tailored to modern client needs.'
  },
  {
    id: 'freelancer',
    title: 'Freelancer',
    description: 'Offering flexible, high-quality development and design services for diverse projects.'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'muhammad-usman',
    name: 'Muhammad Usman',
    role: 'Web Developer & Colleague',
    rating: 5,
    avatar: '/assets/aistudio/Muhammad_Usman_81919fe0.jpeg',
    quote: 'Khalid delivered an outstanding website with excellent attention to detail.'
  },
  {
    id: 'saad-ali',
    name: 'Saad Ali',
    role: 'Client',
    rating: 5,
    avatar: '/assets/aistudio/Saad_Ali_4c99f289.jpeg',
    quote: 'Working with Khalid was a pleasure; his skills and dedication are top-notch!'
  },
  {
    id: 'sher-ali',
    name: 'Sher Ali',
    role: 'Project Partner',
    rating: 5,
    avatar: '/assets/aistudio/Sher_Ali_9bd61522.jpeg',
    quote: 'Khalid’s work is professional, timely, responsive, and highly creative.'
  }
];

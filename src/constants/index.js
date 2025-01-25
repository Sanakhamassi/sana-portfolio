import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  digi,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  novobit,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  wereact,
  python,
  angular,
  spring,
  java,
  tensor,
  clipz,
  flask,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "AI Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ML & Web Integration",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "Tensorflow",
    icon: tensor,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Java",
    icon: java,
  },

  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "SpringBoot",
    icon: spring,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },

  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer Intern",
    company_name: "weraect",
    icon: wereact,
    iconBg: "#E6DEDD",
    date: "February 2021 - Mai 2021",
    points: [
      "Designing and developing a comprehensive web and mobile application to streamline delivery management and facilitate delivery personnel's tasks.",
      "Utilizing a cutting-edge technology stack, including React.js, React Native, Node.js, REST API, and MongoDB, to create an efficient and scalable solution.",
      "The mobile application empowers delivery personnel with real-time task tracking, route optimization, and status updates, while the web application provides management teams with tools for monitoring, assigning deliveries, and overseeing operations.",
      "Focusing on user-centric design, seamless data synchronization, and system performance to enhance operational efficiency and user satisfaction.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "wereact",
    icon: wereact,
    iconBg: "#E6DEDD",
    date: "June 2021 - September 2022",
    points: [
      "  Designing and developing a dynamic e-commerce web application to enable seamless buying and selling of a wide range of products.",
      "Leveraging a powerful technology stack, including Next.js, Node.js, GraphQL, and MongoDB, to deliver a fast, scalable, and user-friendly platform.",
      "Collaborating with cross-functional teams to ensure smooth integration of features such as product listings, user accounts, and secure payment processing.",
    ],
  },
  {
    title: "Full stack Developer Intern",
    company_name: "Digi Smart Solution",
    icon: digi,
    iconBg: "#E6DEDD",
    date: "June 2023 - August 2023",
    points: [
      "Designing and developing a real-time application for tracking and monitoring sensor data to ensure seamless data visualization and management.",
      "Utilizing a modern technology stack, including Angular, Spring Boot, and MongoDB, to deliver a robust and scalable solution.",
      "Collaborating with cross-functional teams to integrate real-time data processing pipelines and user-friendly interfaces into the system.",
      "Focusing on performance optimization, system reliability, and iterative improvements to enhance user experience and operational efficiency.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "novobit",
    icon: novobit,
    iconBg: "#383E56",
    date: "February 2024 - November 2024",
    points: [
      "Designing and developing a deep learning-driven smart advertising platform to enhance ad personalization through demographic and emotional analysis.",
      "Leveraging a robust technology stack, including Python, TensorFlow, Flask, MongoDB, and statistical methods, CNNs to build scalable, high-performance solutions.",
      "Collaborating with cross-functional teams, including data scientists, product managers, and designers, to ensure seamless integration of deep learning models into the advertising framework.",
      "Participating in model evaluations, reviewing code, and providing constructive feedback to improve system performance and scalability.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Ai ChatBot",
    description: "Web-based platform, AI Chatbot inspired by ChatGPT.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "red-text-gradient",
      },
      {
        name: "OpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Sanakhamassi/aiChatBot",
  },
  {
    name: "CLIPZ-Project",
    description:
      "Development of a web application called “Clips” intended for video game players who want to share their glorious moments on video with the community.",
    tags: [
      {
        name: "AngularJs",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "web-assembly",
        color: "red-text-gradient",
      },
    ],
    image: clipz,
    source_code_link: "https://github.com/Sanakhamassi/CLIPS-Project",
  },
  {
    name: "Smart Exam",
    description:
      "Application for exam management at ISI, using microservices architecture.",
    tags: [
      {
        name: "SpringBoot",
        color: "blue-text-gradient",
      },
      {
        name: "React-Native",
        color: "green-text-gradient",
      },
      {
        name: "Angular",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/imen728/Projet_Initiative_Personnelle",
  },
];

export { services, technologies, experiences, testimonials, projects };

export interface Project {
  title: string;
  techStack: string[];
  description: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  score: string;
}

export const P_DATA = {
  personal: {
    name: "Ansik Aryan Samal",
    role: "Full-Stack Developer & Cyber Security Enthusiast",
    email: "aryanansik@gmail.com",
    phone: "+91-7032156925",
    location: "Hyderabad, India",
    linkedin: "#",
    github: "#",
    summary: "Computer Science undergraduate with hands-on experience in full-stack web development, machine learning applications, and secure systems design. Proven ability to build scalable applications, implement authentication and encryption mechanisms, and deliver measurable results through data-driven solutions."
  },
  education: [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Institute of Aeronautical Engineering, Dundigal, Telangana",
      duration: "2021 - 2025",
      score: "CGPA: 7.33"
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Trividyaa Junior College, Hyderabad",
      duration: "2020",
      score: "Percentage: 98.2%"
    }
  ] as Education[],
  skills: [
    {
      category: "Programming Languages",
      skills: ["C++", "Java", "Python", "JavaScript", "C", "SQL"]
    },
    {
      category: "Web Technologies",
      skills: ["Node.js", "Express.js", "React", "Flask", "Tailwind CSS"]
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB"]
    },
    {
      category: "Tools & Frameworks",
      skills: ["Git", "GitHub", "Passport.js", "bcrypt", "yfinance API"]
    },
    {
      category: "Core Concepts",
      skills: ["Data Structures", "Algorithms", "OOP", "Authentication", "Encryption", "REST APIs", "Computer Networks", "System Design", "SOLID Principles", "CI/CD"]
    }
  ] as SkillCategory[],
  experience: [
    {
      role: "Cyber Security Intern",
      company: "Edunet Foundation & IBM SkillBuild",
      duration: "6-Week Internship",
      description: [
        "Learned cybersecurity fundamentals, network security, and threat mitigation techniques.",
        "Explored steganography used to hide data within images and how to retrieve data using LSB (Least Significant Bit) manipulation.",
        "Created an interactive GUI that uses bit manipulation to store data into an image and decrypt it when needed."
      ]
    }
  ] as Experience[],
  projects: [
    {
      title: "Stenography Application",
      techStack: ["Flask", "React", "Tailwind CSS", "react-router-dom"],
      description: [
        "Built a secure web application enabling users to encrypt plaintext messages into image files and decrypt them at the receiver end.",
        "Implemented pixel altering-based encryption, ensuring secure data transmission.",
        "Designed a responsive frontend with dark mode support, improving user experience and accessibility.",
        "Implemented client-side routing, reducing page reload time and improving navigation efficiency."
      ]
    },
    {
      title: "Stock Price Prediction Model",
      techStack: ["Python", "Pandas", "Machine Learning", "yfinance"],
      description: [
        "Developed a machine learning-based stock price prediction system using Python and pandas.",
        "Integrated real-time financial data from the yfinance API, processing over 5,000+ historical data points per stock.",
        "Improved data preprocessing and feature handling, resulting in more consistent and reliable prediction outputs."
      ]
    },
    {
      title: "Full-Stack Todo Application",
      techStack: ["Node.js", "Express", "Passport.js", "bcrypt", "Tailwind CSS"],
      description: [
        "Designed and deployed a full-stack todo application using Node.js and Express.",
        "Implemented user authentication with Passport.js and encrypted passwords using bcrypt, strengthening application security.",
        "Improved task management efficiency by enabling CRUD operations with a clean and responsive UI."
      ]
    }
  ] as Project[]
};
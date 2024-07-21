// Skills imges
// import About_img from "../../../public/Images/Profile pic.jpg";

// Collage & School img
import PIEMR from "../../../public/Images/PIEMR.png";
import NBM from "../../../public/Images/NBM.png";

// projects img
import Portfolio from "../../../public/Projects/project 1.png";
import newE_comm from "../../../public/Projects/new E-commerce.png";
import My_Portfolio from "../../../public/Projects/11 Personal Portfolio.png";
import Contact_APP from "../../../public/Projects/12 Firebase Contact CRUD.png";
import Nike_Shoe from "../../../public/Projects/13 Nike store.png";
import Weather_Tracker from "../../../public/Projects/06 Pro Weather App.png";
import Razorpay_Clone from "../../../public/Projects/10 Razorpay-Clone.png";
import Cara_E_commerce from "../../../public/Projects/02 Pro - Shopping Image 1.png";
import Password_generator from "../../../public/Projects/07 Pro Password genrator -APP0.png";
import Basic_Portfolio from "../../../public/Projects/01 Pro (Portfolio website 1).png";
import Client_Portfolio from "../../../public/Projects/03 Pro - Client Portfolio 1.png";
import Spotify_clone from "../../../public/Projects/04 Pro - Spotify Clone 1.png";
import Login_Page from "../../../public/Projects/05 Pro - Login Page 1.png";
import Registration_page from "../../../public/Projects/08 Registration Page.png";
import TechSoft from "../../../public/Projects/Tech_Soft Blog.png";

import Vite_React from "../../../public/Projects/Vite_react.png";
import firebase from "../../../public/Projects/Firebase.png";

import Java from "../../../public/Projects/java.png";
import HTML from "../../../public/Projects/Html.png";
import CSS from "../../../public/Projects/Css.png";
import Javascript from "../../../public/Projects/Js.png";
import Tailwind from "../../../public/Projects/Tailwind.png";
import MongoDB from "../../../public/Projects/MongoDB.png";
import Express from "../../../public/Projects/Express.png";
import React from "../../../public/Projects/React.png";
import Node from "../../../public/Projects/Node.png";
import Redux from "../../../public/Projects/redux.png";
import GitHub from "../../../public/Projects/github.png";
import Git from "../../../public/Projects/git.png";
import Figma from "../../../public/Projects/figma.png";
import Arduino from "../../../public/Projects/arduino.png";
import Nextjs from "../../../public/Projects/next.js.png";
import Typescript from "../../../public/Projects/typescript.png";

import Vercel from "../../../public/3D ICON/Vercel.png";

const data = {
  About: [
    {
      id: 1,
      title: "ABOUT ME ",
      heading: "Hi, I'm Raj Yadav & I'm ",
      description:
        "I recently completed my B.Tech in ECE from PIEMR, Indore. I'm passionate about the software industry and thrive on challenges. As an avid learner with a natural curiosity, I am eager to explore new horizons in both my academic and professional journey.",
      email: "rajyadav7047@gmail.com",
      location: "Indore (M.P), 452010",
    },
  ],
  Project: [
    // 1. title: "My Portfolio",
    {
      id: 1,
      title: "Portfolio",
      date: "Mar 2024 - Apr 2024",
      description:
        "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged JavaScript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
      image: Portfolio,
      link: "https://github.com/Rajyadav2912/NEW_PORTFOLIO",
      weblink: "https://raj-portfolio-2920.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: React,
        },
        {
          id: 2,
          name: "Tailwind Css",
          image: Tailwind,
        },
        {
          id: 3,
          name: "HTML",
          image: HTML,
        },
        {
          id: 4,
          name: "CSS",
          image: CSS,
        },
        {
          id: 5,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "Frontend",
    },
    // 2.  title: "Tech-Soft Blog website",
    {
      id: 2,
      title: "Tech-Soft Blog website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
      image: TechSoft,
      link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
      weblink: "https://tech-soft-blog.vercel.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
        {
          id: 4,
          name: "React.js",
          image: React,
        },
        {
          id: 5,
          name: "Tailwind",
          image: Tailwind,
        },
      ],
      category: "Frontend",
    },
    // 3. title: "My Portfolio",
    {
      id: 3,
      title: "Full Stack E-commerce website",
      date: "Mar 2024 - Apr 2024",
      description:
        "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
      image: newE_comm,
      link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          image: MongoDB,
        },
        {
          id: 2,
          name: "Express.js",
          image: Express,
        },
        {
          id: 3,
          name: "React.js",
          image: React,
        },
        {
          id: 4,
          name: "Node.js",
          image: Node,
        },
        {
          id: 5,
          name: "Tailwind Css",
          image: Tailwind,
        },
      ],
      category: "Full Stack",
    },
    // 4. title: "Contact APP with CRUD",
    {
      id: 4,
      title: "Contact APP with CRUD",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
      image: Contact_APP,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/07_Projects/contact-app-crud",
      weblink: "https://contact-app-crud.vercel.app/",
      skills: [
        {
          id: 1,
          name: "Vite and React.js",
          image: Vite_React,
        },
        {
          id: 2,
          name: "Node.js",
          image: Node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: Tailwind,
        },
        {
          id: 4,
          name: "Firebase",
          image: firebase,
        },
      ],
      category: "Full Stack",
    },
    // 5 title: "Nike Shoes Website",
    {
      id: 5,
      title: "Nike Shoes Website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Developed an e-commerce Nike shoe store with integrated contact support. Utilized React.js and JavaScript for front-end development. Implemented Tailwind CSS for modern and efficient styling",
      image: Nike_Shoe,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/05_Projects/nike-shoes-landing-page",
      weblink: "https://nike-shoes-store-orcin.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: React,
        },
        {
          id: 2,
          name: "Node.js",
          image: Node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: Tailwind,
        },
      ],
      category: "Frontend",
    },
  ],
  Projects: [
    // 1.  title: "Tech-Soft Blog website",
    {
      id: 1,
      title: "Tech-Soft Blog website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created and executed the Tech-Soft Blog website to showcase trending technologies, software, AI, and applications. Rendered React.js for the front end to build a flexible and interactive user experience. Implemented API integration to fetch and display real-time data on the latest new trends. Efficiently managed state to ensure seamless data handling and updates.",
      image: TechSoft,
      link: "https://github.com/Rajyadav2912/Tech_Soft_Blog-Website",
      weblink: "https://tech-soft-blog.vercel.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
        {
          id: 4,
          name: "React.js",
          image: React,
        },
        {
          id: 5,
          name: "Tailwind",
          image: Tailwind,
        },
      ],
      category: "Frontend",
    },
    // 2. title: "My Portfolio",
    {
      id: 2,
      title: "Portfolio",
      date: "Mar 2024 - Apr 2024",
      description:
        "Designed a personal portfolio website showcasing skills and projects for personal growth. Applied successfully email.js API for form validation and sending emails/messages for collaboration and other. Leveraged JavaScript, React.js, and Node.js to create interactive & dynamic features, enhancing user experience. Utilized Tailwind CSS for styling and layout, ensuring a responsiveness to across devices. Integrated 3D animations and 3D images for enhanced visual appeal and engagement.",
      image: Portfolio,
      link: "https://github.com/Rajyadav2912/NEW_PORTFOLIO",
      weblink: "https://raj-portfolio-2920.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: React,
        },
        {
          id: 2,
          name: "Tailwind Css",
          image: Tailwind,
        },
        {
          id: 3,
          name: "HTML",
          image: HTML,
        },
        {
          id: 4,
          name: "CSS",
          image: CSS,
        },
        {
          id: 5,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "Frontend",
    },
    // 3. title: "Full Stack E-commerce website",
    {
      id: 3,
      title: "Full Stack E-commerce website",
      date: "Mar 2024 - Apr 2024",
      description:
        "Developed a full-stack E-commerce website with an Admin panel using MERN and Tailwind.css. Gained expertise in database management, server-side scripting, dynamic UI development, and responsive design. Utilized JSON Web Token (JWT) for secure authentication & optimizing database queries, and user-friendly experiences. Enhanced coding expertise through hands-on project experience, gaining valuable problem-solving skills and adaptability.",
      image: newE_comm,
      link: "https://github.com/Rajyadav2912/E-commerce-Shopping-website-MERN",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "MongoDB",
          image: MongoDB,
        },
        {
          id: 2,
          name: "Express.js",
          image: Express,
        },
        {
          id: 3,
          name: "React.js",
          image: React,
        },
        {
          id: 4,
          name: "Node.js",
          image: Node,
        },
        {
          id: 5,
          name: "Tailwind Css",
          image: Tailwind,
        },
      ],
      category: "Full Stack",
    },
    // 4. title: "My Portfolio",
    {
      id: 4,
      title: "My Portfolio",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a amazing portfolio website using HTML, CSS, and JavaScript. Implemented animations, 3D effects with CSS and full responsive Integrated ScrollReveal for smooth scroll and utilized email.js API for contact",
      image: My_Portfolio,
      link: "https://github.com/Rajyadav2912/RAJ_PORTFOLIO",
      weblink: "https://raj-portfolio-29.netlify.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "HTML/CSS/Js",
    },
    // 5. title: "Contact APP with CRUD",
    {
      id: 5,
      title: "Contact APP with CRUD",
      date: "Jan 2024 - feb 2024",
      description:
        "Developed a Contact App project with CRUD (Create, Read, Update, Delete) functionality. Implemented Firebase as the backend database for data management. Utilized Vite and React.js for core structure and functionality of application",
      image: Contact_APP,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/07_Projects/contact-app-crud",
      weblink: "https://contact-app-crud.vercel.app/",
      skills: [
        {
          id: 1,
          name: "Vite and React.js",
          image: Vite_React,
        },
        {
          id: 2,
          name: "Node.js",
          image: Node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: Tailwind,
        },
        {
          id: 4,
          name: "Firebase",
          image: firebase,
        },
      ],
      category: "Full Stack",
    },
    // 6 title: "Nike Shoes Website",
    {
      id: 6,
      title: "Nike Shoes Website",
      date: "Feb 2024 - Mar 2024",
      description:
        "Developed an e-commerce Nike shoe store with integrated contact support. Utilized React.js and JavaScript for front-end development. Implemented Tailwind CSS for modern and efficient styling",
      image: Nike_Shoe,
      link: "https://github.com/Rajyadav2912/Learn_React_Js_with_Projects/tree/master/05_Projects/nike-shoes-landing-page",
      weblink: "https://nike-shoes-store-orcin.vercel.app/",
      skills: [
        {
          id: 1,
          name: "React.js",
          image: React,
        },
        {
          id: 2,
          name: "Node.js",
          image: Node,
        },
        {
          id: 3,
          name: "Tailwind.css",
          image: Tailwind,
        },
      ],
      category: "Frontend",
    },
    // 7. title: "Weather Tracking Web App",
    {
      id: 7,
      title: "Weather Tracking Web App",
      date: "Feb 2024 - Mar 2024",
      description:
        "Created a user-friendly interface using HTML and CSS for smooth experience. Used advanced Js techniques to dynamically update information. Mastered fetch API's integration, combining with Js skills to build an interactive Weather Tracker Web App.",
      image: Weather_Tracker,
      link: "https://github.com/Rajyadav2912/08-WEATHER-APP",
      weblink: "https://weather-tracker-app-8b6e69.netlify.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "Javascript",
          image: Javascript,
        },
      ],
      category: "Javascript",
    },
    // 8. title: "Razorpay Clone",
    {
      id: 8,
      title: "Razorpay Clone",
      date: "Jan 2024 - Feb 2024",
      description:
        "Successfully replicated Razorpay's clone using HTML, CSS, and Tailwind CSS. Ensured a smooth user experience by implementing a responsive website design, making the Razorpay clone accessible across various devices.",
      image: Razorpay_Clone,
      link: "https://github.com/Rajyadav2912/05-RAZOR_PAY-Clone",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "Tailwind.css",
          image: Tailwind,
        },
        {
          id: 3,
          name: "Node.js",
          image: Node,
        },
      ],
      category: "Frontend",
    },
    // 9. title: "E-commerce Shopping Website",
    {
      id: 9,
      title: "E-commerce Shopping Website",
      date: "July 2023 - Aug 2024",
      description:
        "Built an E-commerce shopping website using HTML, CSS, and JavaScript. Implemented a product catalogue, shopping cart, blog site, about, services and checkout process. Made the website responsive for mobile-friendly and any device.",
      image: Cara_E_commerce,
      link: "https://github.com/Rajyadav2912/E-commer_Shopping_Website",
      weblink: "https://e-commerce-shopping-website-29.netlify.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "Javascript",
    },
    // 10. title: "Password Generator WebApp",
    {
      id: 10,
      title: "Password Generator WebApp",
      date: "Feb 2024 - Mar 2024",
      description:
        "Built a strong Password Generator with HTML, CSS, and JavaScript for reliable and secure password creation. Used javaScript, core concepts like methods, properties, and attributes.",
      image: Password_generator,
      link: "https://github.com/Rajyadav2912/07-PASSWORD-GENERATOR",
      weblink: "https://rajyadav2912.github.io/07-PASSWORD-GENERATOR/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "Javascript",
    },
    // 11. title: "Basice Portfolio",
    {
      id: 11,
      title: "Basice Portfolio",
      date: "Aug 2023 - Sep 2023",
      description:
        "Built a portfolio website to showcase web development skills. Constantly updated website with new projects to track my progress and improve relevant skills. Learned about the importance of design and usability.",
      image: Basic_Portfolio,
      link: "https://github.com/Rajyadav2912/Raj_Portfolio_2920",
      weblink: "https://raj-portfolio-2920.netlify.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "HTML/CSS",
    },
    // 12. title: "Client Portfolio Website",
    {
      id: 12,
      title: "Client Portfolio Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Designed and developed a professional Portfolio website to showcase skills, projects, and achievements. Created an attractive and user-friendly interface to engage potential employers.",
      image: Client_Portfolio,
      link: "https://github.com/Rajyadav2912/Portfolio-Website",
      weblink: "https://rajyadav2912.github.io/Portfolio-Website/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "HTML/CSS",
    },
    // 13. title: "Spotify Clones Website",
    {
      id: 13,
      title: "Spotify Clones Website",
      date: "Aug 2023 - Sep 2023",
      description:
        "Developed a responsive music streaming website using HTML, CSS, and JavaScript, replicating the user interface of Spotify. Created a visually appealing and user-friendly design, ensuring seamless navigation and ease of use.",
      image: Spotify_clone,
      link: "https://github.com/Rajyadav2912/Spotify_Clone",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "Javascript",
    },
    // 14. title: "Login Page",
    {
      id: 14,
      title: "Login Page",
      date: "Aug 2023 - Sep 2023",
      description:
        "Our project focuses on creating a user-friendly login page for our website. It provides a secure and streamlined login process, allowing users to access their personalized accounts with ease.",
      image: Login_Page,
      link: "https://github.com/Rajyadav2912/Login-Page",
      weblink: "https://website-login-page-2920.netlify.app/",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "HTML/CSS",
    },
    // 15.  title: "Registration From",
    {
      id: 15,
      title: "Registration From",
      date: "Aug 2023 - Sep 2023",
      description: "Basic Registration website",
      image: Registration_page,
      link: "",
      weblink: "",
      skills: [
        {
          id: 1,
          name: "HTML",
          image: HTML,
        },
        {
          id: 2,
          name: "CSS",
          image: CSS,
        },
        {
          id: 3,
          name: "JavaScript",
          image: Javascript,
        },
      ],
      category: "HTML/CSS",
    },
  ],
  Education: [
    {
      id: 1,
      name: "Prestige Institute of Engineering Management & Research, Indore",
      date: "June 2020 - June 2024",
      branch: "Branch: Electronic's and Communication Engineering",
      image: PIEMR,
      standard: "Year : B.Tech-(4th) ",
    },
    {
      id: 2,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2019 - March 2020",
      branch: "Branch: English Medium",
      image: NBM,
      standard: "Class: 12th (PCM) | MPBSE",
    },
    {
      id: 3,
      name: "Nehru Bal Mandir Higher Secondry School, Indore",
      date: "June 2017 - March 2018",
      branch: "Branch: English Medium",
      image: NBM,
      standard: "Class: 10th | MPBSE",
    },
  ],
  Skills: [],
};

export default data;

export const skill6 = [
  {
    id: 1,
    name: "Java",
    image: Java,
    width: 80,
    height: 80,
  },
  {
    id: 2,
    name: "HTML",
    image: HTML,
    width: 60,
    height: 60,
  },
  {
    id: 3,
    name: "CSS",
    image: CSS,
    width: 60,
    height: 60,
  },
  {
    id: 4,
    name: "Javascipt",
    image: Javascript,
    width: 60,
    height: 60,
  },
  {
    id: 5,
    name: "Tailwind.css",
    image: Tailwind,
    width: 65,
    height: 65,
  },
  {
    id: 6,
    name: "Redux",
    image: Redux,
    width: 60,
    height: 60,
  },
];

export const skill5 = [
  {
    id: 7,
    name: "MongoDB",
    image: MongoDB,
    width: 80,
    height: 80,
  },
  {
    id: 8,
    name: "Express.js",
    image: Express,
    width: 80,
    height: 80,
  },
  {
    id: 9,
    name: "React,.js",
    image: React,
    width: 80,
    height: 80,
  },
  {
    id: 10,
    name: "Node.js",
    image: Node,
    width: 80,
    height: 80,
  },

  {
    id: 11,
    name: "Next.js",
    image: Nextjs,
    width: 80,
    height: 80,
  },
];

export const skill4 = [
  {
    id: 12,
    name: "TypeScript",
    image: Typescript,
    width: 70,
    height: 70,
  },
  {
    id: 13,
    name: "Figma",
    image: Figma,
    width: 80,
    height: 80,
  },
  {
    id: 14,
    name: "GitHub",
    image: GitHub,
    width: 80,
    height: 80,
  },
  {
    id: 15,
    name: "Git",
    image: Git,
    width: 80,
    height: 80,
  },
];

export const skill3 = [
  {
    id: 16,
    name: "Arduino",
    image: Arduino,
    width: 80,
    height: 80,
  },
  {
    id: 17,
    name: "Vercel",
    image: Vercel,
    width: 80,
    height: 80,
  },
];

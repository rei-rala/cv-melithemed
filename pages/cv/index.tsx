import type { NextPage } from "next";
import Head from "next/head";

import { Header, Footer, Message, Profile } from "components";
import { useEffect, useRef, useState } from "react";
import useMessage from "hooks/useMessage";

let profileExample = {
  username: "ramonirala", // this will be pointed from ownerId, Cv model won't have username property
  ownerId: "",
  name: "Ramon Irala",
  headline: "Fullstack Developer Junior",
  about: `I was a student in the Public Accountant degree program at the University of Buenos Aires until 2020. Currently, I am studying the University Technical Degree in Software Development at UADE, after which I will continue with a degree in Computer Engineering.

  Personally, I learned web development through various courses and the internet. At present, I am focused on learning, practicing with project development, and continuing to learn about the processes and best practices in this field. I mainly program in JavaScript and some Python. I use React and Next.js as web frontend frameworks. For backend, I use Node.js, Express, and some Django and Flask. I also use technologies such as TypeScript, SQL, MongoDB, jQuery, SASS, among others.
  
  I like to describe myself as an analytical, detail-oriented, and enthusiastic person who enjoys identifying weaknesses and areas for improvement and developing solutions. I am interested in furthering my knowledge in front-end development, learning backend development, and blockchain.
  
  My portfolio is still in development, but my Github can be visited to get an idea of what I am currently working on.
  
  Github: https://github.com/rei-rala
  Email: ramonirala@outlook.com`,
  images: [
    "https://media.licdn.com/dms/image/C4D03AQECDCVkG6IfxQ/profile-displayphoto-shrink_800_800/0/1668085573452?e=1684972800&v=beta&t=tngZWhkZuDfBWn-4Qh2_vO4EKR0Xmp1bcfW7opOL3-M",
  ],
  academic: [
    {
      where: "Universidad Argentina de la Empresa",
      from: new Date("2020-01-31"),
      to: new Date("2024-12-31"),
      title: "Tecnicatura Universitaria en Desarrollo de Software",
      condition: "En curso",
      description: "",
      isCurrent: true,
    },
  ],
  professional: [
    {
      where: "Garantizar SGR",
      from: new Date("2022-12-31"),
      to: new Date(),
      title: "Full Stack Developer",
      seniority: "Junior",
      isCurrent: true,
    },
    {
      where: "Garantizar SGR",
      from: new Date("2017-12-31"),
      to: new Date("2022-12-31"),
      title: "Credit Risk Analyst",
      seniority: "Semi Senior",
    },
    {
      where: "KPMG",
      from: new Date("2015-12-31"),
      to: new Date("2017-08-31"),
      title: "Audit",
      seniority: "Junior",
    },
  ],
  contact: [
    {
      type: "LinkedIn",
      url: "https://www.linkedin.com/in/ramon-irala-220362110/",
    },
    {
      type: "GitHub",
      url: "https://github.com/rei-rala",
    },
    {
      type: "e-Mail",
      url: "ramonirala@outlook.com",
    },
    {
      type: "Portfolio",
      url: "",
    },
  ],
  customSection: {
    title: "Tech Stack",
    hover: "Experience",
    lines: [
      {
        text: "HTML5",
        icon: "https://img.icons8.com/color/html-5",
        tooltip: "+2 years of experience",
      },
      {
        text: "CSS3",
        icon: "https://img.icons8.com/color/css3",
        tooltip: "+2 years of experience",
      },
      {
        text: "SASS",
        icon: "https://img.icons8.com/color/sass",
        tooltip: "+2 years of experience",
      },
      {
        icon: "https://img.icons8.com/color/javascript",
        text: "JavaScript",
        tooltip: "+2 years of experience",
      },
      {
        icon: "https://img.icons8.com/color/react-native",
        text: "React",
        tooltip: "+2 years of experience",
      },
      {
        text: "Next.js",
        icon: "https://img.icons8.com/color/nextjs",
        tooltip: "a year of experience",
      },
      {
        text: "C#",
        icon: "https://img.icons8.com/color/cs",
        tooltip: "a year of experience",
      },
      {
        icon: "https://img.icons8.com/color/nodejs",
        text: "Node.js",
        tooltip: "+1 years of experience",
      },
      {
        text: "Express",
        icon: "https://img.icons8.com/color/express",
        tooltip: "+1 years of experience",
      },
      {
        text: "Firebase",
        icon: "https://img.icons8.com/color/firebase",
        tooltip: "Basic",
      },
      {
        icon: "https://img.icons8.com/color/python",
        text: "Python",
        tooltip: "",
      },
      {
        icon: "https://img.icons8.com/color/django",
        text: "Django",
        tooltip: "",
      },
      {
        icon: "https://img.icons8.com/color/java",
        text: "Java",
        tooltip: "",
      },
      {
        icon: "https://img.icons8.com/color/git",
        text: "Git",
        tooltip: "+2 years of experience",
      },
      {
        text: "Github",
        icon: "https://img.icons8.com/color/github",
        tooltip: "Using since learned GIT",
      },
      {
        text: "MongoDB",
        icon: "https://img.icons8.com/color/mongodb",
        tooltip: "A year of experience",
      },
      {
        text: "SQL",
        icon: "https://img.icons8.com/color/sql",
        tooltip: "A year of experience",
      },
    ],
  },
  highlights: [
    {
      type: "good",
      text: "Technology enthusiast",
    },
    {
      type: "good",
      text: "Inquisitive, enjoy keeping myself learning",
    },
    {
      type: "good",
      text: "Detail-oriented",
    },
    {
      type: "good",
      text: "Highly dedicated",
    },
    {
      type: "good",
      text: "Always willing to demonstrate what I am capable of achieving",
    },
    {
      type: "good",
      text: "Positive attitude",
    },
    {
      type: "bad",
      text: "Sometimes I underestimate myself",
    },
  ],
  languages: [
    {
      name: "Español",
      icon: "https://img.icons8.com/color/spain",
      level: "Native",
    },
    {
      name: "Ingles",
      icon: "https://img.icons8.com/color/usa",
      level: "Excellent reading and listening - C2 Level",
    },
  ],
};

console.info(
  "%cHola curios@!",
  "color: #00ff00; background-color: black; font-size: 2em;"
);
console.log(
  "%cSi estas aqui, probablemente quieras conocer un poco mas de este desarrollo",
  "color: #000; background-color: #fff; font-size: 1.1em;"
);
console.log(
  "%cPara tu comodidad, te dejare el objeto del perfil de prueba",
  "color: #000; background-color: #fff; font-size: 1.1em;"
);
console.log(
  "%cEn un futuro, la pagina podra servir diferentes templates de CV a otros usuarios 😊",
  "font-size: 0.8em;"
);
console.log(profileExample);

const CvPage: NextPage = () => {
  let dropdownDurationMS = 500;
  let msgVisibilityMs = 2500;
  const { message, isMsgVisible, pushMessage } = useMessage(msgVisibilityMs);
  const lastPageItem = useRef<HTMLDivElement>(null);

  const [showingFooter, setShowingFooter] = useState(false);
  const [isScrolledMax, setIsScrolledMax] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let currentScrollY = window.innerHeight + window.scrollY;
      let minScrolledWindowPercentage = 0.95;

      setIsScrolledMax(
        currentScrollY >=
          document.body.offsetHeight * minScrolledWindowPercentage
      );
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFooter = () => {
    let timeoutMultiplier = 1.3;
    let scrollTimeout = dropdownDurationMS * timeoutMultiplier;
    setShowingFooter(!showingFooter);

    if (isScrolledMax) {
      setTimeout(() => {
        !showingFooter &&
          lastPageItem?.current?.scrollIntoView({ behavior: "smooth" });
      }, scrollTimeout);
    }
  };

  return (
    <>
      <Head>
        <title>Curriculum | Ramon Irala</title>
        <meta
          name="description"
          content="Curriculum de Ramon Irala con estilo MeLi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Profile
        profile={profileExample}
        showingFooter={showingFooter}
        toggleFooter={toggleFooter}
        pushMessage={pushMessage}
      />

      {!isMsgVisible ? null : (
        <Message message={message} durationMs={msgVisibilityMs} />
      )}

      <Footer
        profileName={profileExample.name}
        profileContact={profileExample.contact}
        showingFooter={showingFooter}
        toggleFooter={toggleFooter}
      />

      <div ref={lastPageItem}></div>
    </>
  );
};

export default CvPage;

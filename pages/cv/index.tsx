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
  about: `I was a student in the Public Accountant program at Buenos Aires University until 2020. Now, I'm studying Software Development at UADE and plan to pursue Computer Engineering ❤️

  Since December 2022, I've been working as a full-stack developer using Angular+vanilla JavaScript, ASP.NET MVC, and SQL Server.
  
  I've learned web development through courses and online resources. I enjoy using Next.js (React) for the frontend and Node.js with Express for the backend. Other technologies I love include TypeScript, MongoDB, SASS, and more.
  
  I'm analytical, detail-oriented, and always striving for improvement!
  My portfolio is a work in progress; you can check my GitHub for my current projects (although some might be top secret 😉)
  
  Github: https://github.com/rei-rala
  Email: ramonirala@outlook.com`,
  images: [
  "https://media.licdn.com/dms/image/C4D03AQECDCVkG6IfxQ/profile-displayphoto-shrink_800_800/0/1668085573858?e=1710374400&v=beta&t=9xXjj6FPVYCLSyluSl85UOf4mzOGa0E84c4nC8S22lw"
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
        tooltip: "+3 years of experience", // 2020
      },
      {
        text: "CSS3",
        icon: "https://img.icons8.com/color/css3",
        tooltip: "+3 years of experience",// 2020
      },
      {
        text: "SASS",
        icon: "https://img.icons8.com/color/sass",
        tooltip: "+3 years of experience",// 2020
      },
      {
        icon: "https://img.icons8.com/color/javascript",
        text: "JavaScript",
        tooltip: "+3 years of experience",// 2020
      },
      {
        icon: "https://img.icons8.com/color/react-native",
        text: "React",
        tooltip: "+2 years of experience",
      },
      {
        text: "Next.js",
        icon: "https://img.icons8.com/color/nextjs",
        tooltip: "2 years of experience",
      },
      {
        text: "C#",
        icon: "https://img.icons8.com/color/cs",
        tooltip: "a year of experience",
      },
      {
        icon: "https://img.icons8.com/color/nodejs",
        text: "Node.js",
        tooltip: "2 years of experience",
      },
      {
        text: "Express",
        icon: "https://img.icons8.com/color/express",
        tooltip: "2 years of experience",
      },
      {
        text: "Firebase",
        icon: "https://img.icons8.com/color/firebase",
        tooltip: "Just basic",
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
        text: "SQL Server",
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
  ],
  languages: [
    {
      name: "Spanish",
      icon: "https://img.icons8.com/color/spain",
      level: "Native",
    },
    {
      name: "English",
      icon: "https://img.icons8.com/color/usa",
      level: "C2",
    },
  ],
};

console.info(
  "%cHola!",
  "color: #00ff00; background-color: black; font-size: 2em;"
);
console.log(
  "%cEn un futuro, la pagina serviría diferentes templates de CV a otros usuarios 😊",
  "font-size: 0.9em;"
);
console.log(
  "%cTe dejo el modelito hardcoded",
  "font-size: 0.9em;"
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

import type { NextPage } from "next";
import Head from "next/head";

import { Header, Footer, Message, Profile } from "components";
import { useEffect, useRef, useState } from "react";
import useMessage from "hooks/useMessage";

let profileExample = {
  username: "ramonirala",// this will be pointed from ownerId, Cv model won't have username property
  ownerId: '',
  name: "Ramon Irala",
  currently: "En busqueda laboral activa",
  headline: "Desarrollador fullstack trainee",
  about: `Fui estudiante de la carrera de Contador Publico en la Universidad de Buenos Aires hasta el año 2020.
  Actualmente estudio la Tecnicatura Universitaria en Desarrollo de Software en la UADE, tras la cual continuare con la Ingenieria en Informatica.
  
  Por mi parte aprendi desarrollo web gracias a diversos cursos e internet.
  En el presente me enfoco en capacitarme, practicar con la realizacion de proyectos y seguir aprendiendo los procesos y buenas prácticas en esta materia.
  Programo mayormente en JavaScript y un poco en Python. Utilizo React y Next.js como framework de Frontend web. 
  Para el backend manejo  Node.js, Express y algo de Django y Flask.
  Tambien utilizo tecnologias como TypeScript, SQL, MongoDB, jQuery, SASS, entre otros.
  
  Me gusta describirme como una persona analitica, detallista y entusiasta que gusta tanto de buscar puntos débiles y aspectos de mejora y desarrollar soluciones.
  Me interesa continuar profundizando front end y aprender desarrollo backend y blockchain
  
  Mi portfolio se encuentra en desarrollo, pero puede visitarse mi github para mas o menos saber en que estoy trabajando
  
  Github: https://github.com/rei-rala
  Correo de contacto: ramonirala@outlook.com`,
  images: [
    "https://media.licdn.com/dms/image/C4D03AQECDCVkG6IfxQ/profile-displayphoto-shrink_800_800/0/1668085573452?e=1684972800&v=beta&t=tngZWhkZuDfBWn-4Qh2_vO4EKR0Xmp1bcfW7opOL3-M"
  ],
  academic: [
    {
      where: "Universidad Argentina de la Empresa",
      from: new Date("2020-01-31"),
      to: new Date("2024-12-31"),
      title: "Tecnicatura Universitaria en Desarrollo de Software",
      condition: "En curso",
      description: '',
      isCurrent: true,
    },
  ],
  professional: [
    {
      where: "Garantizar SGR",
      from: new Date("2017-12-31"),
      to: new Date("2022-12-31"),
      title: 'Analista de Riesgo',
      seniority: 'Semi Senior',
      isCurrent: true,
    },
    {
      where: "KPMG",
      from: new Date("2015-12-31"),
      to: new Date("2017-08-31"),
      title: 'Auditor Contable',
      seniority: 'Junior',
    },
  ],
  contact: [
    {
      type: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ramon-irala-220362110/',
    },
    {
      type: 'GitHub',
      url: 'https://github.com/rei-rala'
    },
    {
      type: 'e-Mail',
      url: 'ramonirala@outlook.com'
    },
    {
      type: 'Portfolio',
      url: ''
    }
  ],
  customSection: {
    title: 'Tecnologias',
    hover: 'Conocimientos',
    lines: [
      {
        text: 'HTML5',
        icon: 'https://img.icons8.com/color/html-5',
        tooltip: 'Avanzado'
      },
      {
        text: 'CSS3',
        icon: 'https://img.icons8.com/color/css3',
        tooltip: 'Avanzado'
      },
      {
        text: 'SASS',
        icon: 'https://img.icons8.com/color/sass',
        tooltip: 'Intermedio'
      },
      {
        icon: 'https://img.icons8.com/color/javascript',
        text: 'JavaScript',
        tooltip: 'Avanzado'
      },
      {
        icon: 'https://img.icons8.com/color/react-native',
        text: 'React',
        tooltip: 'Avanzado'
      },
      {
        text: 'Next.js',
        icon: 'https://img.icons8.com/color/nextjs',
        tooltip: 'Intermedio'
      },
      {
        icon: 'https://img.icons8.com/color/nodejs',
        text: 'Node.js',
        tooltip: 'Intermedio'
      },
      {
        text: 'Express',
        icon: 'https://img.icons8.com/color/express',
        tooltip: 'Intermedio'
      },
      {
        text: 'Firebase',
        icon: 'https://img.icons8.com/color/firebase',
        tooltip: 'Intermedio'
      },

      {
        icon: 'https://img.icons8.com/color/python',
        text: 'Python',
        tooltip: 'Intermedio'
      },
      {
        icon: 'https://img.icons8.com/color/django',
        text: 'Django',
        tooltip: 'Fundamentos'
      },
      {
        icon: 'https://img.icons8.com/color/java',
        text: 'Java',
        tooltip: 'Fundamentos'
      },
      {
        icon: 'https://img.icons8.com/color/git',
        text: 'Git',
        tooltip: 'Intermedio'
      },
      {
        text: 'Github',
        icon: 'https://img.icons8.com/color/github',
        tooltip: 'Intermedio'
      },
      {
        text: 'MongoDB',
        icon: 'https://img.icons8.com/color/mongodb',
        tooltip: 'Fundamentos'
      },
      {
        text: 'SQL',
        icon: 'https://img.icons8.com/color/sql',
        tooltip: 'Fundamentos'
      },
      {
        text: 'Heroku',
        icon: 'https://img.icons8.com/color/heroku',
        tooltip: 'Basico'
      },
      {
        text: 'Excel',
        icon: 'https://img.icons8.com/color/microsoft-excel',
        tooltip: 'Intermedio'
      },
      {
        text: 'PowerPoint',
        icon: 'https://img.icons8.com/color/powerpoint',
        tooltip: 'Intermedio'
      },
      {
        text: 'Power BI',
        icon: 'https://img.icons8.com/color/power-bi',
        tooltip: 'Intermedio'
      }
    ]
  },
  highlights: [
    {
      type: 'good',
      text: 'Fanatico de la tecnologia',
    },
    {
      type: 'good',
      text: 'Inquieto, gusto de mantenerme aprendiendo',
    },
    {
      type: 'good',
      text: 'Detallista',
    },
    {
      type: 'good',
      text: 'Altamente dedicado',
    },
    {
      type: 'good',
      text: 'Siempre dispuesto a demostrar lo que soy capaz de lograr',
    },
    {
      type: 'good',
      text: 'Con actitud positiva',
    },
    {
      type: 'bad',
      text: 'A veces me tiro a menos',
    },
    {
      type: 'bad',
      text: 'No poseo experiencia laboral en el sector (por ahora 😎)',
    },
  ],
  languages: [
    {
      name: 'Español',
      icon: 'https://img.icons8.com/color/spain',
      level: 'Nativo',
    },
    {
      name: 'Ingles',
      icon: 'https://img.icons8.com/color/usa',
      level: 'Avanzado',
    },
  ],
}

console.info('%cHola curios@!', 'color: #00ff00; background-color: black; font-size: 2em;');
console.log('%cSi estas aqui, probablemente quieras conocer un poco mas de este desarrollo', 'color: #000; background-color: #fff; font-size: 1.1em;');
console.log('%cPara tu comodidad, te dejare el objeto del perfil de prueba', 'color: #000; background-color: #fff; font-size: 1.1em;');
console.log('%cEn un futuro, la pagina podra servir diferentes templates de CV a otros usuarios 😊', 'font-size: 0.8em;');
console.log(profileExample);


const CvPage: NextPage = () => {
  let dropdownDurationMS = 500;
  let msgVisibilityMs = 2500;
  const { message, isMsgVisible, pushMessage } = useMessage(msgVisibilityMs)
  const lastPageItem = useRef<HTMLDivElement>(null)

  const [showingFooter, setShowingFooter] = useState(false);
  const [isScrolledMax, setIsScrolledMax] = useState(false);


  useEffect(() => {
    const onScroll = () => {
      let currentScrollY = window.innerHeight + window.scrollY
      let minScrolledWindowPercentage = 0.95;

      setIsScrolledMax(currentScrollY >= document.body.offsetHeight * minScrolledWindowPercentage);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  const toggleFooter = () => {
    let timeoutMultiplier = 1.3
    let scrollTimeout = dropdownDurationMS * timeoutMultiplier
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
        <meta name="description" content="Curriculum de Ramon Irala con estilo MeLi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Profile profile={profileExample} showingFooter={showingFooter} toggleFooter={toggleFooter} pushMessage={pushMessage} />

      {
        !isMsgVisible
          ? null
          : <Message message={message} durationMs={msgVisibilityMs} />
      }

      <Footer profileName={profileExample.name} profileContact={profileExample.contact} showingFooter={showingFooter} toggleFooter={toggleFooter} />

      <div ref={lastPageItem}></div>
    </>
  );
};

export default CvPage;

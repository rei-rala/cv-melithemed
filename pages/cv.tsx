import type { NextPage } from "next";
import Head from "next/head";

import { Header, Footer, Profile } from "components";
import { useRef } from "react";

let profileExample = {
  id: "1",
  name: "Ramon Irala",
  currently: "En busqueda laboral activa",
  headline: "Desarrollador fullstack trainee",
  about: `Fui estudiante de la carrera de Contador Publico en la Universidad de Buenos Aires hasta el año 2020.
  Actualmente estudio la Tecnicatura Universitaria en Desarrollo de Software en la UADE, tras la cual continuare con la Ingenieria en Informatica.
  
  Por mi parte aprendi desarrollo web gracias a diversos cursos e internet.
  En el presente me enfoco en capacitarme, practicar con la realizacion de proyectos y seguir aprendiendo los procesos y buenas prácticas en esta materia.
  Programo mayormente en JavaScript y un poco en Python. Utilizo React y Next.js como framework de Frontend web. 
  Para el backend manejo  Node.js, Express y Flask.
  Tambien utilizo tecnologias como TypeScript, SQL, MongoDB, jQuery, SASS, entre otros.
  
  Me gusta describirme como una persona analitica, detallista y entusiasta que gusta tanto de buscar puntos débiles y aspectos de mejora y desarrollar soluciones.
  Me interesa continuar profundizando front end y aprender desarrollo backend y blockchain
  
  Mi portfolio se encuentra en desarrollo, pero puede visitarse mi github para mas o menos saber en que estoy trabajando
  
  Github: https://github.com/rei-rala
  Correo de contacto: ramonirala@outlook.com`,
  images: [
    // I guess I'll be a vacuum cleaner by now...
    {
      src: "https://http2.mlstatic.com/D_NQ_NP_2X_999724-MLA48636149279_122021-F.webp",
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_NP_2X_791397-MLA48636149280_122021-F.webp",
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_NP_2X_634551-MLA48636149278_122021-F.webp",
    },
    {
      src: "https://http2.mlstatic.com/D_NQ_NP_2X_950051-MLA48636149277_122021-F.webp",
    },
  ],
  history: {
    academic: [
      {
        where: "Universidad Argentina de la Empresa",
        from: "2021",
        to: "2024",
        title: "Tecnicatura Universitaria en Desarrollo de Software",
        condition: "En curso",
        description: '',
      },
    ],
    work: [
      {
        where: "Garantizar SGR",
        from: "agosto 2017",
        to: "Presente",
        title: 'Analista de Riesgo',
        seniority: 'Semi Senior',
      },
      {
        where: "KPMG",
        from: "diciembre 2015",
        to: "agosto 2017",
        title: 'Auditor Contable',
        seniority: 'Junior',
      },
    ]
  },
  customSection: {
    title: 'Tecnologias',
    hover: 'Habilidad',
    lines: [
      {
        icon: 'https://img.icons8.com/color/react-native',
        text: 'React',
        tooltip: 'Avanzado 🔥'
      },
      {
        icon: 'https://img.icons8.com/color/nodejs',
        text: 'Node.js',
        tooltip: 'Intermedio 😊'
      },
      {
        icon: 'https://img.icons8.com/color/javascript',
        text: 'JavaScript',
        tooltip: 'Avanzado 🔥'
      },
      {
        icon: 'https://img.icons8.com/color/python',
        text: 'Python',
        tooltip: 'Pre intermedio 😊'
      },
      {
        icon: 'https://img.icons8.com/color/django',
        text: 'Django',
        tooltip: 'Fundamentos 🤔'
      },
      {
        icon: 'https://img.icons8.com/color/java',
        text: 'Java',
        tooltip: 'Fundamentos 🤔'
      },
      {
        text: 'MongoDB',
        icon: 'https://img.icons8.com/color/mongodb',
        tooltip: 'Fundamentos 🤔'
      },
      {
        text: 'SQL',
        icon: 'https://img.icons8.com/color/sql',
        tooltip: 'Fundamentos 🤔'
      },
      {
        text: 'SASS',
        icon: 'https://img.icons8.com/color/sass',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'CSS3',
        icon: 'https://img.icons8.com/color/css3',
        tooltip: 'Avanzado 🔥'
      },
      {
        text: 'HTML5',
        icon: 'https://img.icons8.com/color/html-5',
        tooltip: 'Avanzado 🔥'
      },
      {
        icon: 'https://img.icons8.com/color/git',
        text: 'Git',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'Github',
        icon: 'https://img.icons8.com/color/github',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'Heroku',
        icon: 'https://img.icons8.com/color/heroku',
        tooltip: 'Basico 🤔'
      },
      {
        text: 'Firebase',
        icon: 'https://img.icons8.com/color/firebase',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'Next.js',
        icon: 'https://img.icons8.com/color/nextjs',
        tooltip: 'Pre intermedio? 🤔'
      },
      {
        text: 'Express',
        icon: 'https://img.icons8.com/color/express',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'Excel',
        icon: 'https://img.icons8.com/color/microsoft-excel',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'PowerPoint',
        icon: 'https://img.icons8.com/color/powerpoint',
        tooltip: 'Intermedio 🤓'
      },
      {
        text: 'Power BI',
        icon: 'https://img.icons8.com/color/power-bi',
        tooltip: 'Intermedio 🤓'
      }
    ]
  },
  highlights: [
    {
      type: 'good',
      text: 'Me gusta mantenerme aprendiendo',
    },
    {
      type: 'good',
      text: 'Soy detallista',
    },
    {
      type: 'bad',
      text: 'A veces me cuesta conformarme',
    },
    {
      type: 'bad',
      text: 'Soy timido',
    }
  ]
}

const CvPage: NextPage = () => {
  const lastPageItem = useRef<HTMLDivElement>(null)
  return (
    <>
      <Head>
        <title>MercadoCV | Ramon Irala</title>
        <meta name="description" content="MercadocCV de Ramon Irala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Profile profile={profileExample} />

      <Footer name={profileExample.name} lastPageItem={lastPageItem} />

      <div ref={lastPageItem}></div>
    </>
  );
};

export default CvPage;

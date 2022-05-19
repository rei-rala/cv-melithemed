import Image from "next/image";
import React, { useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

interface IImageHandler {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

interface ICustomSection {
  name: string;
  title: string;
  hover: string;
  lines: {
    icon: string;
    text: string;
    tooltip: string;
  }[];
}

let errorImgUrl = "https://img.icons8.com/info";

const ImageHandler: React.FC<IImageHandler> = ({ src, alt, width, height }) => {
  const [newSrc, setNewSrc] = useState(src);

  const onErrorHandler = () => {
    setNewSrc(errorImgUrl);
  }

  return <Image
    src={newSrc}
    alt={alt}
    width={width ?? '30px'}
    height={height ?? '30px'}
    objectFit='contain'
    onError={onErrorHandler}
  />
}


const ProfileCustom: React.FC<{ customSection: ICustomSection }> = ({ customSection: { name, title, hover, lines } }) => {

  return (
    <section>
      <i title={`Esta seccion fue añadida por ${name}`}>Seccion personalizada</i>
      <h2>{title}</h2>
      <p>Pasa el cursor sobre algun icono para conocer el detalle</p>

      <ul>
        {lines.map((line, index) => (
          <li key={`customSectionLine-${index}`} title={`${hover}: ${line.tooltip}`}>
            <ImageHandler
              src={line.icon}
              alt={line.text}
              width='30px' height='30px'
            />
            <span>{line.text}</span>
          </li>
        ))}
      </ul>

      <style jsx>{`
        section {
          background: ${COLORS.warningAlt};
        }

        section > :not(i) {
          margin: 0 0 ${MEASURES.short} 0;
        }

        i {
          font-size: ${MEASURES.short};
        }

        ul {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          gap: ${MEASURES.near};
        }
        
        li {
          list-style: none;
          
          display: flex;
          flex-flow: column wrap;
          align-items: center;
          justify-content: space-around;

          background: ${COLORS.white};
          border: ${MEASURES.borders} groove ${COLORS.blue};
          border-radius: ${MEASURES.radius};
          padding: ${MEASURES.shorter};

          break-word: break-word;

          min-width: ${MEASURES.longest};
          cursor: help;
        }

        li {
          display: flex;

        }

        `}</style>
    </section >
  )
}

export default ProfileCustom;
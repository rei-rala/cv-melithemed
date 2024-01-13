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
      <i title={`Customized by ${name}`}>Custom Section</i>
      <h2>{title}</h2>
      <sup>{hover}</sup>

      <ul>
        {lines.map(({icon, text, tooltip}, index) => (
          <li key={`custom-${tooltip}-${index}`} title={`${hover} ${text}: ${tooltip}`}>
            <ImageHandler
              src={icon}
              alt={text}
              width='30px'
              height='30px'
            />
            <span><b>{text}</b></span>
            <span>{tooltip}</span>
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

        @media (only screen and (hover: none) and (pointer: coarse)) or (max-width: 500px) {
          p {
            display: none;
          }
          li {
            flex-direction: row;
            gap: ${MEASURES.shorter};
            background: none;
            border: none;
          }
        }

        `}</style>
    </section >
  )
}

export default ProfileCustom;
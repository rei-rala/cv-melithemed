import React, { useState } from "react";

import { Button, ImgSlider } from "components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faCopy,
  faHeartCirclePlus,
  faHeartCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import copy from "copy-to-clipboard";

import { COLORS, MEASURES } from "styles/theme";

interface ProfileMainProps {
  name: string;
  currently: string;
  headline: string;
  images: string[];
  pushMessage: (message: string) => void;
  toggleFooter: () => void;
}

const ProfileMain: React.FC<ProfileMainProps> = ({ name, currently, headline, images, toggleFooter, pushMessage }) => {
  const [isInFavourites, setIsInFavourites] = useState(false)
  const toggleIsInFavourites = () => setIsInFavourites(!isInFavourites)

  const copyUrlToClipboard = () => {
    const host = window.location.host;
    const path = window.location.pathname;
    const copyText = host + path;

    try {
      copy(copyText, {format: "text/plain"})
      pushMessage('Link copiado a portapapeles!')
    } catch (err: any) {
      pushMessage('Error al copiar a portapapeles')
    }
  };

  return (
    <main>

      <div>
        <p>{currently}</p>
        <h1>{name} <i>{headline}</i></h1>
        <p>
          Postulante con
          <span>
            identidad verificada
            <FontAwesomeIcon icon={faUserCheck} width="16px" />
          </span>
        </p>
      </div>

      <div>
        <ImgSlider
          images={images}
          altText={`Imagenes de ${name}`}
        />
      </div>

      <div>
        <h2>Disponible</h2>
        <div>
          <Button variant="info" addStyles={{ padding: '0.75rem' }} onClick={toggleFooter}>Contactar</Button>
        </div>

        <div>
          <span onClick={toggleIsInFavourites}>
            <FontAwesomeIcon
              icon={isInFavourites ? faHeartCircleMinus : faHeartCirclePlus}
              width="16px"
            />
            {isInFavourites ? "Quitar de" : "Agregar a"} favoritos
          </span>


          <span onClick={copyUrlToClipboard}>
            <FontAwesomeIcon icon={faCopy} width="16px" />
            Compartir
          </span>
        </div>
      </div>


      <style jsx>{`
        main {
          display: flex;
          justify-content: space-evenly;
          flex-flow: column nowrap;

          background: ${COLORS.white};
          gap: ${MEASURES.near};
        }

        main > div {
          flex-direction: column;
          align-items: space-evenly;
          justify-content: center;
          gap: ${MEASURES.near};
        }

        main > div:nth-child(2) {
          display: grid;
          place-items: center;
          border-radius: ${MEASURES.near};
          overflow: hidden;
        }

        main > div:nth-child(3) > div{
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }

        p:first-of-type {
          font-size: ${MEASURES.near};
          color: ${COLORS.lightGray};
        }

        p {
          display: flex;
          align-items: center;
          gap: ${MEASURES.shorter};
        }

        p span {
          display: flex;
          align-items: center;
          gap: ${MEASURES.shorter};
          color: ${COLORS.blue};
        }

        main h2 {
          color: ${COLORS.success};
          font-weight: bold;
          text-align: center;
        }

        div:nth-child(6) {
          display: grid;
          place-items: center;
        }
        
        div:last-of-type {
          display: flex;
          justify-content: space-evenly;
          color: ${COLORS.blue};
        }

        div:last-of-type span {
          display: flex;
          align-items: center;
          gap: ${MEASURES.shorter};
          cursor: pointer;
        }

        @media (min-width: 768px) {
          main {
            display: grid; 
            grid-template-columns: 47.5% 5% 47.5%; 
            grid-template-rows: 47.5% 5% 47.5%; 
            gap: 0px 0px; 
            grid-template-areas: 
              "profilePicture . profileTop"
              "profilePicture . profileTop"
              "profilePicture . profileBottom"; 
            width: 100%; 
            height: 100%; 
          }

          main > div :is(p, h1, h2) {
            justify-content: center;
            text-align: center;
          }

          main > :nth-child(1),
          main > :nth-child(3) { 
            padding: ${MEASURES.near};
          }


          main > :nth-child(1) { 
            grid-area: profileTop;
            padding-top: ${MEASURES.medium};
            border: ${MEASURES.borders} solid ${COLORS.lightGray};
            border-bottom: none;
            border-radius: ${MEASURES.near} ${MEASURES.near} 0 0;
          }
          main > :nth-child(2) { grid-area: profilePicture; }
          main > :nth-child(3) { 
            grid-area: profileBottom;
            padding-bottom: ${MEASURES.medium};
            border: ${MEASURES.borders} solid ${COLORS.lightGray};
            border-top: none;
            border-radius: 0 0 ${MEASURES.near} ${MEASURES.near};
          }
        }
      `}</style>
    </main>
  );
};

export default ProfileMain;
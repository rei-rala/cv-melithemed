import React, { useState } from "react";

import { Button, ImgSlider } from "components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCheck,
  faCopy,
  faHeartCirclePlus,
  faHeartCircleMinus,
} from "@fortawesome/free-solid-svg-icons";

import { COLORS, MEASURES } from "styles/theme";

const ProductMain: React.FC = () => {

  const [isInFavourites, setIsInFavourites] = useState(false)
  const toggleIsInFavourites = () => setIsInFavourites(!isInFavourites)

  return (
    <main>
      <p>En busqueda laboral activa</p>
      <h2>Ramon Irala - Desarrollador fullstack trainee</h2>
      <p>
        Postulante con
        <span>
          identidad verificada
          <FontAwesomeIcon icon={faUserCheck} width="16px" />
        </span>
      </p>

      <div>
        <ImgSlider
          images={[
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
          ]}
          altText="img"
        />
      </div>

      <h3>Disponible</h3>

      <div>
        <Button variant="info" addStyles={{ padding: '0.75rem' }}>Contactar</Button>
      </div>

      <div>
        <span onClick={toggleIsInFavourites}>
          <FontAwesomeIcon
            icon={isInFavourites ? faHeartCircleMinus : faHeartCirclePlus}
            width="16px"
          />
          {isInFavourites ? "Quitar de" : "Agregar a"} favoritos
        </span>

        <span>
          <FontAwesomeIcon icon={faCopy} width="16px" />
          Compartir
        </span>
      </div>

      <style jsx>{`
        main {
          display: flex;
          justify-content: space-evenly;
          flex-flow: column nowrap;

          margin: ${MEASURES.long} 0;
          padding: ${MEASURES.short};

          background: ${COLORS.white};
          gap: ${MEASURES.near};
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

        h3 {
          font-size: ${MEASURES.long};
          color: ${COLORS.success};
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
      `}</style>
    </main>
  );
};

export default ProductMain;
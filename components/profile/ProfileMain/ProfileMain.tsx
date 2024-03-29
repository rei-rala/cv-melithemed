import React, { useEffect, useState } from "react";

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
  showingFooter: boolean;
  toggleFooter: () => void;
  pushMessage: (message: string) => void;
}

let overwriteFooterCss = `
  @keyframes blinkColor {
    100% {
      color: ${COLORS.danger};
    }
  }
    footer div:first-child {
      animation: blinkColor 0.25s infinite ease;
    }
  `


const ProfileMain: React.FC<ProfileMainProps> = ({ name, currently, headline, images, showingFooter, toggleFooter, pushMessage }) => {
  const [isInFavourites, setIsInFavourites] = useState(false)
  const toggleIsInFavourites = () => setIsInFavourites(!isInFavourites)
  const [toggledFromMain, setToggledFromMain] = useState(false)

  const copyUrlToClipboard = () => {
    const host = window.location.host;
    const path = window.location.pathname;
    const copyText = host + path;

    try {
      copy(copyText, { format: "text/plain" })
      pushMessage('Copied!')
    } catch (err: any) {
      pushMessage('Error!')
      console.log(err)
    }
  };

  const toggleFooterFromMain = () => {
    toggleFooter()
    if (!showingFooter) {
      setToggledFromMain(true)
    }
  }

  useEffect(() => {
    let blinkTimeout = setTimeout(() => {
      setToggledFromMain(false)
    }, 1000)
    return () => clearTimeout(blinkTimeout)
  }, [toggledFromMain])

  return (
    <main>

      <div>
        <p>{currently}</p>
        <h1>{name} <i>{headline}</i></h1>
        <p>
  Applicant with
  <span>
    verified identity
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
        <h2>Open for job offers</h2>
        <div>
          <Button variant="info" addStyles={{ padding: '0.75rem' }} onClick={toggleFooterFromMain}>Get in touch</Button>
        </div>

        <div>
          <span onClick={toggleIsInFavourites}>
            <FontAwesomeIcon
              icon={isInFavourites ? faHeartCircleMinus : faHeartCirclePlus}
              width="16px"
            />
            {isInFavourites ? "Remove from " : "Add to " } Favorites
          </span>


          <span onClick={copyUrlToClipboard}>
            <FontAwesomeIcon icon={faCopy} width="16px" />
            Copy to Clipboard
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

        main > div:nth-child(3) span {
          transition: transform 100ms;
        }

        main > div:nth-child(3) span:active {
          transform: scale(0.95);
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

        ${toggledFromMain ? overwriteFooterCss : ''}
      `}</style>
    </main>
  );
};

export default ProfileMain;
import React, { RefObject, useEffect, useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

let onShowSection = `  
  aside {
    margin-bottom: calc(${MEASURES.longest} * 3.25);
  }

  @media (min-width: 500px) {
    margin-bottom: calc(${MEASURES.longest} * 3);
  }

`;

let onHideSection = `
  aside {
    margin-bottom: ${MEASURES.longest};
  }
  `;

interface IFooter {
  profileName?: string;
  showingFooter: boolean;
  toggleFooter: () => void;
}

let dropdownDurationMS = 500;

const Footer: React.FC<IFooter> = ({ profileName, showingFooter, toggleFooter, }) => {

  const [mailLinkPath, setMailLinkPath] = useState('tu%20pagina!')

  useEffect(()=>{
    const host = window.location.host;
    const path = window.location.pathname;

    setMailLinkPath(host+path)
  }, [])


  return !profileName ? null : (
    <footer>
      <div onClick={toggleFooter}>
        Redes de {profileName} <span><FontAwesomeIcon icon={faAngleUp} width="16px" /></span>
      </div>
      <div>
        <ul>
          <li>
            <FontAwesomeIcon icon={faLinkedin} color="blue" width="16px" />{" "}
            <b>LinkedIn</b>{" "}
            <a
              target="__blank"
              href="https://www.linkedin.com/in/ramon-irala-220362110/"
            >
              linkedin.com/in/ramon-irala-220362110
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faGithub} color="purple" width="16px" />{" "}
            <b>GitHub</b>{" "}
            <a target="__blank" href="https://github.com/rei-rala">
              github.com/rei-rala
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faEnvelope} color="orange" width="16px" />{" "}
            <b>Email</b>{" "}
            <a
              target="__blank"
              href={`mailto:ramonirala@outlook.com?subject=Encontré%20tu%20CV%20en%20${mailLinkPath}%20!`}
            >
              ramonirala@outlook.com
            </a>
          </li>
          <li>
            <FontAwesomeIcon icon={faHeart} color="red" width="16px" />{" "}
            <b>Portfolio</b>{" "}
            <a aria-disabled href="#">
              Work in progress
            </a>{" "}
          </li>
        </ul>
      </div>

      <style jsx>{`
        footer {
          position: relative;
          z-index: 9;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;

          width: 100%;
          background: ${COLORS.white};
          padding: ${MEASURES.padding} calc(${MEASURES.padding} * 2);
          overflow: hidden;
        }

        footer > :first-child {
          justify-content: space-around;
          flex-wrap: nowrap;

          gap: ${MEASURES.shorter};
          width: fit-content;

          position: relative;
          margin: auto;
          border: ${MEASURES.borders} solid ${COLORS.lightGray};
          border-bottom: none;
          border-radius: ${MEASURES.radius} ${MEASURES.radius} 0 0;
          bottom: calc(${MEASURES.borders} * -1.25);
          z-index: 2;
          cursor: pointer;
        }

        footer > :nth-child(2) {
          height: ${showingFooter ? `calc(${MEASURES.longest} * 2)` : "0"};

          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          transition: height ${dropdownDurationMS}ms ease-in-out,
            padding ${dropdownDurationMS}ms ease-in-out;
          ${showingFooter ? `` : "padding:0;"}
        }

        ul {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-around;
          width: 100%;
        }

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: ${MEASURES.short};
          transition: opacity ${dropdownDurationMS * 1.5}ms ease;
          opacity: ${showingFooter ? "1" : "0"};
          word-break: break-word;
        }

        li:last-child a {
          color: ${COLORS.danger};
          cursor: help;
        }

        li:not(:last-child) a {
          text-decoration: underline;
        }

        b {
          display: none;
        }

        span {
          display: grid;
          place-items: center;

          transition: transform ${dropdownDurationMS}ms ease-in-out;
          transform: ${showingFooter ? "rotate(-180deg)" : "rotate(0deg)"};
        }

        @media (min-height: 300px) {
          footer {
            position: fixed;
            bottom: 0;
          }

          ${showingFooter ? onShowSection : onHideSection}
        }

        @media (min-width: 500px) {
          b {
            display: inline !important;
          }
        }

        @media (min-width: 768px) {
          footer > nth-child(2) {
            height: ${showingFooter ? `calc(${MEASURES.longest} * 2)` : "0"};
          }

          b {
            display: block;
          }

          ul {
            flex-direction: row;
            justify-content: space-evenly;
            gap: ${MEASURES.shortest};
          }

          li {
            flex-direction: column;
            gap: ${MEASURES.shorter};
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

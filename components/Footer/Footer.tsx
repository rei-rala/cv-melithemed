import React, { useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faEnvelope, faHeart, faHammer } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Footer: React.FC = () => {
  const [showingFooter, setShowingFooter] = useState(false);
  const toggleFooter = () => setShowingFooter(!showingFooter);

  return (
    <footer>
      <div onClick={toggleFooter}>Resumen de datos<span><FontAwesomeIcon icon={showingFooter ? faAngleDown : faAngleUp} /></span></div>
      <div>
        <ul>
          <li><FontAwesomeIcon icon={faLinkedin} color='blue' width='1rem' /> <b>LinkedIn</b> <a href="https://www.linkedin.com/in/ramon-irala-220362110/">linkedin.com/in/ramon-irala-220362110</a></li>
          <li><FontAwesomeIcon icon={faGithub} color='purple' width='1rem' />   <b>GitHub</b> <a href="https://github.com/rei-rala">github.com/rei-rala</a></li>
          <li><FontAwesomeIcon icon={faEnvelope} color='orange' width='1rem' /> <b>Email</b> <a href="mailto:ramonirala@outlook.com?subject=Encontré%20tu%20CV%20en%20localhost:3000%20!">ramonirala@outlook.com</a></li>
          <li><FontAwesomeIcon icon={faHeart} color='red' width='1rem' />    <b>Portfolio</b> <a href="#" aria-disabled>Work in progress</a> </li>
        </ul>
      </div>


      <style jsx>{`

        @keyframes simpleRainbowBkg {
          0% {
            background-color: ${COLORS.warningAlt};
          }
          25% {
            background-color: ${COLORS.dangerAlt};
          }
          50% {
            background-color: ${COLORS.successAlt};
          }
          75% {
            background-color: ${COLORS.blueAlt};
          }
          100% {
            background-color: ${COLORS.warningAlt};
          }
        }

        footer {
          margin-top: ${MEASURES.medium};
        }

        span {
          height: ${MEASURES.short};
          width: ${MEASURES.short};
        }

        div {
          background: ${COLORS.white};          
        }
        
        footer > :first-child {
          display: flex;
          justify-content: space-around;
          flex-wrap: nowrap;
          
          gap: ${MEASURES.shorter};
          width: fit-content;
          
          position: relative;
          margin: auto;
          border: ${MEASURES.borders} solid ${COLORS.lightGray};
          border-bottom: none;
          border-radius: ${MEASURES.radius} ${MEASURES.radius} 0 0;
          padding: ${MEASURES.padding} calc(${MEASURES.padding} *2);
          bottom: calc(${MEASURES.borders} * -1);
          z-index: 1;
          cursor: pointer;

          animation: ${showingFooter ? '' : 'simpleRainbowBkg 5s linear infinite'};
        }
        
        footer > :last-child {
          display: grid;
          place-items: center;

          padding: 0 calc(${MEASURES.padding} *2);
          height: ${showingFooter ? `calc(${MEASURES.longest} * 3)` : "0"};
          width: 100%;
          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          overflow: hidden;
          transition: height 0.3s ease-in-out;
        }

        ul {
          list-style: none;
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
          gap: ${MEASURES.short};
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

        @media screen and (min-width: 500px) {
          b {
            display: inline;
          }
        }

        @media screen and (min-width: 768px) {
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
  )
}

export default Footer;
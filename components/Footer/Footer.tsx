import React, { useRef, useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faEnvelope, faHeart, faHammer } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

let dropdownDurationMS = 500;

const Footer: React.FC = () => {
  const lastFooterItem = useRef<HTMLDivElement>(null)
  const [showingFooter, setShowingFooter] = useState(false);

  const toggleFooter = () => {
    setShowingFooter(!showingFooter);

    setTimeout(() => {
      !showingFooter && (
        lastFooterItem?.current?.scrollIntoView({ behavior: "smooth" }) &&
        console.log('scrolling')
      )
    }, dropdownDurationMS);
  }

  return (
    <footer>
      <div onClick={toggleFooter}>Resumen de datos <span><FontAwesomeIcon icon={faAngleUp} width='16px' /></span></div>
      <div>
        <ul>
          <li><FontAwesomeIcon icon={faLinkedin} color='blue' width='16px' /> <b>LinkedIn</b> <a href="https://www.linkedin.com/in/ramon-irala-220362110/">linkedin.com/in/ramon-irala-220362110</a></li>
          <li><FontAwesomeIcon icon={faGithub} color='purple' width='16px' />   <b>GitHub</b> <a href="https://github.com/rei-rala">github.com/rei-rala</a></li>
          <li><FontAwesomeIcon icon={faEnvelope} color='orange' width='16px' /> <b>Email</b> <a href="mailto:ramonirala@outlook.com?subject=Encontré%20tu%20CV%20en%20localhost:3000%20!">ramonirala@outlook.com</a></li>
          <li><FontAwesomeIcon icon={faHeart} color='red' width='16px' />    <b>Portfolio</b> <a href="#" aria-disabled>Work in progress</a> </li>
        </ul>
      </div>
      <div ref={lastFooterItem} >
        <p>Made by <FontAwesomeIcon icon={faHammer} width='10px' /><a href="https://www.linkedin.com/in/ramon-irala-220362110/">Ramon Irala</a>  </p>
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
        
        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;
          
          width: 100%;
          background: ${COLORS.white};      
          padding: ${MEASURES.padding} calc(${MEASURES.padding} *2);
          overflow: hidden;

          ${showingFooter ? '' : `animation: simpleRainbowBkg 5s linear infinite;`}
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
          bottom: calc(${MEASURES.borders} * -1.1);
          z-index: 1;
          cursor: pointer;
        }

        
        footer > :nth-child(2) {
          height: ${showingFooter ? `calc(${MEASURES.longest} * 3)` : "0"};

          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          transition: height ${dropdownDurationMS}ms ease-in-out, padding ${dropdownDurationMS}ms ease-in-out;
          ${showingFooter ? `` : "padding:0;"}
        }

        footer > div:last-child {
          font-size: ${MEASURES.short};
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
          transform: ${showingFooter ? 'rotate(-180deg)' : 'rotate(0deg)'};
        }

        @media (min-width: 500px) {
          b {
            display: inline;
          }
        }

        @media (min-width: 768px) {
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
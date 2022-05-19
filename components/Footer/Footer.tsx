import React, { RefObject, useEffect, useRef, useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faEnvelope, faHeart, faHammer } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

let dropdownDurationMS = 500;


let onShowSection = `
  section:last-of-type {
    margin-bottom: calc(${MEASURES.longest} * 5.5);
  }
`

let onHideSection = `
  section:last-of-type {
    margin-bottom: calc(${MEASURES.longest} * 1.5);
  }
  `

const Footer: React.FC<{ lastPageItem: RefObject<HTMLDivElement>, name?: string }> = ({ lastPageItem, name }) => {
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
    setShowingFooter(!showingFooter);

    if (isScrolledMax) {
      setTimeout(() => {
        !showingFooter && lastPageItem?.current?.scrollIntoView({ behavior: "smooth" })
      }, dropdownDurationMS);
    }
  }

  return (
    <footer>
      {
        !name
          ? null
          : <>
            <div onClick={toggleFooter}>Redes de {name} <span><FontAwesomeIcon icon={faAngleUp} width='16px' /></span></div>
            <div>
              <ul>
                <li><FontAwesomeIcon icon={faLinkedin} color='blue' width='16px' /> <b>LinkedIn</b> <a target='__blank' href="https://www.linkedin.com/in/ramon-irala-220362110/">linkedin.com/in/ramon-irala-220362110</a></li>
                <li><FontAwesomeIcon icon={faGithub} color='purple' width='16px' />   <b>GitHub</b> <a target='__blank' href="https://github.com/rei-rala">github.com/rei-rala</a></li>
                <li><FontAwesomeIcon icon={faEnvelope} color='orange' width='16px' /> <b>Email</b> <a target='__blank' href="mailto:ramonirala@outlook.com?subject=Encontré%20tu%20CV%20en%20localhost:3000%20!">ramonirala@outlook.com</a></li>
                <li><FontAwesomeIcon icon={faHeart} color='red' width='16px' />    <b>Portfolio</b> <a aria-disabled>Work in progress</a> </li>
              </ul>
            </div>
          </>
      }

      <div ref={lastPageItem} >
        <p>Made by <FontAwesomeIcon icon={faHammer} width='10px' /><a href="https://www.linkedin.com/in/ramon-irala-220362110/" target='__blank' >Ramon Irala</a>  </p>
      </div>


      <style jsx>{`

        @keyframes simpleRainbowColor {
          0% {
            color: ${COLORS.warning};
          }
          25% {
            color: ${COLORS.danger};
          }
          50% {
            color: ${COLORS.success};
          }
          75% {
            color: ${COLORS.blue};
          }
          100% {
            color: ${COLORS.warning};
          }
        }

        footer {
          margin-top: ${MEASURES.medium};
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
          padding: ${MEASURES.padding} calc(${MEASURES.padding} *2);
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
          height: ${showingFooter ? `calc(${MEASURES.longest} * 3)` : "0"};

          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          transition: height ${dropdownDurationMS}ms ease-in-out, padding ${dropdownDurationMS}ms ease-in-out;
          ${showingFooter ? `` : "padding:0;"}
        }

        footer > div:last-child {
          padding: ${MEASURES.borders};
          animation: simpleRainbowColor 5s linear infinite;
        }

        footer > div:last-child p {
          font-size: ${MEASURES.short};
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
          transform: ${showingFooter ? 'rotate(-180deg)' : 'rotate(0deg)'};
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
            display: block;
          }
        }

        @media (min-width: 768px) {
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
  )
}

export default Footer;
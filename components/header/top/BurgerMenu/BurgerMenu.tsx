import React, { useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

const BurgerMenu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>

      <style jsx>{`
        div {
          min-width: ${MEASURES.longer};
          min-height: ${MEASURES.longer};

          aspect-ratio: 1;
          cursor: pointer;
          position: relative
        }
        div span {
          position: absolute;
          left: 50%;

          height: ${isMenuOpen ? `${MEASURES.shortest}` : `calc(${MEASURES.borders}*1.25)`};
          width: 80%;
          border-radius: ${isMenuOpen ? `${MEASURES.shortest}` : `0`};
          background: ${COLORS.light};

          transform: translate(-50%, -50%);
          transition-timing-function: ease-in-out;
          transition: 
            transform 0.3s ${isMenuOpen ? '0.3s' : ''},
            top 0.3s ${isMenuOpen ? '' : '0.3s'},
            width 0.15s ${isMenuOpen ? '' : '0.45s'},
            height 0.3s 0.3s,
            border-radius 0.3s 0.3s;
        }

        div span:nth-child(1) {
          top: ${isMenuOpen ? `50%` : `25%`};
          ${isMenuOpen ? `transform: translate(-50%, -50%) rotate(45deg);` : ""}
        }
        div span:nth-child(2) {
          ${isMenuOpen ? 'width: 0;' :''}
          top: 50%;
        }
        div span:nth-child(3) {
          top: ${isMenuOpen ? `50%` : '75%'};
          ${isMenuOpen ? `transform: translate(-50%, -50%) rotate(-45deg);` : ""}
        }

        @media (min-width: 768px) {
          div {
            display: none;
          }
        }

        `}</style>
    </div>
  )
}

export default BurgerMenu
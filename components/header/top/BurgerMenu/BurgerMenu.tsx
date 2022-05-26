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

          height: ${isMenuOpen ? `calc(${MEASURES.shortest}*1.5)` : `calc(${MEASURES.shortest}/1.5)`};
          width: 75%;
          border-radius: ${isMenuOpen ? `${MEASURES.shortest}` : `0`};
          background: ${COLORS.light};

          transition-timing-function: ease-in-out;
          transition: 
            transform 0.3s ${isMenuOpen ? '0.3s' : ''},
            top 0.3s ${isMenuOpen ? '' : '0.3s'},
            width 0.15s ${isMenuOpen ? '' : '0.45s'},
            height 0.3s 0.3s,
            border-radius 0.3s 0.3s;
        }

        div span:nth-child(1) {
          top: calc( ${isMenuOpen ? `50%` : `100% / 4`} );
          left: 50%;
          transform: translate(-50%, -50%) ${isMenuOpen ? `rotate(45deg)` : ""};
        }
        div span:nth-child(2) {
          ${isMenuOpen ? 'width: 0;' :''}
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        div span:nth-child(3) {
          transform: rotate(-45deg) ${isMenuOpen ? "rotate(0deg) translate(-50%, -50%);" : ''};
          top: calc( ${isMenuOpen ? `50%` : `100% / 4 * 3`} );
          left: 50%;
          transform: translate(-50%, -50%) ${isMenuOpen ? `rotate(-45deg)` : ""};
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
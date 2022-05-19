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
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          align-items: center;
          
          min-width: ${MEASURES.longer};
          min-height: ${MEASURES.longer};

          padding: calc(${MEASURES.padding}*1.5);
          
          aspect-ratio: 1;
          cursor: pointer;
        }
        div span {
          width: 100%;
          height: calc(${MEASURES.borders} *2);
          background: ${COLORS.light};

          transition: all .3s ease-in-out;
          position: relative
        }

        div span:nth-child(1) {
          transform: ${isMenuOpen ? `rotate(45deg) ` : "rotate(0deg)"};
          top: ${isMenuOpen ? `calc((${MEASURES.longer} + ${MEASURES.padding}) /6.25)` : "0"};
        }
        div span:nth-child(2) {
          opacity: ${isMenuOpen ? "0" : "1"};
        }
        div span:nth-child(3) {
          transform: ${isMenuOpen ? `rotate(-45deg)` : "rotate(0deg)"};
          bottom: ${isMenuOpen ? `calc( (${MEASURES.longer} + ${MEASURES.padding}) /6.25)` : "0"};
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
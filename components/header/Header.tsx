import React from "react";
import { COLORS, MEASURES } from "styles/theme";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

const Header: React.FC = () => {
  return <header>

    <Top />
    <Bottom />

    <style jsx>{`
      header {
        background: ${COLORS.warning};
        z-index: 10;
      }

      
      @media (min-width: 768px) {
          header {
            border-bottom: ${MEASURES.borders} inset ${COLORS.lightGray};
          }
        }
    `}</style>

  </header>
}

export default Header
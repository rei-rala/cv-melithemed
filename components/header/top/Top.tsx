import React from "react";

import BrandLogo from "./BrandLogo/BrandLogo";
import Searchbar from "./Searchbar/Searchbar";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import { COLORS, MEASURES } from "styles/theme";

const Top: React.FC = () => {
  return (
    <div>
      <BrandLogo />
      <Searchbar />
      <BurgerMenu />

      <style jsx>{`
        div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          gap: calc(${MEASURES.padding} * 2);

          padding: calc(${MEASURES.padding} * 2);
          width: 100%;
          max-height: calc(${MEASURES.longest} * 1.2);

          border-bottom: ${MEASURES.borders} inset ${COLORS.lightGray};

          overflow: hidden;
        }

        @media (min-width: 768px) {
          div {
            max-height: calc(${MEASURES.longest} * 1.5);
          }
        }

      `}</style>
    </div>
  );
};

export default Top;
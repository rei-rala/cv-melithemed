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
          max-height: ${MEASURES.longest};

          border-bottom: ${MEASURES.borders} inset ${COLORS.lightGray};

          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Top;
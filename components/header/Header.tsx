import React from "react";
import { COLORS } from "styles/theme";
import Bottom from "./bottom/Bottom";
import Top from "./top/Top";

const Header: React.FC = () => {
  return <header>

    <Top />
    <Bottom />

    <style jsx>{`
      header {
        background: ${COLORS.warning};
      }
    `}</style>

  </header>
}

export default Header
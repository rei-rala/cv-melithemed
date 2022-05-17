import React from "react";
import { COLORS, MEASURES } from "styles/theme";
import DeliverTo from "./DeliverTo/DeliverTo";

const Bottom: React.FC = () => {
  return (
    <div>
      <DeliverTo />

      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          height: ${MEASURES.longer};
          border-bottom: ${MEASURES.borders} inset ${COLORS.lightGray};
          padding: 0 calc(${MEASURES.padding} * 2);
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Bottom;
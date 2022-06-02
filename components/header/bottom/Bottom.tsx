import React from "react";
import { COLORS, MEASURES } from "styles/theme";
import DeliverTo from "./DeliverTo/DeliverTo";

const Bottom: React.FC = () => {
  return (
    <div>
      <DeliverTo />

      <style jsx>{`
        div {
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          
          height: calc(${MEASURES.longer} * 1.5);
          border-bottom: ${MEASURES.borders} inset ${COLORS.lightGray};
          padding: 0 calc(${MEASURES.padding} * 2);
          min-width: 45%;
          width: 100%;
          max-width: 800px;
        }

        @media (min-width: 768px) {
          div {
            border: none;
          }
        }
      `}</style>
    </div>
  )
}

export default Bottom;
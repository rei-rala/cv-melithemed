import React from "react";
import { MEASURES } from "styles/theme";

const Message: React.FC<{ message: string, durationMs: number }> = ({ message, durationMs }) => {
  return (
    <div>
      <span>{message}</span>

      <style jsx>{`

        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: scale(0);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0);
          }
        }

        div {
          position: fixed;
          top: 50%;
          left: calc(50% - ${MEASURES.long}*2);
          text-align: center;

          background-color: #f5f5f5;
          border-radius: ${MEASURES.near};
          padding: ${MEASURES.short};
          width: calc(${MEASURES.long} *4);

          animation: fadeIn ${durationMs}ms ease-in-out;
          opacity: 0;
          z-index: 9;
        }
      `}</style>
    </div>
  )
}

export default Message;
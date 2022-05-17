import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { COLORS, MEASURES } from "styles/theme";

const DeliverTo: React.FC = () => {
  const [currentUrl, setCurrentUrl] = useState<string>();
  const email = 'ramonirala@outlook.com'

  useEffect(() => {
    const host = window.location.host;
    setCurrentUrl(host);
  }, []);

  return <div>
    <div>
      <span><FontAwesomeIcon icon={faLocationDot} /></span> <span><p>Enviar a <a href={`mailto:${email}?subject=Encontré%20tu%20CV%20en%20${currentUrl ?? 'internet'}%20!`}>{email}</a></p></span>
      <span><FontAwesomeIcon icon={faAngleRight} /></span>
    </div>

    <style jsx>{`
      div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${MEASURES.padding};
        
        font-size: calc(${MEASURES.normal} * 0.8);
        height: 90%;
        width: 100%;
        color: ${COLORS.gray};
      }

      span {
        display: flex;
        align-items: center;
        gap: ${MEASURES.padding};
        height: 100%;
        min-width: ${MEASURES.medium};
      }

      span:not(:nth-child(2)) {
        max-width: ${MEASURES.shorter};
      }

      span:nth-child(2) {
        flex-grow: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
      }

      span:last-child {
        justify-content: flex-end;
      }

      @media screen and (min-width: 768px) {
        div {
          width: auto;
        }
        span:nth-child(2) {
          flex-direction: column;
          flex-wrap: wrap;
          flex-grow: 0;
          width: auto;
        }
        p {
          display: grid;
          text-align: left;
        }

        span:last-child {
          display: none;
        }
      }
      
    `}</style>

  </div>
};

export default DeliverTo;
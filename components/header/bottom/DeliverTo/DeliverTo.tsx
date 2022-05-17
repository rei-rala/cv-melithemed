import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { COLORS, MEASURES } from "styles/theme";
import { useRouter } from "next/router";

const DeliverTo: React.FC = () => {
  const email = 'ramonirala@outlook.com'

  const router = useRouter();
  const [currentUrl, setCurrentUrl] = useState(router.pathname);

  useEffect(() => {
    const host = window.location.host;

    setCurrentUrl(`${host}${router.pathname}`);
  }, [router.pathname]);

  return <div>
    <div>
      <span><FontAwesomeIcon icon={faLocationDot} /></span>
      <span>Enviar propuestas a <a href={`mailto:${email}?subject=Encontre%20tu%20CV%20en%20${currentUrl ?? 'internet'}%20!`}>{email}</a></span>
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
      
    `}</style>

  </div>
};

export default DeliverTo;
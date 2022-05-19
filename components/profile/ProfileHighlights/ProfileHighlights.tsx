import React from "react";
import { COLORS, MEASURES } from "styles/theme";
import { Highlight } from "../Profile";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {
  highlights: Highlight[];
}

const ProfileHighlights: React.FC<Props> = ({ highlights }) => {

  const good = highlights.filter(highlight => highlight.type === 'good');
  const bad = highlights.filter(highlight => highlight.type === 'bad');

  return (
    <>
      {
        highlights && highlights.length > 0 ? (
          <section>
            <h2>Mini FODA</h2>

            <ul>
              {
                good.map((highlight, hIdx) => (
                  <li key={`miHighlight-${hIdx}`}>
                    <span><FontAwesomeIcon icon={faStar} width='16px' color='yellow' border /> {highlight.text}</span>
                  </li>
                ))
              }
              {
                bad.map((highlight, hIdx) => (
                  <li key={`miHighlight-${-hIdx - 1}`}>
                    <span><FontAwesomeIcon icon={faStarHalfAlt} width='16px' color='orange' border /> {highlight.text}</span>
                  </li>
                ))
              }
            </ul>

            <style jsx>{`
              section {
                border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
                background: ${COLORS.white};
              }

              h2 {
                margin-bottom: ${MEASURES.near};
              }

              ul {
                list-style: none;
              }

              li {
                
              }

            `}</style>

          </section>
        )
          : null
      }
    </>
  )
}

export default ProfileHighlights;
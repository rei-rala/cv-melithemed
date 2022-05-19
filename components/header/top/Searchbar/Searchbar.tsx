import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MEASURES, COLORS } from "styles/theme";



const Searchbar: React.FC = () => {
  return (
    <div>
      <label>
        <input type="text" placeholder="Estoy buscando..." maxLength={100} />
        <span></span>
        <FontAwesomeIcon icon={faSearch} width='16px' />
      </label>

      <style jsx>{`
        div {
          height: 2rem;
          width: 100%;
          overflow: hidden;
        }

        label {
          flex: 2;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-evenly;
          align-items: center;    
          
          background: ${COLORS.white};
          color: ${COLORS.lightGray};
          box-shadow: 0 2px 3px 0 rgba(0,0,0,.15);
          padding: calc(${MEASURES.padding} *1.5);
          cursor: text;
        }

        label input {
          border: none;
          background: transparent;
          width: 100%;
          height: 100%;
          order: 1;
        }

        @media (min-width: 768px) {

          label input {
            order: -1;
          }

          label span {
            min-width: 1px;
            min-height: ${MEASURES.normal};
            border-left: 1px solid ${COLORS.lightGray};
            margin: 0 calc(${MEASURES.padding} * 1.5);
          }
        }

        `}</style>
    </div>
  )
}

export default Searchbar
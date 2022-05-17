import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { MEASURES, COLORS } from "styles/theme";



const Searchbar: React.FC = () => {
  return (
    <div>
      <label>
        <input type="text" placeholder="Estoy buscando..." maxLength={40}/>
        <span></span>
        <FontAwesomeIcon icon={faSearch} width={MEASURES.medium} height={MEASURES.medium} />
      </label>

      <style jsx>{`
        div {
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;
          gap: calc(${MEASURES.padding}/2);
          
          heigth: 2rem;
          width: 100%;
          padding: ${MEASURES.padding};
        }


        label {
          flex: 2;
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          align-items: center;    
          
          background: ${COLORS.white};
          color: ${COLORS.lightGray};
          box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
          padding: calc(${MEASURES.padding} *1.5);
          cursor: text;
        }

        label input {
          margin: ${MEASURES.padding} calc(${MEASURES.padding} * 2.5);
          border: none;
          background: transparent;
          width: 100%;
          heigth: 100%;
          order: 1;
        }

        @media (min-width: 768px) {

          label input {
            order: -1;
          }

          label span {
            min-width: 1px;
            min-height: ${MEASURES.medium};
            border-left: 1px solid ${COLORS.lightGray};
            margin-right: calc(${MEASURES.padding} * 1.5);
          }
        }

        `}</style>
    </div>
  )
}

export default Searchbar
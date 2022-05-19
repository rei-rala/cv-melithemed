import Link from "next/link";
import React from "react";

let brandUrl = "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__large_plus.png";
let brandUrlSmall = "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.9/mercadolibre/logo__small.png";


const BrandLogo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <a>
        <span>Ir a la home 😊</span>

        <style jsx>{`
          a {
            display: grid;
            place-items: center;

            background-image: url(${brandUrlSmall});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain; 
          
            color: transparent;
            cursor: pointer;
          }

          a span {
            max-width: 3.25rem;
            min-height: 2.25rem;
          }

          @media (min-width: 768px) {
            a {
              background-image: url(${brandUrl});
            }

            a span {
              min-width: 7rem;
              max-height: 5rem;    
            }
          }
        `}</style>

      </a>
    </Link>
  )
}

export default BrandLogo
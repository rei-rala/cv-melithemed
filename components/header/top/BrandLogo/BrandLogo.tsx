import Link from "next/link";
import React from "react";

let brandUrl = "/assets/logo.png";
let brandUrlMobile = "/favicon.svg";


const BrandLogo: React.FC = () => {
  return (
    <Link href="/" passHref>
      <a>
        <span>Ir a la home 😊</span>
        
        <style jsx>{`
          a {
            display: grid;
            place-items: center;

            background-image: url(${brandUrlMobile});
            background-repeat: no-repeat;
            background-position: center;
            background-size: contain; 
          
            color: transparent;
            cursor: pointer;
          }

          a span {
            max-width: 4rem;
            min-height: 2.5rem;
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
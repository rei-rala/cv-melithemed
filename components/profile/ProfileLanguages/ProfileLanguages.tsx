import Image from "next/image";
import React, { useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

interface IProfileLanguage {
  name: string,
  icon: string,
  level: string,
}

const LanguageImgHandler: React.FC<{ imageUrl: string, alt: string }> = ({ imageUrl, alt }) => {
  let alternativeImage = 'https://img.icons8.com/info';

  const [url, setUrl] = useState(imageUrl);
  const onErrorHandler = () => setUrl(alternativeImage);

  return (
    <Image
      src={url}
      alt={alt}
      width={20}
      height={20}
      onError={onErrorHandler}
    />
  );
}

const ProfileLanguages: React.FC<{ languages: IProfileLanguage[] }> = ({ languages }) => {
  return (
    languages.length < 1
      ? null
      : (
        <section>
          <h2>Languages</h2>
          <ul>

            {languages.map((language: IProfileLanguage, index: number) => (
              <li key={`lang-${index}`} >
                <span><LanguageImgHandler imageUrl={language.icon} alt={language.name} /></span>
                <span>{language.name}</span>
                <span>{language.level}</span>
              </li>
            ))}
          </ul>

          <style jsx>{`
            section {
              display: flex;
              flex-direction: column;
              gap: ${MEASURES.medium};

              background-color: ${COLORS.white};
            }

            ul {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              gap: ${MEASURES.medium};
            }

            li {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: ${MEASURES.shortest};
            }

            li span:first-child {
              display: grid;
              place-items: center;
            }

            li span:nth-child(2) {
              font-weight: bold;
              display: none;
            }

            @media (min-width: 500px) {
              li span:nth-child(2) {
                display: inline;
              }
            }

          `}</style>
        </section>
      )
  )
}

export default ProfileLanguages;
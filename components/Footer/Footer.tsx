import React, { useEffect, useState } from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram, faBehance, faWhatsapp, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

let onShowSection = `  
  aside {
    margin-bottom: calc(${MEASURES.longest} * 3.25);
  }

  @media (min-width: 500px) {
    margin-bottom: calc(${MEASURES.longest} * 3);
  }

`;

let onHideSection = `
  aside {
    margin-bottom: ${MEASURES.longest};
  }
  `;

interface IFooter {
  profileName?: string;
  showingFooter: boolean;
  toggleFooter: () => void;
  profileContact?: { type: string; url: string; }[]
}

let dropdownDurationMS = 500;

enum contactNames { email, github, linkedin, instagram, behance, whatsapp, facebook, youtube, other };

const getContactType = (type: string) => {
  let typeLower = type.toLowerCase();

  // i dont think a switch will have the same behavior as an if-else
  if (typeLower.includes("email") || typeLower.includes("mail") || typeLower.includes("correo") || typeLower.includes("correo electrónico") || typeLower.includes("e-mail")) {
    return contactNames.email;
  }
  if (typeLower.includes("github")) {
    return contactNames.github;
  }
  if (typeLower.includes("linkedin")) {
    return contactNames.linkedin;
  }
  if (typeLower.includes("instagram")) {
    return contactNames.instagram;
  }
  if (typeLower.includes("behance")) {
    return contactNames.behance;
  }
  if (typeLower.includes("whatsapp")) {
    return contactNames.whatsapp;
  }
  if (typeLower.includes("facebook")) {
    return contactNames.facebook;
  }
  if (typeLower.includes("youtube")) {
    return contactNames.youtube;
  }

  return contactNames.other;
}


let iconProp = {
  [contactNames.email]: {
    icon: faEnvelope,
    color: 'orange'
  },
  [contactNames.github]: {
    icon: faGithub,
    color: 'purple'
  },
  [contactNames.linkedin]: {
    icon: faLinkedin,
    color: 'blue'
  },
  [contactNames.instagram]: {
    icon: faInstagram,
    color: 'orange'
  },
  [contactNames.behance]: {
    icon: faBehance,
    color: 'orange'
  },
  [contactNames.whatsapp]: {
    icon: faWhatsapp,
    color: 'green'
  },
  [contactNames.facebook]: {
    icon: faFacebook,
    color: 'blue'
  },
  [contactNames.youtube]: {
    icon: faYoutube,
    color: 'red'
  },
  [contactNames.other]: {
    icon: faHeart,
    color: 'red'
  }
}

const ContactIcon: React.FC<{ type: string, url: string, urlReplaceWith?: string }> = ({ type, url, urlReplaceWith }) => {

  let typeLower = type.toLowerCase();
  let urlToShow = url.length > 0 ? url.replace('http://', '').replace('https://', '').replace('www.', '') : 'Work in progress';
  let urlToOpen = urlReplaceWith ?? (url.length > 0 ? url : '#')

  let typeToProps = getContactType(typeLower);
  let customIconProp = iconProp[typeToProps];

  return (
    <>
      <FontAwesomeIcon
        icon={customIconProp.icon}
        width='16px'
        height='16px'
        color={customIconProp.color}
      />
      <b>{type}</b>
      {
        urlToOpen === '#'
          ? <i>{urlToShow}</i>
          : <a href={urlToOpen}>{urlToShow}</a>
      }
    </>
  )
}

const Footer: React.FC<IFooter> = ({ profileName, showingFooter, profileContact, toggleFooter, }) => {

  const [mailLinkPath, setMailLinkPath] = useState('tu%20pagina!')

  useEffect(() => {
    const host = window.location.host;
    const path = window.location.pathname;

    setMailLinkPath(host + path)
  }, [])


  return !profileName ? null : (
    <footer>
      <div onClick={toggleFooter}>
        Redes de {profileName} <span><FontAwesomeIcon icon={faAngleUp} width="16px" /></span>
      </div>
      <div>
        <ul>
          {
            profileContact && profileContact.length > 0 ?
              profileContact.map((item, index) => (
                <li key={`profileContact-${index}`}>
                  <ContactIcon type={item.type} url={item.url} urlReplaceWith={getContactType(item.type) === contactNames.email ? `mailto:${item.url}?Subject=%20Vi%20tu%20CV%20en%20${mailLinkPath}&body=Hola%20${profileName},%20 charlemos!` : undefined} />
                </li>
              ))
              : <b>No he añadido contactos</b>
          }
        </ul>
      </div>

      <style jsx>{`
        footer {
          position: relative;
          z-index: 9;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: space-around;
          text-align: center;

          width: 100%;
          background: ${COLORS.white};
          padding: ${MEASURES.padding} calc(${MEASURES.padding} * 2);
          overflow: hidden;
        }

        footer > :first-child {
          justify-content: space-around;
          flex-wrap: nowrap;

          gap: ${MEASURES.shorter};
          width: fit-content;

          position: relative;
          margin: auto;
          border: ${MEASURES.borders} solid ${COLORS.lightGray};
          border-bottom: none;
          border-radius: ${MEASURES.radius} ${MEASURES.radius} 0 0;
          bottom: calc(${MEASURES.borders} * -1.25);
          z-index: 2;
          cursor: pointer;
        }

        footer > :nth-child(2) {
          height: ${showingFooter ? `calc(${MEASURES.longest} * 2)` : "0"};

          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          transition: height ${dropdownDurationMS}ms ease-in-out,
            padding ${dropdownDurationMS}ms ease-in-out;
          ${showingFooter ? `` : "padding:0;"}
        }

        ul {
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: space-around;
          width: 100%;
        }

        li {
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          gap: ${MEASURES.short};
          transition: opacity ${dropdownDurationMS * 1.5}ms ease;
          opacity: ${showingFooter ? "1" : "0"};
          word-break: break-word;
        }

        li:last-child a {
          color: ${COLORS.danger};
          cursor: help;
        }

        li:not(:last-child) a {
          text-decoration: underline;
        }

        b {
          display: none;
        }

        span {
          display: grid;
          place-items: center;

          transition: transform ${dropdownDurationMS}ms ease-in-out;
          transform: ${showingFooter ? "rotate(-180deg)" : "rotate(0deg)"};
        }

        @media (min-height: 300px) {
          footer {
            position: fixed;
            bottom: 0;
          }

          ${showingFooter ? onShowSection : onHideSection}
        }

        @media (min-width: 500px) {
          b {
            display: inline !important;
          }
        }

        @media (min-width: 768px) {
          footer > nth-child(2) {
            height: ${showingFooter ? `calc(${MEASURES.longest} * 2)` : "0"};
          }

          b {
            display: block;
          }

          ul {
            flex-direction: row;
            justify-content: space-evenly;
            gap: ${MEASURES.shortest};
          }

          li {
            flex-direction: column;
            gap: ${MEASURES.shorter};
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

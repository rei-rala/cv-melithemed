import React from "react";
import { COLORS, FONT_FAMILY, MEASURES } from "styles/theme";

interface ProfileDetailProps {
  about: string;
}

const ProfileAbout: React.FC<ProfileDetailProps> = ({ about }) => {
  return (
    <section>
      <h2>Acerca del postulante</h2>

      <div>{about.split('\n').map((line, lIdx) => <p key={`lineAbout-${lIdx}`}>{line}</p>)}</div>


      <style jsx>{`
        section {
          background: ${COLORS.white};
        }

        h2 {
          margin-bottom: ${MEASURES.near};
        }

        div {
          font-family: ${FONT_FAMILY.light};

          -webkit-user-select: text;
          -khtml-user-select: text;
          -moz-user-select: text;
          -ms-user-select: text;
          user-select: text;
        }

        p {
          text-align: justify;
          margin: ${MEASURES.borders} 0;
          min-height: ${MEASURES.near};
        }
      `}</style>
    </section>
  );
};

export default ProfileAbout;
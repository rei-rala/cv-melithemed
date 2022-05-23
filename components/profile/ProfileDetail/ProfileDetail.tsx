import React from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { formatDate } from "utils";

type History = {
  title: string;
  where: string;
  from: string;
  to: string;
}

type AcademicHistory = History & {
  description: string;
  condition: string;
}

type ProfessionalHistory = History & {
  seniority: string;
  actual: boolean;
}


const bothProfileJSX = `
  section article {
    margin: ${MEASURES.short};
    border: 1px inset ${COLORS.blue};
    border-radius: ${MEASURES.long};
    overflow: hidden;
    text-align: center;
  }

  section article > div > div {
    display: flex;
    flex-direction: column;
    padding: ${MEASURES.shortest};
  }

  section article > div > div:not(:last-child) {
    border-bottom: 1px inset ${COLORS.blue};
  }

  section article h3 {
    text-align: center;
    border-bottom: 1px inset ${COLORS.lightGray};
    background: ${COLORS.blueAlt};
    color: ${COLORS.blue};
  }

  @media (min-width: 768) {
    section article > div  {
      flex-direction: row;
      flex-wrap: wrap;
      background: red;
    } 
  }
`

const AcademicProfileDetail: React.FC<{ academicHistory: AcademicHistory[] }> = ({ academicHistory }) => {
  return (
    <article>
      <h3><FontAwesomeIcon icon={faGraduationCap} width='12px' /> Academico</h3>
      <div>
        {academicHistory.map((history, index) => (
            <div key={`academic-${index}`}>
              <b>{history.title}</b>
              <span>{history.where}</span>
              <span>{formatDate(history.from, {sep: ' '}).MMyyyy} {
                history?.condition.includes('curso') 
                  ? ''
                  : `- ${formatDate(history.to, {sep:' '}).MMyyyy}`
              }</span>
              <>{history.condition ? <i>{history.condition}</i> : null}</>
            </div>
        ))}
      </div>
    </article>
  )
}

const ProfessionalHistory: React.FC<{ professionalHistory: ProfessionalHistory[] }> = ({ professionalHistory }) => {
  return (
    <article>
      <h3><FontAwesomeIcon icon={faSuitcase} width='12px' /> Laboral</h3>
      <div>
        {professionalHistory.map((prof, index) => (
            <div key={`profs-${index}`}>
              <b>{prof.title} {prof.seniority}</b>
              <span>{prof.where}</span>
              {
                prof.actual
                  ? <span>Desde {formatDate(prof.from, {sep: ' '}).MMyyyy}</span>
                  : <span>{formatDate(prof.from, {sep: ' '}).MMyyyy} - {formatDate(prof.to, {sep: ' '}).MMyyyy}</span>
              }
            </div>
        ))}
      </div>

    </article>
  )
}

const ProfileDetail: React.FC<{ academicHistory: AcademicHistory[], professionalHistory: ProfessionalHistory[] }> = ({ academicHistory, professionalHistory }) => {

  const hasAcademicHistory = academicHistory?.length > 0;
  const hasProfessionalHistory = professionalHistory?.length > 0;


  return (
    <section>
      <h2>Historial</h2>

      {
        hasProfessionalHistory ? <ProfessionalHistory professionalHistory={professionalHistory} /> : null
      }

      {
        hasAcademicHistory ? <AcademicProfileDetail academicHistory={academicHistory} /> : null
      }

      <style jsx>{`
        section {
          border-top: ${MEASURES.borders} solid ${COLORS.lightGray};
          background: ${COLORS.white};
        }

        ${bothProfileJSX}
        
      `}</style>
    </section >
  )
}

export default ProfileDetail;
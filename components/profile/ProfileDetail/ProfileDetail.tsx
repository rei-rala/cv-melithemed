import React from "react";
import { COLORS, MEASURES } from "styles/theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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

type WorkHistory = History & {
  seniority: string;
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
              <span>{history.from} - {history.to}</span>
              <>{history.condition ? <i>{history.condition}</i> : null}</>
            </div>
        ))}
      </div>
    </article>
  )
}

const WorkHistory: React.FC<{ workHistory: WorkHistory[] }> = ({ workHistory }) => {
  return (
    <article>
      <h3><FontAwesomeIcon icon={faSuitcase} width='12px' /> Laboral</h3>
      <div>
        {workHistory.map((history, index) => (
            <div key={`work-${index}`}>
              <b>{history.title} {history.seniority}</b>
              <span>{history.where}</span>
              {
                history.to.toLowerCase() === 'presente'
                  ? <span>Desde {history.from}</span>
                  : <span>Desde {history.from} hasta {history.to}</span>
              }
            </div>
        ))}
      </div>

    </article>
  )
}

const ProfileDetail: React.FC<{ academicHistory: AcademicHistory[], workHistory: WorkHistory[] }> = ({ academicHistory, workHistory }) => {

  const hasAcademicHistory = academicHistory?.length > 0;
  const hasWorkHistory = workHistory?.length > 0;

  return (
    <section>
      <h2>Historial</h2>

      {
        hasWorkHistory ? <WorkHistory workHistory={workHistory} /> : null
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
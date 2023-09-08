import { faHammer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileCustom from "./ProfileCustom/ProfileCustom";
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import ProfileHighlights from "./ProfileHighlights/ProfileHighlights";
import ProfileLanguages from "./ProfileLanguages/ProfileLanguages";
import ProfileMain from "./ProfileMain/ProfileMain";

export type Highlight = {
  type: string,
  text: string
}

interface IProfile {
  profile: any,
  showingFooter: boolean,
  pushMessage: (message: string) => void
  toggleFooter: () => void,
}


const Profile: React.FC<IProfile> = ({ profile, showingFooter, toggleFooter, pushMessage }) => {
  return (
    <>
      <ProfileMain name={profile.name} currently={profile.currently} headline={profile.headline} images={profile.images} pushMessage={pushMessage} showingFooter={showingFooter} toggleFooter={toggleFooter} />
      <ProfileAbout about={profile.about} />
      <ProfileHighlights highlights={profile.highlights} />
      <ProfileDetail academicHistory={profile.academic} professionalHistory={profile.professional} />
      <ProfileLanguages languages={profile.languages} />
      <ProfileCustom customSection={{ name: profile.name, ...profile.customSection, }} />
      <aside>
        <p><FontAwesomeIcon icon={faHammer} width='10px' /> Made by <a href="https://www.linkedin.com/in/ramon-irala-220362110/" target='_blank' rel="noreferrer">Ramon Irala</a>, inspired on <a href="https://www.mercadolibre.com.ar" target="_blank" rel="noreferrer">MercadoLibre</a> </p>
        <p>May 2022</p>
      </aside>
    </>
  )
}

export default Profile
import React, { useEffect, useState } from "react";

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
  toggleFooter: () => void
}

const Profile: React.FC<IProfile> = ({ profile, toggleFooter }) => {
  return (
    <>
      <ProfileMain name={profile.name} currently={profile.currently} headline={profile.headline} images={profile.images} toggleFooter={toggleFooter} />
      <ProfileAbout about={profile.about} />
      <ProfileHighlights highlights={profile.highlights} />
      <ProfileDetail academicHistory={profile.history.academic} workHistory={profile.history.work} />
      <ProfileLanguages languages={profile.languages} />
      <ProfileCustom customSection={{ name: profile.name, ...profile.customSection, }} />
    </>
  )
}

export default Profile
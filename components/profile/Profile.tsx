import React from "react";

import ProfileAbout from "./ProfileAbout/ProfileAbout";
import ProfileCustom from "./ProfileCustom/ProfileCustom";
import ProfileDetail from "./ProfileDetail/ProfileDetail";
import ProfileHighlights from "./ProfileHighlights/ProfileHighlights";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile: React.FC<{ profile: any }> = ({ profile }) => {

  return (
    <>
      <ProfileMain name={profile.name} currently={profile.currently} headline={profile.headline} images={profile.images} />
      <ProfileAbout about={profile.about} />
      <ProfileHighlights highlights={profile.highlights} />
      <ProfileDetail academicHistory={profile.history.academic} workHistory={profile.history.work} />
      <ProfileCustom customSection={{ name: profile.name, ...profile.customSection, }} />
    </>
  )
}

export default Profile
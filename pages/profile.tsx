import React, { useState } from "react";
import CenterPageContainer from "../app/common/components/layout/CenterPageContainer";
import EditProfileForm from "../app/modules/profile/components/modules/EditProfileForm";
import ProfileInfo from "../app/modules/profile/components/modules/ProfileInfo";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CenterPageContainer>
      {isEditing ? (
        <EditProfileForm setIsEditing={setIsEditing} />
      ) : (
        <ProfileInfo setIsEditing={setIsEditing} />
      )}
    </CenterPageContainer>
  );
};

export default Profile;

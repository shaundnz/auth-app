import { Heading } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React, { useEffect, useState } from "react";
import Message from "../app/common/components/elements/Message";
import CenterPageContainer from "../app/common/components/layout/CenterPageContainer";
import { useUser } from "../app/common/hooks/useUser";
import EditProfileForm from "../app/modules/profile/components/modules/EditProfileForm";
import ProfileInfo from "../app/modules/profile/components/modules/ProfileInfo";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [session, loading] = useSession();

  const { user, isLoading, isError } = useUser(session?.userId as string);

  if (isLoading || loading) {
    return (
      <CenterPageContainer>
        <Message message={"Loading..."} />
      </CenterPageContainer>
    );
  }

  if (!session) {
    return (
      <CenterPageContainer>
        <Message message={"You need to be authenticated to access this page"} />
      </CenterPageContainer>
    );
  }

  if (isError) {
    return (
      <CenterPageContainer>
        <Message message={"Error fetching your profile"} />
      </CenterPageContainer>
    );
  }

  return (
    <CenterPageContainer>
      {isEditing ? (
        <EditProfileForm setIsEditing={setIsEditing} />
      ) : (
        <ProfileInfo setIsEditing={setIsEditing} user={user!} />
      )}
    </CenterPageContainer>
  );
};

export default Profile;

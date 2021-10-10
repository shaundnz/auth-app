import { Heading, Link, VStack, Text, Code, Box } from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import React, { useState } from "react";
import Message from "../app/common/components/elements/Message";
import CenterPageContainer from "../app/common/components/layout/CenterPageContainer";
import { useUsers } from "../app/common/hooks/useUsers";
import UnauthenticatedView from "../app/modules/home/components/elements/UnauthenticatedView";
import UsersStack from "../app/modules/home/components/modules/UsersStack";

export default function Home() {
  const [session, loading] = useSession();
  const { users, isLoading, isError } = useUsers();

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
        <UnauthenticatedView />
      </CenterPageContainer>
    );
  }

  if (isError) {
    return (
      <CenterPageContainer>
        <Message message={"Error loading users"} />
      </CenterPageContainer>
    );
  }

  return (
    <CenterPageContainer>
      <UsersStack users={users ? users : []} />
    </CenterPageContainer>
  );
}

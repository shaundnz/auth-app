import { VStack } from "@chakra-ui/react";
import React from "react";
import UserProfile from "../elements/UserProfile";

const UsersStack = () => {
  return (
    <VStack spacing="4">
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
      <UserProfile />
    </VStack>
  );
};

export default UsersStack;

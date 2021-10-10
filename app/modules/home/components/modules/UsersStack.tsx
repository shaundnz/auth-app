import { VStack } from "@chakra-ui/react";
import React from "react";
import User from "../../../../common/types/user";
import UserProfile from "../elements/UserProfile";

interface Props {
  users: User[];
}

const UsersStack: React.FC<Props> = ({ users }) => {
  return (
    <VStack spacing="4">
      {users.map((user) => (
        <UserProfile user={user} />
      ))}
    </VStack>
  );
};

export default UsersStack;

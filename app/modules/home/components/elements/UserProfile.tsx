import React from "react";
import {
  Flex,
  Square,
  Image,
  Box,
  Heading,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import User from "../../../../common/types/user";

interface Props {
  user: User;
}

const UserProfile: React.FC<Props> = ({ user }) => {
  return (
    <HStack
      spacing="3"
      borderRadius="2xl"
      borderColor="#BDBDBD"
      borderWidth="2px"
      boxShadow="0 4px 4px 0 rgba(0,0,0,0.1)"
      p="4"
      minW="md"
    >
      <Square size="150px">
        <Image
          src={user.imageUrl}
          w="100%"
          h="100%"
          borderRadius="full"
          objectFit="cover"
        />
      </Square>
      <VStack align="flex-start">
        {user.name ? (
          <Heading size="md" as="h4">
            Name: {user.name}
          </Heading>
        ) : null}
        {user.bio ? (
          <HStack>
            <Heading size="sm" as="h5">
              Bio:
            </Heading>
            <Text>{user.bio}</Text>
          </HStack>
        ) : null}
        {user.phone ? (
          <HStack>
            <Heading size="sm" as="h5">
              Phone:
            </Heading>
            <Text>{user.phone}</Text>
          </HStack>
        ) : null}
        {user.email ? (
          <HStack>
            <Heading size="sm" as="h5">
              Email:
            </Heading>
            <Text>{user.email}</Text>
          </HStack>
        ) : null}
      </VStack>
    </HStack>
  );
};

export default UserProfile;

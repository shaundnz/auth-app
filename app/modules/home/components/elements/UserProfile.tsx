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

const UserProfile = () => {
  return (
    <HStack
      spacing="3"
      borderRadius="2xl"
      borderColor="#BDBDBD"
      borderWidth="2px"
      boxShadow="0 4px 4px 0 rgba(0,0,0,0.1)"
      p="4"
    >
      <Square size="150px">
        <Image
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          w="100%"
          h="100%"
          borderRadius="full"
          objectFit="cover"
        />
      </Square>
      <VStack align="flex-start">
        <Heading size="md" as="h4">
          Name: Xanthe Neal
        </Heading>
        <HStack>
          <Heading size="sm" as="h5">
            Bio:
          </Heading>
          <Text>This is my bio, very cool!!</Text>
        </HStack>
        <HStack>
          <Heading size="sm" as="h5">
            Phone:
          </Heading>
          <Text>012 3456 789</Text>
        </HStack>
        <HStack>
          <Heading size="sm" as="h5">
            Email:
          </Heading>
          <Text>xanthe.neal@gmail.com</Text>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default UserProfile;

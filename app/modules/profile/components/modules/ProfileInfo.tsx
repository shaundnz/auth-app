import React from "react";
import {
  VStack,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Spacer,
  Heading,
  Text,
  Flex,
  Button,
  Box,
  Square,
  Image,
} from "@chakra-ui/react";
import User from "../../../../common/types/user";

interface Props {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
}

const ProfileInfo: React.FC<Props> = ({ setIsEditing, user }) => {
  return (
    <VStack spacing="7" py={[4, 12]} px={[0, 12]}>
      <VStack>
        <Heading size="2xl" as="h1" fontWeight="medium">
          Personal Info
        </Heading>
        <Text>Basic info about you, such as name and photo</Text>
      </VStack>
      <Box
        w={["100%", "lg", "xl"]}
        borderRadius="2xl"
        borderColor="#E0E0E0"
        borderWidth={["0", "1px"]}
      >
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Td colSpan={2}>
                <Flex justify="space-between" align="center">
                  <VStack align="flex-start">
                    <Heading size="lg" as="h4" fontWeight="medium">
                      Profile
                    </Heading>
                    <Text size="xs" color="app.light">
                      Some info may be visible to other people
                    </Text>
                  </VStack>
                  <Spacer />
                  <Button variant="outline" onClick={() => setIsEditing(true)}>
                    Edit
                  </Button>
                </Flex>
              </Td>
            </Tr>
            <Tr>
              <Td color="app.light">Photo</Td>
              <Td>
                <Square size="100px">
                  <Image
                    src={user.imageUrl}
                    w="100%"
                    h="100%"
                    borderRadius="xl"
                    objectFit="cover"
                  />
                </Square>
              </Td>
            </Tr>
            <Tr>
              <Td color="app.light">Name</Td>
              <Td>{user.name}</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Bio</Td>
              <Td>{user.bio}</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Phone</Td>
              <Td>{user.phone}</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Email</Td>
              <Td>{user.email}</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default ProfileInfo;

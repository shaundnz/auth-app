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

interface Props {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileInfo: React.FC<Props> = ({ setIsEditing }) => {
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
              <Td colspan="2">
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
                    src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
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
              <Td>Xanthe Neal</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Bio</Td>
              <Td>This is my bio, very cool!!</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Phone</Td>
              <Td>021 1234 5678</Td>
            </Tr>
            <Tr>
              <Td color="app.light">Email</Td>
              <Td>xanthe.neal@gmail.com</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </VStack>
  );
};

export default ProfileInfo;

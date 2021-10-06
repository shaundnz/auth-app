import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  FormControl,
  Input,
  Button,
  IconButton,
  Icon,
  Link,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FaGoogle, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";
import React from "react";
import FormContainer from "./FormContainer";

const RegisterForm = () => {
  return (
    <FormContainer>
      <Heading size="xl" as="h3">
        Join thousands of learners from around the world
      </Heading>

      <Text>
        Master web development by making real life projects. There are multiple
        paths for you to choose.
      </Text>

      <VStack spacing={2} color="app.light" w="100%">
        <InputGroup>
          <InputLeftElement>
            <EmailIcon />
          </InputLeftElement>
          <Input placeholder="Email" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <LockIcon />
          </InputLeftElement>
          <Input placeholder="Password" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement>
            <LockIcon />
          </InputLeftElement>
          <Input placeholder="Confirm Password" />
        </InputGroup>
      </VStack>

      <Button w="100%" colorScheme="blue" fontWeight="medium">
        Start coding now
      </Button>

      <Text>Or continue with these social profiles</Text>

      <HStack>
        <IconButton
          aria-label="Login with Google"
          variant="outline"
          isRound
          color="app.light"
        >
          <Icon as={FaGoogle} />
        </IconButton>
        <IconButton
          aria-label="Login with Facebook"
          variant="outline"
          isRound
          color="app.light"
        >
          <Icon as={FaFacebook} />
        </IconButton>
        <IconButton
          aria-label="Login with Twitter"
          variant="outline"
          isRound
          color="app.light"
        >
          <Icon as={FaTwitter} />
        </IconButton>
        <IconButton
          aria-label="Login with Github"
          variant="outline"
          isRound
          color="app.light"
        >
          <Icon as={FaGithub} />
        </IconButton>
      </HStack>

      <Text>
        Already a member?{" "}
        <Link color="app.link" href="login">
          Login
        </Link>
      </Text>
    </FormContainer>
  );
};

export default RegisterForm;

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

const LoginForm = () => {
  return (
    <FormContainer>
      <Heading size="xl" as="h3">
        Login
      </Heading>

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
      </VStack>

      <Button w="100%" colorScheme="blue" fontWeight="medium">
        Login
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
        Don't have an account yet?{" "}
        <Link color="app.link" href="/register">
          Register
        </Link>
      </Text>
    </FormContainer>
  );
};

export default LoginForm;

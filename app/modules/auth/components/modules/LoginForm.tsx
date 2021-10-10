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
import ProvidersIconRow from "../elements/ProvidersIconRow";
import { useSession, signIn } from "next-auth/client";
import { useRouter } from "next/router";
import axios from "axios";

const LoginForm = () => {
  const [session, loading] = useSession();
  const router = useRouter();

  if (loading) {
    return (
      <Heading size="lg" as="h2">
        Loading, Please wait...
      </Heading>
    );
  }

  if (session) {
    router.push("/");
    return (
      <Heading size="lg" as="h2">
        You are already logged in, redirecting to home page
      </Heading>
    );
  }

  return (
    <FormContainer>
      <Heading size="xl" as="h3">
        Login
      </Heading>

      <Button
        colorScheme="blue"
        size="lg"
        onClick={() =>
          signIn("credentials", {
            username: "Guest",
            password: "Password",
            callbackUrl: "/",
          })
        }
      >
        Login as Guest
      </Button>

      <Text>Or use one of these social profiles to login.</Text>

      <ProvidersIconRow />
    </FormContainer>
  );
};

export default LoginForm;

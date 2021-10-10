import { HStack, Icon, IconButton } from "@chakra-ui/react";
import { signIn } from "next-auth/client";
import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const ProvidersIconRow = () => {
  return (
    <HStack>
      <IconButton
        size="lg"
        aria-label="Login with Google"
        variant="outline"
        isRound
        color="app.light"
        onClick={() => signIn("google", { callbackUrl: "/" })}
      >
        <Icon as={FaGoogle} />
      </IconButton>
      <IconButton
        size="lg"
        aria-label="Login with Facebook"
        variant="outline"
        isRound
        color="app.light"
        onClick={() => signIn("facebook", { callbackUrl: "/" })}
      >
        <Icon as={FaFacebook} />
      </IconButton>
      <IconButton
        size="lg"
        aria-label="Login with Github"
        variant="outline"
        isRound
        color="app.light"
        onClick={() => signIn("github", { callbackUrl: "/" })}
      >
        <Icon as={FaGithub} />
      </IconButton>
    </HStack>
  );
};

export default ProvidersIconRow;

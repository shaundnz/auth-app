import { Box, Heading, VStack, Text, Link, Code } from "@chakra-ui/react";
import React from "react";

const UnauthenticatedView = () => {
  return (
    <Box maxW="3xl">
      <VStack borderRadius="2xl" borderColor="#BDBDBD" borderWidth="2px" p="4">
        <Heading size="xl" as="h2">
          Welcome to the auth app!
        </Heading>
        <Text size="lg">
          This application was built to practice handling authentication with
          different libraries, this version of the app is using{" "}
          <Link href="https://next-auth.js.org/">
            <Code>next-auth</Code>
          </Link>
          to manage authentication.
        </Text>
        <Text size="lg">
          This page is protected route, logged in users can see other users on
          this page. Otherwise you will see this message.
        </Text>
        <Heading size="sm">
          <Link href="/login" color="app.link">
            Login
          </Link>{" "}
          with one of the providers or as a guest to see how it works!
        </Heading>
      </VStack>
    </Box>
  );
};

export default UnauthenticatedView;

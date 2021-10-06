import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justify="center" color="app.light" py="2">
      <Text>
        Created By:{" "}
        <Text fontWeight="bold" textDecorationLine="underline" display="inline">
          Shaun Price
        </Text>
      </Text>
    </Flex>
  );
};

export default Footer;

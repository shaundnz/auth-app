import {
  Flex,
  Image,
  Square,
  Heading,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <LinkBox>
      <Flex align="center">
        <LinkOverlay href="/">
          <Square size="45px">
            <Image src="/authapp-logo.png" />
          </Square>
        </LinkOverlay>
        <Heading
          as="h5"
          size="lg"
          fontWeight="black"
          pl="1"
          display={["none", "block"]}
        >
          AuthApp
        </Heading>
      </Flex>
    </LinkBox>
  );
};

export default Logo;

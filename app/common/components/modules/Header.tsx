import { Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Logo from "../elements/Logo";
import ProfileMenu from "../elements/HeaderMenu";

const Header = () => {
  return (
    <Flex py="2">
      <Logo />
      <Spacer />
      <ProfileMenu />
    </Flex>
  );
};

export default Header;

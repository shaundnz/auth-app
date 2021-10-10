import { Flex, Heading, Link, Spacer, HStack } from "@chakra-ui/react";
import React from "react";
import Logo from "../elements/Logo";
import HeaderMenu from "../elements/HeaderMenu";
import { useSession } from "next-auth/client";

const Header = () => {
  const [session, loading] = useSession();

  return (
    <Flex py="2">
      <Logo />
      <Spacer />
      {session ? (
        <HeaderMenu
          name={session.user?.name ? session.user?.name : "Error"}
          imageUrl={
            session.user?.image
              ? session.user?.image
              : "/profile-placeholder.jpg"
          }
        />
      ) : (
        <HStack align="center">
          <Link href="/login">
            <Heading size="sm" as="h5">
              Login
            </Heading>
          </Link>
        </HStack>
      )}
    </Flex>
  );
};

export default Header;

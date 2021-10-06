import {
  HStack,
  Square,
  Image,
  Heading,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Link,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { BsPersonCircle } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import React from "react";

const HeaderMenu = () => {
  return (
    <HStack align="center" spacing="1">
      <Square size="50px">
        <Image
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          w="100%"
          h="100%"
          borderRadius="xl"
          objectFit="cover"
        />
      </Square>

      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              size="xs"
              aria-label="Open menu"
              variant="ghost"
              _hover={{ backgroundColor: "none" }}
              isActive={isOpen}
              rightIcon={isOpen ? <TriangleUpIcon /> : <TriangleDownIcon />}
            >
              <Heading size="sm" as="h5" pl="2">
                Xanthe Neal
              </Heading>
            </MenuButton>
            <MenuList>
              <Link href="profile">
                <MenuItem icon={<BsPersonCircle />}>My Profile</MenuItem>
              </Link>
              <MenuItem color="#EB5757" icon={<MdLogout />}>
                Logout
              </MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    </HStack>
  );
};

export default HeaderMenu;

import React from "react";
import { Flex, FlexProps, Spacer } from "@chakra-ui/react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

const CenterPageContainer: React.FC<FlexProps> = ({ children, ...rest }) => {
  return (
    <Flex direction="column" minH="100vh" px={[4, 6, 10]}>
      <Header />
      <Flex direction="column" w="100%" alignItems="center" mt="4" {...rest}>
        {children}
      </Flex>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default CenterPageContainer;

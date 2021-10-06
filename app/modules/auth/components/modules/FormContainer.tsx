import React from "react";
import { Box, VStack, StackProps } from "@chakra-ui/react";

const FormContainer: React.FC<StackProps> = ({ children, ...rest }) => {
  return (
    <Box
      borderRadius="2xl"
      borderColor="#BDBDBD"
      borderWidth={["0", "2px"]}
      w={["2xs", "md", "lg"]}
      p={["0", "12"]}
      my={["4", "12"]}
    >
      <VStack spacing={7} {...rest}>
        {children}
      </VStack>
    </Box>
  );
};

export default FormContainer;

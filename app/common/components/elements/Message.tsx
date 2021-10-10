import React from "react";
import { Heading, HeadingProps } from "@chakra-ui/react";

interface Props {
  message: string;
}

const Message: React.FC<HeadingProps & Props> = ({ message, ...rest }) => {
  return (
    <Heading size="lg" as="h2" {...rest}>
      {message}
    </Heading>
  );
};

export default Message;

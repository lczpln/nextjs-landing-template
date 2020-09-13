import React from "react";

import { HeadingProps, Heading } from "@chakra-ui/core";

const Title: React.FC<HeadingProps> = (props) => {
  const { children, fontSize, ...rest } = props;

  return (
    <Heading
      {...rest}
      fontSize={
        typeof fontSize === "number" ? [fontSize - 3, fontSize - 2, fontSize - 1, fontSize] : fontSize
      }
    >
      {children}
    </Heading>
  );
};

export default Title;

import React from "react";

import { BoxProps, Text } from "@chakra-ui/core";

const Paragraph: React.FC<BoxProps & { fontSize: number }> = (props) => {
  const { children, fontSize, ...rest } = props;

  return (
    <Text
      {...rest}
      fontSize={
        typeof fontSize === "number" ? [fontSize - 3, fontSize - 2, fontSize - 1, fontSize] : fontSize
      }
    >
      {children}
    </Text>
  );
};

export default Paragraph;

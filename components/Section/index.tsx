import React from "react";
import { Box, BoxProps, Flex, FlexProps } from "@chakra-ui/core";

import { defaultPaddingX, defaultPaddingY, layoutSize } from "../../styles/theme";

interface IProps {
  outerStyles?: FlexProps;
  innerStyles?: FlexProps;
}

const Section: React.FC<IProps> = (props) => {
  const { children, outerStyles, innerStyles } = props;

  return (
    <section>
      <Flex align="center" px={defaultPaddingX} py={defaultPaddingY} {...outerStyles}>
        <Flex mx="auto" h="100%" w="100%" maxW={layoutSize} {...innerStyles}>
          {children}
        </Flex>
      </Flex>
    </section>
  );
};

export default Section;

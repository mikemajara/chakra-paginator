import React from "react";
import { Flex, FlexProps, forwardRef } from "@chakra-ui/core";

export const PageGroup = forwardRef<FlexProps, "ol">(
  ({ children, ...flexProps }, ref) => (
    <Flex ref={ref} as="ol" {...flexProps}>
      {children}
    </Flex>
  )
);

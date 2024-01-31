import { FC } from "react";
import {
  Heading as ChakraHeading,
  HeadingProps as ChakraHeadingProps,
} from "@chakra-ui/react";

export type HeadingProps = Pick<ChakraHeadingProps, "key" | "children">;

export const Heading: FC<HeadingProps> = (props) => (
  <ChakraHeading {...props} />
);

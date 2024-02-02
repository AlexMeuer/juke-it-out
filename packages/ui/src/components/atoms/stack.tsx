import { FC } from "react";
import {
  Stack as ChakraStack,
  StackProps as ChakraStackProps,
} from "@chakra-ui/react";

export type StackProps = Pick<
  ChakraStackProps,
  "key" | "direction" | "children"
>;

export const Stack: FC<StackProps> = (props) => <ChakraStack {...props} />;

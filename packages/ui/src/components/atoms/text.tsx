import { FC } from "react";
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from "@chakra-ui/react";

export type TextProps = Pick<ChakraTextProps, "key" | "children">;

export const Text: FC<TextProps> = (props) => <ChakraText {...props} />;

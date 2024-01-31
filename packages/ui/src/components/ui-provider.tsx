import { FC, ReactNode } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export type UIProviderProps = {
  children: ReactNode;
};

const theme = extendTheme({});

export const UIProvider: FC<UIProviderProps> = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

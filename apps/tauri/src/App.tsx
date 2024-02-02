import { FC } from "react";
import reactLogo from "./assets/react.svg";
import { Heading, Stack } from "@repo/ui";

export const App: FC = () => {
  return (
    <Stack direction="column">
      <Heading>Welcome to Tauri!</Heading>

      <Stack direction="row">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo vite" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </Stack>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>
    </Stack>
  );
};

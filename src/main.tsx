import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import { mode } from "@chakra-ui/theme-tools";

import "./index.css";
import Loading from "./Loading.tsx";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#D1E9F6", "black")(props),
    },
  }),
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({ styles, config });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </Suspense>
  </React.StrictMode>
);

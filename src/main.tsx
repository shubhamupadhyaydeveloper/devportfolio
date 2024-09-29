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
      bg: mode("#EEF7FF", "black")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
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

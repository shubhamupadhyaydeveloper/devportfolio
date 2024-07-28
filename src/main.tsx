import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import App from "./App.tsx";

import "./index.css";
import Loading from "./Loading.tsx";

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <Suspense fallback={<Loading />}>
   <ChakraProvider theme={theme}>
      <App />
   </ChakraProvider>
   </Suspense>
  </React.StrictMode>
);

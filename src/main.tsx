import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import Loading from "./Loading.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <Suspense fallback={<Loading />}>
      <App />
   </Suspense>
  </React.StrictMode>
);

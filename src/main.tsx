import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: "bottom-right" } }}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

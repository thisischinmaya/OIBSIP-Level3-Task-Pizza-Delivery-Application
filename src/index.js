import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import store from "./Utils/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
  fonts: {
    font: `'montserrat'`,
  },
});
root.render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
);

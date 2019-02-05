import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./bootstrap";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import DefaultTheme from "./theme.json";
import configureStore, { history } from "./configureStore";

const store = configureStore();

const theme = createMuiTheme(DefaultTheme);

ReactDOM.render(
  <Provider store={store}>
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App history={history} />
      </ThemeProvider>
    </>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

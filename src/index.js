import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import "./bootstrap";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import rootReducer from "./redux";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import DefaultTheme from "./theme.json";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const theme = createMuiTheme(DefaultTheme);

ReactDOM.render(
  <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.Fragment>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

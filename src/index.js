import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import rootReducer from "./redux";
import "./index.css";
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
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./bootstrap";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import DefaultTheme from "./theme.json";
import configureStore, { history } from "./configureStore";

const store = configureStore();

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const theme = createMuiTheme(DefaultTheme);

ReactDOM.render(
  <Provider store={store}>
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <App history={history} />
        </ApolloProvider>
      </ThemeProvider>
    </>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

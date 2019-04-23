import React from "react";
// import { shallow } from "enzyme";
import {
  render,
  fireEvent,
  cleanup,
  waitForElement
} from "react-testing-library";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import SUT from "./HelloEarthlings";

const theme = createMuiTheme();

afterEach(cleanup);

test("HelloEarthlings: should render a modal when the login button is clicked", async () => {
  const { getByTestId, getByText, asFragment } = render(
    <ThemeProvider theme={theme}>
      <SUT />
    </ThemeProvider>
  );

  const loginBtn = await waitForElement(() => getByText(/login/i));

  expect(asFragment()).toMatchSnapshot();

  fireEvent.click(loginBtn);

  const loginModal = await waitForElement(() => getByTestId("loginModal"));

  expect(loginModal).toBeDefined();
});

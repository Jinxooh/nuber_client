import * as React from "react";
import { graphql } from "react-apollo";
import theme from "../../theme";
import {  ThemeProvider } from '../../typed-components';
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";


const AppContainers = ({ data }) => (
  <ThemeProvider theme={theme}>
    <AppPresenter isLoggedIn={data.auth.isLoggedIn} />
  </ThemeProvider>
);

export default graphql(IS_LOGGED_IN)(AppContainers);

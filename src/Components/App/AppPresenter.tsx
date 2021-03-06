import * as PropTypes from "prop-types";
import * as React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from "../../Routes/Login";
import PhoneLogin from "../../Routes/PhoneLogin";
import Home from "../../Routes/Home";
import VerifyPhone from "../../Routes/VerifyPhone";
import SocialLogin from "../../Routes/SocialLogin";
import Ride from "../../Routes/Ride";
import EditAccount from "../../Routes/EditAccount";
import Settings from "../../Routes/Settings";
import Places from "../../Routes/Places";
import AddPlace from "../../Routes/AddPlace";
import FindAddress from "../../Routes/FindAddress";

interface IProps {
  isLoggedIn: boolean;
}

const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (<BrowserRouter>{ isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</BrowserRouter>)

const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Login} />
    <Route path={'/phone-login'} component={PhoneLogin} />
    <Route path={'/verify-phone'} component={VerifyPhone} />
    <Route path={'/social-login'} component={SocialLogin} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
)

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path={'/'} exact={true} component={Home} />
    <Route path={'/ride'} component={Ride} />
    <Route path={'/edit-account'} component={EditAccount} />
    <Route path={'/settings'} component={Settings} />
    <Route path={'/places'} component={Places} />
    <Route path={'/add-place'} component={AddPlace} />
    <Route path={'/find-address'} component={FindAddress} />
    <Redirect from={'*'} to={'/'} />
  </Switch>
)


AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;

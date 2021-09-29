import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Signup, Signin } from "../views/auth/";

const AuthNavigation = () => {
  return (
    <Switch>
      <Route path="/auth" component={Signin} />
      {/* <Route path="/sign-up" component={Signup} /> */}
      <Route exact path="/">
        <Redirect to="/auth" />
      </Route>
      <Route>
        <Signin />
      </Route>
    </Switch>
  );
};

export default AuthNavigation;

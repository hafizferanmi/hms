import React from "react";
import { Router, Redirect } from "@reach/router";
import AuthRoute from "./components/misc/AuthRoute";
import LoginPage from "./components/Auth/LoginPage";
import PerfectScrollBar from "react-perfect-scrollbar";
import { checkIsTokenExpired } from "./helpers/api";

const NotfoundPage = () => <div>Page not found</div>;

const isTokenExpired = checkIsTokenExpired();
console.log(isTokenExpired, "isTokenExpired");

const App = () => {
  return (
    <PerfectScrollBar>
      <Router>
        <LoginPage path="/" />
        {isTokenExpired ? (
          <Redirect to="/home" from="/" />
        ) : (
          <AuthRoute path="/secure/*" />
        )}
        <NotfoundPage default />
      </Router>
    </PerfectScrollBar>
  );
};

export default App;

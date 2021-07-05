import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
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
        <AuthRoute path="/secure/*" />
        <NotfoundPage default />
      </Router>
    </PerfectScrollBar>
  );
};

export default App;

import React from "react";
import { Router } from "@reach/router";
import AuthRoute from "./components/misc/AuthRoute";
import LoginPage from "./components/Auth/LoginPage";
import PerfectScrollBar from "react-perfect-scrollbar";

const NotfoundPage = () => <div>Page not found</div>;

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

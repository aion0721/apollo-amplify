import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";
import Target from "./components/Target";
import Sns from "./components/Sns";
import Notification from "./components/Notification";
import Auth from "./Auth";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

Amplify.configure(awsconfig);

// serviceWorker
//import { register } from "./serviceWorker";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={rootRedirect} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/target" component={Target} />
        <Route exact path="/sns" component={Sns} />
        <Route exact path="/notification" component={Notification} />
        <Redirect from="/" to="/target" />
      </Switch>
      <Footer />
    </Router>
  );
}

const rootRedirect = () => <Redirect to={"/target"} />;

//register();

export default withAuthenticator(App, true);

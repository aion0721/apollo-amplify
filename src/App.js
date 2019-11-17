import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Target from "./components/Target";
import Sns from "./components/Sns";
import Notification from "./components/Notification";
//import Auth from "./Auth";

import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { Auth } from "aws-amplify";

import tst from "./components/tst";

import { ServiceWorker } from "aws-amplify";

// serviceWorker
//import { register } from "./serviceWorker";

Amplify.configure(awsconfig);

const serviceWorker = new ServiceWorker();

const signUpConfig = {
  header: "Sign Up for Apollo",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "UserId (MailAddress)",
      key: "username",
      required: "true",
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: "true",
      displayOrder: 2,
      type: "password"
    }
  ]
};

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={rootRedirect} />
        <Route exact path="/logout" component={logOutApp} />
        <Route exact path="/target" component={Target} />
        <Route exact path="/sns" component={Sns} />
        <Route exact path="/tst" component={tst} />
        <Route exact path="/notification" component={Notification} />
        <Redirect from="/" to="/target" />
      </Switch>
      <Footer />
    </Router>
  );
}

const rootRedirect = () => <Redirect to={"/target"} />;

const logOutApp = () => {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
};

serviceWorker.register("/service-worker.js", "/");
//register();

export default withAuthenticator(App, { signUpConfig });

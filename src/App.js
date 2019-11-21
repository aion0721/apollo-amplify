import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/organisms/Header";

import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

import { ServiceWorker } from "aws-amplify";

import logout from "./components/pages/Logout";

import confirmprofile from "./components/templates/confirmprofile";
import confirmprofileother from "./components/templates/confirmprofileother";
import goukakuki from "./components/templates/goukakuki";
import jissekikannri from "./components/templates/jissekikannri";
import snsOverview from "./components/templates/snsOverview";
import jissekisyousai from "./components/templates/jissekisyousai";
import jissekitouroku from "./components/templates/jissekitouroku";
import mokuhyouichirann from "./components/templates/mokuhyouichirann";
import mokuhyoukannri from "./components/templates/mokuhyoukannri";
import notification from "./components/templates/notification";
import profile from "./components/templates/profile";
import resistersns from "./components/templates/resistersns";
import sinncyokukannri from "./components/templates/sinncyokukannri";
import targetRegistry from "./components/templates/targetRegistry";

import { makeStyles } from "@material-ui/core/styles";

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

const useStyles = makeStyles(theme => ({
  root: {
    margin: "0",
    padding: "0",
    width: "100%",
    height: "100%"
  },
  contents: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
    width: "100%",
    padding: "100"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.contents}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/confirmprofile" component={confirmprofile} />
            <Route
              exact
              path="/confirmprofileother"
              component={confirmprofileother}
            />
            <Route exact path="/goukakuki" component={goukakuki} />
            <Route exact path="/jissekikannri" component={jissekikannri} />
            <Route exact path="/jissekisyousai" component={jissekisyousai} />
            <Route exact path="/jissekitouroku" component={jissekitouroku} />
            <Route
              exact
              path="/mokuhyouichirann"
              component={mokuhyouichirann}
            />
            <Route exact path="/mokuhyoukannri" component={mokuhyoukannri} />
            <Route exact path="/notification" component={notification} />
            <Route exact path="/profile" component={profile} />
            <Route exact path="/resistersns" component={resistersns} />
            <Route exact path="/snsOverview" component={snsOverview} />
            <Route exact path="/targetRegistry" component={targetRegistry} />
            <Route exact path="/sinncyokukannri" component={sinncyokukannri} />
            <Route exact path="/" component={mokuhyouichirann} />
            <Route exact path="/logout" component={logout} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

serviceWorker.register("/service-worker.js", "/");
//register();

export default withAuthenticator(App, { signUpConfig });

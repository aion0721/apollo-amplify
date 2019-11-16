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

// serviceWorker
import { register } from "./serviceWorker";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Auth>
          <Header />
          <Switch>
            <Route exact path="/target" component={Target} />
            <Route exact path="/sns" component={Sns} />
            <Route exact path="/notification" component={Notification} />
            <Redirect from="/" to="/target" />
          </Switch>
          <Footer />
        </Auth>
      </Switch>
    </Router>
  );
}

register();

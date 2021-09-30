import React from 'react';
import { Router } from "react-router-dom";
import { Route, Switch } from 'react-router';
import { createBrowserHistory } from "history";
import './App.css';

import {ApplicationProvider} from "./providers/ApplicationProvider";
import TopErrorBoundary from "./components/errors/TopErrorBoundary";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import SignInCallback from "./components/auth/SignInCallback";
import SilentRenew from "./components/auth/SilentRenew";
import SignOutCallback from "./components/auth/SignOutCallback";

const history = createBrowserHistory();

function App() {
  return (
    <TopErrorBoundary>
      <ApplicationProvider>
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/oidc-callback" component={SignInCallback} />
            <Route path="/oidc-signout-callback" component={SignOutCallback} />
            <Route path="/oidc-silent-renew" component={SilentRenew} />
            <Route path="/sign-in" component={Home} />
            <Route path="/sign-out" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApplicationProvider>
    </TopErrorBoundary>
  );
}

export default App;

import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./components/pages/Login";
import NotFound from './components/pages/NotFound';
import App from './App';

const Page = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default Page;
import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from "./components/pages/Login";
import NotFound from './components/pages/NotFound';
import App from './App';
import Form from '../src/components/common/form';

import 'antd/dist/antd.css'

const Page = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/app" component={App} />
        <Route path="/form" component={Form} />
        <Route component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

export default Page;
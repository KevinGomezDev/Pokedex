import React from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from '../enhancers/PrivateRoute';

import Home from '../containers/Home';
import Login from '../containers/Login';
import Pokemon from '../views/Pokemon';
import SignUp from '../containers/SignUp';

function Routes () {
  return <React.Fragment>
    <PrivateRoute exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/sign-up" component={SignUp} />
    <PrivateRoute exact path="/pokemon/:id" component={Pokemon} />
  </React.Fragment>
}

export default Routes;

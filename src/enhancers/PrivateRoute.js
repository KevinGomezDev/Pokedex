import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  user: state.user,
});

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = rest;
  return <Route 
      {...rest}
      render={(props) => {
      return !!Object.keys(user).length
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
      }}
    />
}

export default connect(mapStateToProps)(PrivateRoute);
import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import LoadingBar from 'components/LoadingBar';
import { selectIsAuthenticated } from 'selectors/auth/general.selector';
import PrivateRoute from './PrivateRoute';

import routes from './data';

class Routes extends React.Component{

  render(){
    const {props} = this
    return (
      <Suspense fallback={<LoadingBar />}>
        <Switch>
          {routes.map((route, idx) =>
            route.type === 'public' ? (
              <Route key={`${route.path}_${idx}`} {...route} />
            ) : (
              <PrivateRoute
                key={`${route.path}_${idx}`}
                redirectTo={route.redirectTo}
                isAuthorized={props.isAuthorized}
                {...route}
              />
            )
          )}
        </Switch>
      </Suspense>
    );
  }
}

const mapSateToProps = state =>({
  isAuthorized: selectIsAuthenticated(state),
})
    
export default connect(mapSateToProps)(Routes);

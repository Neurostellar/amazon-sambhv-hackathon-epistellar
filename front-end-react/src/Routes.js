import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';

// Pages
import Welcome from './containers/Welcome';
import Login from './containers/Login';
import Home from './containers/Home';
import NotFound from './containers/NotFound';

export default ({ childProps }) => (
	<Switch>
		<AppliedRoute path="/" exact component={Welcome} props={childProps} />
		<AppliedRoute path="/Home" exact component={Home} props={childProps} />
		<AppliedRoute path="/login" exact component={Login} props={childProps} />
		<Route component={NotFound} />
	</Switch>
);

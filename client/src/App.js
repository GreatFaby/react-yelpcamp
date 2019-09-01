import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Campgrounds from './components/Campgrounds/Campgrounds';
import Landing from './components/Landing/Landing';
// import Spinner from '../../../components/UI/Spinner/Spinner';

const Login = React.lazy(() => {
  return import('./containers/Login/Login');
});

const Logout = React.lazy(() => {
  return import('./containers/Logout/Logout');
});

const Register = React.lazy(() => {
  return import('./containers/Register/Register');
});

const New = React.lazy(() => {
  return import('./containers/NewCampgrounds/New');
});

const Show = React.lazy(() => {
  return import('./components/Campgrounds/Show/Show');
});

const Edit = React.lazy(() => {
  return import('./components/Campgrounds/Edit/Edit');
});

function App() {
  let routes = (
    <Switch>
      <Route path="/login" render={props => <Login {...props} />} />
      <Route path="/logout" render={props => <Logout {...props} />} />
      <Route path="/register" render={props => <Register {...props} />} />
      <Route
        path="/campgrounds"
        exact
        render={props => <Campgrounds {...props} />}
      />
      <Route path="/campgrounds/new" render={props => <New {...props} />} />
      <Route
        path="/campgrounds/:id/edit"
        render={props => <Edit {...props} />}
      />
      <Route
        path="/campgrounds/:id"
        exact
        render={props => <Show {...props} />}
      />
      <Route path="/" exact component={Landing} />
    </Switch>
  );

  return (
    <div>
      <Layout />
      <Suspense fallback={<p>Just a moment...</p>}>{routes}</Suspense>
    </div>
  );
}

export default App;

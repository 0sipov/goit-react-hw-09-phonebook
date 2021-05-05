import React, { Component, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import operations from '../../redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';

const HomeView = lazy(() =>
  import('../../views/HomeView' /* webpackChunkName: "HomeView" */),
);
const ContactsView = lazy(() =>
  import('../../views/ContactsView' /* webpackChunkName: "ContactsView" */),
);
const LoginView = lazy(() =>
  import('../../views/LoginView' /* webpackChunkName: "LoginView" */),
);
const RegistrationView = lazy(() =>
  import(
    '../../views/RegistrationView' /* webpackChunkName: "RegistrationView" */
  ),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense
          fallback={
            <Spinner
              animation="border"
              variant="primary"
              style={{ position: 'absolute', left: '50%', top: '50%' }}
            />
          }
        >
          <Switch>
            <Route exact path="/" component={HomeView}></Route>
            <PrivateRoute
              path="/contacts"
              component={ContactsView}
              redirectTo="/login"
            ></PrivateRoute>
            <PublicRoute
              path="/login"
              component={LoginView}
              redirectTo="/contacts"
              restricted
            ></PublicRoute>
            <PublicRoute
              path="/registration"
              component={RegistrationView}
              redirectTo="/contacts"
              restricted
            ></PublicRoute>
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: operations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

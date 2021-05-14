import React, { lazy, Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import operations from '../../redux/auth/auth-operations';
import { connect, useDispatch } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Spinner } from 'react-bootstrap';
import styles from './App.module.css';

const HomeView = lazy(() =>
  import('../../views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const ContactsView = lazy(() =>
  import(
    '../../views/ContactsView/ContactsView' /* webpackChunkName: "ContactsView" */
  ),
);
const LoginView = lazy(() =>
  import('../../views/LoginView/LoginView' /* webpackChunkName: "LoginView" */),
);
const RegistrationView = lazy(() =>
  import(
    '../../views/RegistrationView/RegistrationView' /* webpackChunkName: "RegistrationView" */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      <AppBar />
      <Suspense
        fallback={
          <Spinner
            animation="border"
            variant="primary"
            className={styles.spinnerPosition}
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

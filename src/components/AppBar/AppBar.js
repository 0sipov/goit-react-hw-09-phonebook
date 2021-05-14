import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { useSelector } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import { Navbar } from 'react-bootstrap';

export default function AppBar() {
  const isAuthorization = useSelector(state =>
    selectors.getIsAuthorization(state),
  );
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navigation />
        {isAuthorization ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
}

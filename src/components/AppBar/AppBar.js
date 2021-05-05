import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import { Navbar } from 'react-bootstrap';

const AppBar = ({ isAuthorization }) => {
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Navigation />
        {isAuthorization ? <UserMenu /> : <AuthNav />}
      </Navbar>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    isAuthorization: selectors.getIsAuthorization(state),
  };
};

export default connect(mapStateToProps, null)(AppBar);

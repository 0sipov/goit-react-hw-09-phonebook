import React from 'react';
import { connect } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Button, Toast } from 'react-bootstrap';
import styles from './UserMenu.module.css';

const UserMenu = ({ onLogout, userName }) => {
  return (
    <>
      <Toast className="mr-auto mb-auto mt-auto">
        <Toast.Body className={styles.Toast}>Wellcome, {userName}!</Toast.Body>
      </Toast>

      <Button onClick={onLogout}>Logout</Button>
    </>
  );
};

const mapStateToProps = state => ({
  userName: selectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Button, Toast } from 'react-bootstrap';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const userName = useSelector(state => selectors.getUserName(state));
  return (
    <>
      <Toast className="mr-auto mb-auto mt-auto">
        <Toast.Body className={styles.Toast}>Wellcome, {userName}!</Toast.Body>
      </Toast>

      <Button onClick={() => dispatch(operations.logout())}>Logout</Button>
    </>
  );
}

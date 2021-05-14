import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import { Form, Button, Alert } from 'react-bootstrap';
import validation from '../../utilities/form_validaion';
import styles from './RegistrationView.module.css';

export default function RegistrationView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'name':
        setName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      validation.isEmptyString(email, name, password) ||
      !validation.isPassValid(password)
    ) {
      return;
    }
    dispatch(operations.register({ email, name, password }));
  };
  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.loginForm}
    >
      <Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          value={email}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Enter your name"
          onChange={handleChange}
          value={name}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={password}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.loginButton}>
        Submit
      </Button>
      {validation.isEmptyString(email, name, password) && (
        <Alert variant="danger" className={styles.alert}>
          <p>Fill in all the fields, please</p>
        </Alert>
      )}
    </Form>
  );
}

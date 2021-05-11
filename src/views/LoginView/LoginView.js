import React, { useState } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/auth/auth-operations';
import { Form, Button } from 'react-bootstrap';
import styles from './LoginView.module.css';

const LoginView = props => {
  // const { onLogIn } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  console.log(props.onLogin);
  const handleSubmit = e => {
    e.preventDefault();
    props.onLogin({ email, password });
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
    </Form>
  );
};

const mapDispatchToProps = {
  onLogin: operations.login,
};

export default connect(null, mapDispatchToProps)(LoginView);

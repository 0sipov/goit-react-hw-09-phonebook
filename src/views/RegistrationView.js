import React, { Component } from 'react';
import { connect } from 'react-redux';
import operations from '../redux/auth/auth-operations';
import { Form, Button } from 'react-bootstrap';
import styles from './RegistrationView.module.css';

class RegistrationView extends Component {
  state = {
    email: '',
    name: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    return this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
  };

  render() {
    const { email, name, password } = this.state;
    return (
      <Form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={styles.loginForm}
      >
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={e => this.handleChange(e)}
            value={email}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={e => this.handleChange(e)}
            value={name}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => this.handleChange(e)}
            value={password}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className={styles.loginButton}>
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = {
  onRegister: operations.register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);

import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

export default function AuthNav() {
  return (
    <Nav>
      <LinkContainer to="/login" exact>
        <Nav.Link>Login</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/registration" exact>
        <Nav.Link>Registration</Nav.Link>
      </LinkContainer>
    </Nav>
  );
}

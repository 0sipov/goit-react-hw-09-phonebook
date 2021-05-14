import React from 'react';
import { useSelector } from 'react-redux';
import selectors from '../../redux/auth/auth-selectors';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav } from 'react-bootstrap';

export default function Navigation() {
  const isAuthorization = useSelector(state =>
    selectors.getIsAuthorization(state),
  );
  return (
    <Nav className="mr-auto mb-auto mt-auto">
      <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      {isAuthorization && (
        <LinkContainer to="/contacts">
          <Nav.Link className="mb-auto mt-auto">Contacts</Nav.Link>
        </LinkContainer>
      )}
    </Nav>
  );
}

import React, { useEffect } from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeContact,
  fetchContacts,
} from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Spinner, Button } from 'react-bootstrap';

export default function ContactList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => contactsSelectors.getLoading(state));
  const filtredContacts = useSelector(state =>
    contactsSelectors.getFiltredContacts(state),
  );
  useEffect(() => dispatch(fetchContacts()), [dispatch]);
  return (
    <ul className={styles.contacts}>
      {filtredContacts.map(elem => {
        return (
          <li className={styles.contact} key={elem.id}>
            <p>
              {elem.name}: {elem.number}
            </p>
            <Button
              className={styles.removeButton}
              type="button"
              onClick={() => {
                dispatch(removeContact(elem.id));
              }}
            >
              {isLoading ? (
                <Spinner animation="border" variant="light" size="sm" />
              ) : (
                'Delete'
              )}
            </Button>
          </li>
        );
      })}
    </ul>
  );
}

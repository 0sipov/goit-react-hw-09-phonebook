import React from 'react';
import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterUpdate } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form } from 'react-bootstrap';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => contactsSelectors.getFilter(state));
  return (
    <Form
      autoComplete="off"
      className={`mt-4 ml-auto mr-auto + ${styles.form}`}
    >
      <Form.Group>
        <Form.Label>Start typing contact name:</Form.Label>
        <Form.Control
          className={styles.input}
          name="filter"
          type="text"
          value={filter}
          onChange={e => dispatch(filterUpdate(e.target.value))}
          placeholder="Name or Surname"
        />
      </Form.Group>
    </Form>
  );
}

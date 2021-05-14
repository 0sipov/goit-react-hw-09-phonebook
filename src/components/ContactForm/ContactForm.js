import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form, Button, Alert } from 'react-bootstrap';
import validation from '../../utilities/form_validaion';

export default function ContactForm() {
  const items = useSelector(state => contactsSelectors.getItems(state));
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (validation.isEmptyString(name, number)) {
      return;
    }
    const clearContactInput = () => {
      setName('');
      setNumber('');
    };
    const isContainName = name => {
      name = name.toLowerCase();
      return items.find(e => e.name.toLowerCase() === name);
    };
    isContainName(name)
      ? alert(`Contact ${name} already exists.`)
      : dispatch(createContact({ name, number }));
    clearContactInput();
  };
  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={'mt-4 ml-auto mr-auto ' + styles.form}
    >
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          className={styles.input}
          name="name"
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Name Surname"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Number</Form.Label>
        <Form.Control
          className={styles.input}
          name="number"
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="(+380) 00-000-00-00"
        />
      </Form.Group>
      <Button variant="primary" type="submit" className={styles.button}>
        Add contact
      </Button>
    </Form>
  );
}

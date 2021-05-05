import React from 'react';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import styles from './ContactsView.module.css';

const ContactsView = () => {
  return (
    <div>
      <h1 className={styles.title}>Phone book</h1>
      <ContactForm className="ml-auto mr-auto" />
      <h2 className={styles.title}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsView;

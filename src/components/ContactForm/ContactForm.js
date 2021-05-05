import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createContact } from '../../redux/contacts/contacts-operations';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    contact: { name: '', number: '' },
  };

  handleChange = e => {
    this.setState(preState => {
      return {
        contact: { ...preState.contact, [e.target.name]: e.target.value },
      };
    });
  };

  isContainName = name => {
    name = name.toLowerCase();
    return this.props.items.find(e => e.name.toLowerCase() === name);
  };

  clearContactInput = () =>
    this.setState({ contact: { name: '', number: '' } });

  handleSubmit = e => {
    const { onCreateContact } = this.props;
    const { contact } = this.state;
    e.preventDefault();
    this.isContainName(contact.name)
      ? alert(`Contact ${contact.name} already exists.`)
      : onCreateContact(contact);
    this.clearContactInput();
  };

  render() {
    const { contact } = this.state;
    const { handleChange } = this;
    return (
      <Form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className={'mt-4 ml-auto mr-auto ' + styles.form}
      >
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            className={styles.input}
            name="name"
            type="text"
            value={contact.name}
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
            value={contact.number}
            onChange={handleChange}
            placeholder="(+380) 00-000-00-00"
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ display: 'block', margin: 'auto' }}
        >
          Add contact
        </Button>
      </Form>
      // <form className={styles.form} onSubmit={this.handleSubmit}>
      //   <label>
      //     Name
      //     <input
      // className={styles.input}
      // name="name"
      // type="text"
      // value={contact.name}
      // onChange={handleChange}
      //     />
      //   </label>
      //   <label>
      //     Number
      //     <input
      // className={styles.input}
      // name="number"
      // type="text"
      // value={contact.number}
      // onChange={handleChange}
      //     />
      //   </label>
      //   <button className={styles.addButton} type="submit">
      //     Add contact
      //   </button>
      // </form>
    );
  }
}

const mapStateToProps = state => ({
  items: contactsSelectors.getItems(state),
});

const mapDispatchToProps = dispatch => {
  return { onCreateContact: contact => dispatch(createContact(contact)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onCreateContact: PropTypes.func,
};

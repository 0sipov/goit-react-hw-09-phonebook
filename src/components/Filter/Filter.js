import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterUpdate } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form } from 'react-bootstrap';

const Filter = props => {
  const { filterUpdate, filter } = props;
  return (
    <Form
      autoComplete="off"
      className="mt-4 ml-auto mr-auto"
      style={{ maxWidth: 350 }}
    >
      <Form.Group>
        <Form.Label>Start typing contact name:</Form.Label>
        <Form.Control
          className={styles.input}
          name="filter"
          type="text"
          value={filter}
          onChange={e => filterUpdate(e.target.value)}
          placeHolder="Name or Surname"
        />
      </Form.Group>
    </Form>

    // <label>
    //   Find contacts by name
    //   <input
    // className={styles.input}
    // name="filter"
    // type="text"
    // value={filter}
    // onChange={e => filterUpdate(e.target.value)}
    //   />
    // </label>
  );
};

const mapStateToProps = state => ({
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => {
  return { filterUpdate: contactName => dispatch(filterUpdate(contactName)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};

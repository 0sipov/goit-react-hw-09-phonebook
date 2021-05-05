import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());
  try {
    const { data } = await axios.get('/contacts');
    return dispatch(fetchContactsSuccess(data));
  } catch (error) {
    return dispatch(fetchContactsError(error));
  }
};

export const createContact = contact => async dispatch => {
  dispatch(addContactRequest());
  try {
    const { data } = await axios.post('/contacts', contact);
    return dispatch(addContactSuccess(data));
  } catch (error) {
    return dispatch(addContactError(error));
  }
};

export const removeContact = id => async dispatch => {
  dispatch(removeContactRequest());
  try {
    await axios.delete(`contacts/${id}`);
    return dispatch(removeContactSuccess(id));
  } catch (error) {
    return dispatch(removeContactError(error));
  }
};

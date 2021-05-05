import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getItems = state => state.contacts.items;

const getFiltredContacts = createSelector(
  [getFilter, getItems],
  (filter, items) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export default {
  getLoading,
  getFilter,
  getItems,
  getFiltredContacts,
};

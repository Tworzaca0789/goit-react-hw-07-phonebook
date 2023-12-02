import { createSlice } from '@reduxjs/toolkit';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [], // contactsInitialState
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = ContactsSlice.actions;
//{
//   contacts: [],
//   filter: ""
// }

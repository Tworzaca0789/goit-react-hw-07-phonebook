import { configureStore } from '@reduxjs/toolkit';
import { ContactsSlice } from 'redux/contactsSlice/contactsSlice';
import { FilterSlice } from 'redux/filterSlice/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: ContactsSlice.reducer,
    filter: FilterSlice.reducer,
  },
});

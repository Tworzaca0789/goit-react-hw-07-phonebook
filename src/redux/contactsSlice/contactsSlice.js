import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from 'redux/operations/operations';

export const ContactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [], // contactsInitialState
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = ContactsSlice.reducer;

//{
//   contacts: [],
//   filter: ""
// }
// reducers: {
//   addContact(state, action) {
//     state.items.push(action.payload);
//   },
//   deleteContact(state, action) {
//     state.items = state.items.filter(
//       contact => contact.id !== action.payload
//     );
//   },
// },

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchingError,
  fetchingInProgress,
  fetchingSuccess,
} from 'redux/contactsSlice/contactsSlice';

import { BASE_URL } from 'services/ApiMock';

axios.defaults.baseURL = BASE_URL;

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

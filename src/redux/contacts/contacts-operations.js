import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from 'services/contacts-api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const data = await contactsAPI.deleteContact(contactId);

      if (Object.keys(data).length !== 0) {
        return data;
      }

      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const patchContact = createAsyncThunk(
  'contacts/patchContact',
  async (contactwithId, { rejectWithValue }) => {
    try {
      const contactId = contactwithId.id;
      const contact = {
        name: contactwithId.name,
        number: contactwithId.number,
      };

      const data = await contactsAPI.patchContact(contact, contactId);

      // if (Object.keys(data).length !== 0) {
      //   return data;
      // }
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

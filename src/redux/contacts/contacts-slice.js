import {
  fetchContacts,
  deleteContact,
  addContact,
  patchContact,
} from 'redux/contacts/contacts-operations';
const { createSlice } = require('@reduxjs/toolkit');

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], filter: '', loading: false, error: null },
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload.filter;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [addContact.fulfilled](state, action) {
      state.items = action.payload;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = action.payload;
    },
    [patchContact.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
});

export default contactsSlice.reducer;

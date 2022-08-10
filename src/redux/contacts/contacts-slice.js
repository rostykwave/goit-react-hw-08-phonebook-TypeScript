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
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContacts.pending](state, action) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.items = action.payload;
      state.loading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [addContact.pending](state, action) {
      state.loading = true;
    },
    [addContact.fulfilled](state, action) {
      state.items = [...state.items, action.payload];
      state.loading = false;
    },
    [addContact.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteContact.pending](state, action) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
      state.loading = false;
    },
    [deleteContact.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [patchContact.pending](state, action) {
      state.loading = true;
    },
    [patchContact.fulfilled](state, { payload }) {
      state.items = state.items.reduce((acc, contact) => {
        contact.id === payload.id ? acc.push(payload) : acc.push(contact);
        return acc;
      }, []);
      state.loading = false;
    },
    [patchContact.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

// export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;

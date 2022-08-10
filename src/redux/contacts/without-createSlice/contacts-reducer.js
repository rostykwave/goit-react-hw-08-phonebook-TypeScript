// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import { changeFilter } from 'redux/contacts/contacts-actions';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
//   patchContact,
// } from 'redux/contacts/contacts-operations';

// const items = createReducer([], {
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,

//   [addContact.fulfilled]: (state, { payload }) => [...state, payload],

//   [deleteContact.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),

//   [patchContact.fulfilled]: (state, { payload }) =>
//     state.reduce((acc, contact) => {
//       contact.id === payload.id ? acc.push(payload) : acc.push(contact);
//       return acc;
//     }, []),
// });

// const loading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
//   [addContact.pending]: () => true,
//   [addContact.fulfilled]: () => false,
//   [addContact.rejected]: () => false,
//   [deleteContact.pending]: () => true,
//   [deleteContact.fulfilled]: () => false,
//   [deleteContact.rejected]: () => false,
//   [patchContact.pending]: () => true,
//   [patchContact.fulfilled]: () => false,
//   [patchContact.rejected]: () => false,
// });

// const filter = createReducer('', {
//   [changeFilter]: (_, { payload }) => payload,
// });
// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, action) => action.payload,
//   [fetchContacts.pending]: () => null,
//   [addContact.rejected]: (_, action) => action.payload,
//   [addContact.pending]: () => null,
//   [deleteContact.rejected]: (_, action) => action.payload,
//   [deleteContact.pending]: () => null,
//   [patchContact.rejected]: (_, action) => action.payload,
//   [patchContact.pending]: () => null,
// });

// export default combineReducers({
//   items,
//   filter,
//   loading,
//   error,
// });

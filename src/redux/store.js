import { configureStore } from '@reduxjs/toolkit';
import { middleware } from 'redux/storeConfig/middleware';
// import contactsReducer from './contacts/contacts-reducer';
import { authReducer } from './auth';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contacts';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

console.log(contactsReducer);

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware,
});

export { store };
export const persistor = persistStore(store);

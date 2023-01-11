import { configureStore } from '@reduxjs/toolkit';
import { ContactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';



export const rootReducer = combineReducers({
  contact: ContactsReducer,
  filter: filtersReducer,
});

const persistConfig = {
  key: 'contact',
  storage,
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
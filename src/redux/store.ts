import {configureStore} from '@reduxjs/toolkit';
import {REGISTER, persistReducer} from 'redux-persist';
import {persistStore} from 'redux-persist';
import rootReducer from './rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['weather'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default store;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { useDispatch } from 'react-redux';
import user from './user/slice';
import header from './header';

export const store = configureStore({
  reducer: {
    user,
    header,
  },
});

export const wrapper = createWrapper(() => store);
export const storeMain = store;
export type AppState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch();

'use client';

import { createSlice } from '@reduxjs/toolkit';

interface HeaderInitialState {
  data: any,
}

const initialState: HeaderInitialState = {
  data: {
    name: '',
    bussiness: '',
    gamePlan: '',
    gameRequest: '',
  },
};

export const headerSlice = createSlice({
  name: 'headerData',
  initialState,
  reducers: {
    setHeaderMainPlayerData(state, action) {
      state.data = action.payload;
    },
  },
});
export const { setHeaderMainPlayerData } = headerSlice.actions;
export default headerSlice.reducer;

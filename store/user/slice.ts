import { createSlice } from '@reduxjs/toolkit'

interface UserInitialState {
    data: string,
}

const initialState: UserInitialState = {
    data: 'Data from redux store',
  };

const userSlice = createSlice({
    name:"icon",
    initialState,
    reducers:{
         setTestData(state, action) {
            state.data = action.payload;
          },
         iconSun:state=>{
            state.data= 'sun'
        },
       }
    })
    export const { setTestData } = userSlice.actions;
export default userSlice.reducer;
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import  userSlice  from './user/slice'

// create a slice 
// export const iconslice= createSlice({
// name:"icon",
// initialState:{
//      icon:'moon'
// },
// reducers:{
//      iconMoon:state=>{
//         state.icon= 'moon'
//      },
//      iconSun:state=>{
//         state.icon= 'sun'
//     },
//    }
// })


// config the store 
const store= configureStore({
   reducer: {
      user: userSlice
   }
})

// export default the store 
export default store

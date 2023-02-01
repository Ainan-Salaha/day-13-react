import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice= createSlice({
    name:'Counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{  //intial state value which is coming from store.js
            state.value++
        },
        decrement:(state)=>{
            state.value--
            
        },
       

    }
})
export const {increment,decrement}=counterSlice.actions

export default counterSlice.reducer 
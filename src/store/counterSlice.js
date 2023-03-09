
import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name: 'counter',
    initialState:{ counter: 0},
    reducers: {
        increment(state, action){
            state.counter++;
         },
        decrement(state, action){ 
            state.counter--;
         },
         addBy(state, action){
            state.counter += action.payload;
         },
         adddBy(state, action){
            state.counter += action.payload;
         }
    }
})
export const actions = counterSlice.actions;

export default counterSlice
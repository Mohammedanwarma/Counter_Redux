import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment(state,action){
            state.count++
        },
        decrement(state,action){
            state.count--
        },
        reset(state,action){
            state.count=0
        },
        updatebyAmount(state,action){
            state.count+=action.payload
        }
    }

})

export const {increment,decrement,reset,updatebyAmount}=counterSlice.actions
export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}
export const CounterSlice=createSlice({
    name:'counter',//name of the slice
    initialState,//the state variables defined for this slice
    reducers:{//all the slice functionalities are stored inside this object
        increment:(state)=>{state.value+=1},
        decrement:(state)=>{state.value-=1}
    }
});

export default CounterSlice.reducer
export const {increment,decrement}=CounterSlice.actions //to export the functions we have to extract from the actions as all the functionalitries defined inside the slice are bydefault get into actions


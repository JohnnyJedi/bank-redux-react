import {createSlice} from "@reduxjs/toolkit";

const balanceSlice =createSlice({
    name: "account",
    initialState: 0,
    reducers:{
        deposit: (state, action) => {
            return state + action.payload
        },
        withdraw: (state, action) => {
            return ((state - action.payload ) < 0 ? state : state - action.payload);
        }
    }
})

export const {deposit, withdraw} = balanceSlice.actions;
export default balanceSlice.reducer;
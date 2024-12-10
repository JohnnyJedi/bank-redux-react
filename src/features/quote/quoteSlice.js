import {createSlice} from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quote",
    initialState:{
        character: "JON SNOW",
        quote: 'Winter is coming...'
    },
    reducers:{
      putQuote: (state,action) => {
          return ({
              character: action.payload.character,
              quote: action.payload.quote,
          })
      }
    }
})

export const {putQuote} = quoteSlice.actions;
export default quoteSlice.reducer;
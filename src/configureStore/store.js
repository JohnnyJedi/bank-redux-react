
import {accountReducer} from "../reducer/accountReducer.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {loggerEnhancer} from "../enhancers/loggerEnhancer.js";
import {thunkEnhancer} from "../enhancers/thunkEnhancer.js";

const initialState = {
    balance:0,
    character: "JON SNOW",
    quote:'Winter is coming...'
}

export const store = createStore(accountReducer, initialState,applyMiddleware(thunkEnhancer,loggerEnhancer));
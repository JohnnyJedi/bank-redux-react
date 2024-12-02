
import {accountReducer} from "../reducer/accountReducer.js";
import {legacy_createStore as createStore} from "redux";

const initialState = {
    balance:0,
}

export const store = createStore(accountReducer, initialState)
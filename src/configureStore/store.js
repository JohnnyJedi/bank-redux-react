import {accountReducer} from "../reducer/accountReducer.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux";

import {thunk} from "redux-thunk";
import logger from "redux-logger";

const initialState = {
    balance: 0,
    character: "JON SNOW",
    quote: 'Winter is coming...'
}

export const store = createStore(accountReducer, initialState, applyMiddleware(thunk, logger));
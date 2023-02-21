import { columnReducer } from "./column";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    column: columnReducer,
})


export default rootReducer;
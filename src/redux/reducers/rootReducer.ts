import { columnReducer } from "./column";
import { cardReducer } from "./card";
import { commentReducer } from "./comment";
import { userReducer } from './user';
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    column: columnReducer,
    comment: commentReducer,
    card: cardReducer,
    user: userReducer,
})


export default rootReducer;
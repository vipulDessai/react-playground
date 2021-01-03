import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { posts } from "./posts.reducer";

export const rootReducer = combineReducers({
    alert,
    posts,
});
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { rootReducer } from "../_reducers";

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(createLogger(), thunk)),
);
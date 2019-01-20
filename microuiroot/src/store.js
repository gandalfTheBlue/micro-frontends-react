import createHashHistory from "history/createHashHistory";
import { applyMiddleware, compose, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { reducers } from "./reducers";

export const history = createHashHistory();
const store = createStore(reducers, compose(applyMiddleware(reduxThunk)));
export default store;

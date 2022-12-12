import { combineReducers } from "./combineReducers";
import { formReducers } from "../reducers";

export const rootReducers = combineReducers({ formReducers });

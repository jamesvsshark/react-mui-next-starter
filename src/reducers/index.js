import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import sampleReducer from "./sample";

const rootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    sample: sampleReducer
  });

export default rootReducer;

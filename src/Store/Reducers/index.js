import { combineReducers } from "redux";
import authenticationReducer from "./AuthenticationReducer";
const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer
})
export default rootReducer;
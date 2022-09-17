import { combineReducers } from "redux";
import snackBar from "./snackBar";
import manageApis from "./manageApis";

export default combineReducers({ snackBar, manageApis });

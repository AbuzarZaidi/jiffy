import { combineReducers } from "redux";
import snackBar from "./snackBar";
import manageApis from "./manageApis";
import checkLogin from "./checkLogin"
export default combineReducers({ snackBar, manageApis,checkLogin });

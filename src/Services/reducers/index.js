import { combineReducers } from "redux"
import {authReducer} from "./authReducer"
import {searchReducer} from "./searchReducer"
import { SIGN_OUT } from "../actions/auth/types"

const appReducer = combineReducers({
  form:{},
  auth:authReducer,
  search:searchReducer,
})

const initialState = {
  auth:{
    emailId: "",
    userName: "",
    role: "",
    userId: "",
    token:""
  }
}


export const appGlobalReducers = (state={}, action) => {
  switch (action.type) {
  case SIGN_OUT:
    console.log("resetting the entire state to wipe out the state")
    localStorage.setItem("token", "")
    localStorage.setItem("email", "")
    return {...initialState}
  default:
    return appReducer(state, action)
  }
}

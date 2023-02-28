import axios from "axios"
import {store} from "../../store"
import {
  CHECKAUTH_SUCCESS,
  SIGN_OUT,
} from "./types"
import appConfig from "../../../config";

export const checkAuth = async (auth) => {
  try {
    const token = appConfig.authToken() || auth || ""
    if(token){
      const result = await axios.get(`${appConfig.appUrl}/auth/checkauth`, {
        headers: {
          "authorization" : token,
          "Content-Type": "application/json"
        }
      });
      if (result && result.data && result.data.success) {
        store.dispatch({
          type: CHECKAUTH_SUCCESS,
          payload: { ...(result.data && result.data.loginDetails), token }
        });
      } else {
        alert("UnAuthorized person");
        localStorage.removeItem("total");
        localStorage.removeItem("insuranceSum");
        localStorage.removeItem("gpsSum");
        signOut()
      }
    }
  } catch (error) {
    signOut()
  }
}


export const checkMail = async (data) => {
  let result = {};
  try {
    const res = await axios.post(`${appConfig.appUrl}/auth/signin`,data);
    result = res.data || {};
    return { success: true, data: result }
  } catch (err) {
    console.log("error in getting time info : ", err);
    return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
  }
};
export const forgotPassword = async (emailId) => {

  try {
    const res = await axios.post(`${appConfig.appUrl}/auth/forgotpassword`,{emailId});
    return res && res.data
  } catch (err) {
    console.log("error in getting time info : ", err);
    return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
  }
};
export const resetPassword = async (data) => {

  try {
    const res = await axios.post(`${appConfig.appUrl}/auth/resetpassword`,data);
    return res && res.data
  } catch (err) {
    console.log("error in getting time info : ", err);
    return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
  }
};

export const signOut = () => {
  console.log("in action signOut")
  localStorage.setItem("token", "")
  localStorage.setItem("email", "")
  localStorage.clear()
  window.location.href="/login"
  return {
    type: SIGN_OUT
  }
}

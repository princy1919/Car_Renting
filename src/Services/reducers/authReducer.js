import {
  CHECKAUTH_SUCCESS,
  SIGN_OUT
} from "../actions/auth/types"

const initialState = {
  userEmail: "",
}

export const authReducer = (state = initialState, action) => {
  const {payload} = action
  switch (action.type) {
    case CHECKAUTH_SUCCESS:
      return {
        ...state,
        ...payload
      }
    case SIGN_OUT:
      console.log("reducer SIGN_OUT")
      return {...initialState}
    default:
      return state
  }
}

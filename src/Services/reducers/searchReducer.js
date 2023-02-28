import {
    CHECKAUTH_SUCCESS,
    SIGN_OUT
} from "../actions/auth/types"

const initialState = {
    city: "",dropLocation:"",pickUpDate:"",returnDate:"",seat:0,total:0,day:0
};

export const searchReducer = (state = initialState, action) => {
    const {payload} = action;
    switch (action.type) {
        case "SEARCHRESULT":
            return {
                ...state,
                ...payload.data
            };
        default:
            return state
    }
}

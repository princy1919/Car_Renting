import axios from "axios";
import appConfig from "../config";

export const ProfileData = async (id) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/users/profile`, {id});
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};
export const findRentalDetails = async (userId) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/vehicle/find`, {userId});
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};

export const UpdatewProfileData = async (data) => {
    try {
        const res = await axios.put(`${appConfig.appUrl}/api/users/updateprofiledetails/${data._id}`, data);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};


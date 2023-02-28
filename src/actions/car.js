import axios from "axios";
import appConfig from "../config";


export const getCarList = async (query) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/vehicle`, query);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};
export const getCarDetail = async (id) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/vehicle/find`,{id:id});
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};
export const UpdateCarData = async (data) => {
    try {
        const res = await axios.put(`${appConfig.appUrl}/api/vehicle/updatedetails/${data.id}`, data);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};

export const UpdateCarStatus = async (data) => {
    try {
        const res = await axios.put(`${appConfig.appUrl}/api/vehicle/updatestatus/${data.id}`, data);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};
export const DeleteCarData = async (id) => {
    try {
        const res = await axios.delete(`${appConfig.appUrl}/api/vehicle/${id}`);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};


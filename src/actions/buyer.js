import axios from "axios";
import appConfig from "../config";


export const RegisterBuyer = async (query) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/buyer/create`, query);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};
export const getBuyerDetail = async (id) => {
    try {
        const res = await axios.get(`${appConfig.appUrl}/api/buyer/${id}`);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};

export const pdf = async (data) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/buyer/pdf`,
            data,
            {
                headers: {"authorization": `${appConfig.token}`},
                responseType: 'blob'
            })

        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return {success: false, message: (err && err.data && err.data.error) || "something went wrong"}
    }
};
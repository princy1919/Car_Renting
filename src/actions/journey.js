import axios from "axios"
import appConfig from "../config";

export const CreatePost = async (data) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/journey`,data);
        return res && res.data;
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.response.data) || "something went wrong" }
    }
};
export const fetchJourneyPost = async () => {
    try {
        const res = await axios.get(`${appConfig.appUrl}/api/journey`);
        return res && res.data;
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.response.data) || "something went wrong" }
    }
};

export const joinJourney = async (data) => {
    try {
        const res = await axios.put(`${appConfig.appUrl}/api/journey/update/${data.id}`,data);
        return res && res.data;
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.response.data) || "something went wrong" }
    }
};

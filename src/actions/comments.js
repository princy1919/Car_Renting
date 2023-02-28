import axios from "axios";
import appConfig from "../config";

export const PostComment= async (data) => {
    try {
        const res = await axios.post(`${appConfig.appUrl}/api/comments`, data);
        return res && res.data
    } catch (err) {
        console.log("error in getting time info : ", err);
        return { success: false, message: (err && err.data && err.data.error) || "something went wrong" }
    }
};



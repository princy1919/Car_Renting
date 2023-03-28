require("dotenv").config();

const appConfig = {
  appUrl: "https://cr-10lq.onrender.com",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};
export default appConfig;

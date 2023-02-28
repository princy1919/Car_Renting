require("dotenv").config();

const appConfig = {
  appUrl: "http://localhost:8080",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};
export default appConfig;

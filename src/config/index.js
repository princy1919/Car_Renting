require("dotenv").config();

const appConfig = {
  appUrl: "https://car-renting-server.onrender.com",
  token: localStorage.getItem("token") || "",
  authToken: () => localStorage.getItem("token") || "",
};
export default appConfig;

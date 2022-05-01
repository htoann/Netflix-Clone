import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:8800/api/"
      : "https://netflixtht.herokuapp.com/api/",
  headers: {
    token: "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
});

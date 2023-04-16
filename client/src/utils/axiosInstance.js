import axios from "axios";

console.log(process.env)

export const axiosInstance = axios.create({
  baseURL:
    process.env.REACT_APP_API_URL,
  headers: {
    token: "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
});

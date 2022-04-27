import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://netflixtht.herokuapp.com/api/",
});

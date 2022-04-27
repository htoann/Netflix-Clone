import { axios } from "axios";

export const axiosIntance = axios.create({
  baseURL: "https://netflixtht.herokuapp.com/api/",
});

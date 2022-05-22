import axios from "axios";

const defaultOptions = {
  baseURL:
    process.env.NODE_ENV !== "production"
      ? process.env.REACT_APP_LOCAL_HOST
      : process.env.REACT_APP_MY_NETFLIX_HOST,
};

const axiosInstance = axios.create(defaultOptions);

// Set the AUTH token for any request
axiosInstance.interceptors.request.use(function (config) {
  config.headers.token =
    "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken;
  return config;
});

export default axiosInstance;

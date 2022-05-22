import axios from "axios";

const axiosMovie = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: process.env.REACT_APP_API_KEY_MOVIE,
  },
});

export default axiosMovie;

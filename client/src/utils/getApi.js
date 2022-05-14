import { axiosInstance } from "./axiosInstance";
import { toast } from "react-toastify";
import { login } from "../authContext/apiCalls";

export const getRandomLists = async (
  genre,
  setGenre,
  setLists,
  type,
  setIsLoading
) => {
  setIsLoading(true);
  if (genre) {
    setIsLoading(false);
  }
  if (!type) {
    setGenre(null);
    setIsLoading(true);
  }
  try {
    const result = await axiosInstance.get(
      `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`
    );
    setLists(result.data);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const register = async (email, username, password, dispatch) => {
  try {
    await axiosInstance.post("auth/register", {
      email,
      username,
      password,
    });
    await login({ email, password }, dispatch);
    window.location.href = "/";
  } catch (err) {
    toast.error(err.response.data);
  }
};

export const getRandomMovieApi = async (type, setContent) => {
  try {
    const res = await axiosInstance.get(
      `movies/random${type ? "?type=" + type : ""}`
    );
    setContent(res.data[0]);
  } catch (err) {
    console.log(err);
  }
};

export const getMovieApi = async (item, setMovie) => {
  try {
    const res = await axiosInstance.get("movies/find/" + item);
    setMovie(res.data);
  } catch (err) {
    console.log(err);
  }
};

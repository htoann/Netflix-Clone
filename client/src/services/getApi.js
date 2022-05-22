import { toast } from "react-toastify";
import { login } from "../authContext/apiCalls";
import { getRandomInt } from "../utils";
import axiosInstance from "./axiosInstance";
import axiosMovie from "./axiosMovie";

export const register = async (email, username, password, dispatch) => {
  try {
    await axiosInstance.post("auth/register", {
      email,
      username,
      password,
    });
    await login({ email, password }, dispatch);
  } catch (err) {
    toast.error(err.response.data);
  }
};

export const getRandomMovie = async (setContent) => {
  const random = getRandomInt(0, 19);
  try {
    const res = await axiosMovie.get("trending/all/week");
    setContent(res.data.results[random]);
  } catch (err) {
    console.log(err);
  }
};

export const getMovieByType = async (
  genre,
  setGenre,
  setList,
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
    const res = await axiosMovie.get(
      `/list/${genre ? genre : type === "movie" ? 28 : 10759}`
    );
    setList(res.data);
    setIsLoading(false);
  } catch (err) {
    console.log(err);
  }
};

export const getImg = (content) => {
  const img =
    content.backdrop_path &&
    `https://image.tmdb.org/t/p/original${content.backdrop_path}`;
  return img;
};

export const getByUrl = async (url, title, config) => {
  try {
    const res = await axiosMovie.get(url, config);
    res.data.title = title;

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMoviesByType = async (genre, setGenre, type, setIsLoading) => {
  setIsLoading(true);
  if (genre) {
    setIsLoading(false);
  }
  if (!type) {
    setIsLoading(true);
    setGenre(null);
  }
  try {
    const res = await axiosMovie.get(
      `/list/${genre ? genre : type === "movie" ? 28 : 10759}`
    );
    setIsLoading(false);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

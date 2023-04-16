import { axiosInstance } from "./axiosInstance";
import { toast } from "react-toastify";

export const getApiContext = async (dispatch, start, success, failure, url) => {
  dispatch(start());
  try {
    const res = await axiosInstance.get(url);
    dispatch(success(res.data));
  } catch (err) {
    dispatch(failure());
  }
};

export const deleteApiContext = async (
  dispatch,
  start,
  success,
  failure,
  url,
  payload
) => {
  dispatch(start());
  try {
    await axiosInstance.delete(url + payload);
    dispatch(success(payload));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(failure());
  }
};

export const createApiContext = async (
  dispatch,
  start,
  success,
  failure,
  url,
  payload
) => {
  dispatch(start());
  try {
    const res = await axiosInstance.post(url, payload);
    dispatch(success(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(failure());
  }
};

export const updateApiContext = async (
  dispatch,
  start,
  success,
  failure,
  url,
  payload
) => {
  dispatch(start());
  try {
    const res = await axiosInstance.put(url, payload);
    dispatch(success(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(failure());
  }
};

export const getStatsList = async () => {
  try {
    const userStats = await axiosInstance.get("/users/stats");
    const statsList = await userStats.data.sort(function (a, b) {
      return a._id - b._id;
    });
    return statsList;
  } catch (err) {
    console.log(err);
  }
};

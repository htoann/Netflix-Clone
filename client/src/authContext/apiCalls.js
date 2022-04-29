import { axiosInstance } from "../assets/js/axiosInstance";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./AuthActions";
import { toast } from "react-toastify";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  toast.info("Logging...", { autoClose: 500 });
  try {
    const res = await axiosInstance.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data);
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
};

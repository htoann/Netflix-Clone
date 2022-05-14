import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./AuthActions";
import { toast } from "react-toastify";
import { axiosInstance } from "./../utils/axiosInstance";

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

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};

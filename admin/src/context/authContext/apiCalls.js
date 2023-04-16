import { axiosInstance } from "./../../utils/axiosInstance";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  logoutSuccess,
} from "./AuthActions";
import { toast } from "react-toastify";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axiosInstance.post("auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.href = "/";
    toast.info("Logging...", { autoClose: 7000 });
  } catch (err) {
    dispatch(loginFailure());
    toast.error(err.response.data);
  }
};

export const logout = (dispatch) => {
  dispatch(logoutSuccess());
};

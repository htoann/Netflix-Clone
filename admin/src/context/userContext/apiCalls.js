import * as U from "./UserActions";
import {
  createApiContext,
  deleteApiContext,
  getApiContext,
  updateApiContext,
} from "../../utils/apiCall";

export const getUsers = (dispatch) => {
  getApiContext(
    dispatch,
    U.getUsersStart,
    U.getUsersSuccess,
    U.getUsersFailure,
    "/users"
  );
};

export const getNewUsers = (dispatch) => {
  getApiContext(
    dispatch,
    U.getUsersStart,
    U.getUsersSuccess,
    U.getUsersFailure,
    "/users?new=true"
  );
};

export const deleteUser = (id, dispatch) => {
  deleteApiContext(
    dispatch,
    U.deleteUserStart,
    U.deleteUserSuccess,
    U.deleteUserFailure,
    "/users/",
    id
  );
};

export const createUser = (user, dispatch) => {
  createApiContext(
    dispatch,
    U.createUserStart,
    U.createUserSuccess,
    U.createUserFailure,
    "/register",
    user
  );
};

export const updateUser = (user, dispatch) => {
  updateApiContext(
    dispatch,
    U.updateUserStart,
    U.updateUserSuccess,
    U.updateUserFailure,
    `/users/${user._id}`,
    user
  );
};

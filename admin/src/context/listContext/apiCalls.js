import * as L from "./ListActions";
import {
  createApiContext,
  deleteApiContext,
  getApiContext,
  updateApiContext,
} from "../../utils/apiCall";

export const getLists = (dispatch) => {
  getApiContext(
    dispatch,
    L.getListsStart,
    L.getListsSuccess,
    L.getListsFailure,
    "/lists"
  );
};

export const deleteList = (id, dispatch) => {
  deleteApiContext(
    dispatch,
    L.deleteListStart,
    L.deleteListSuccess,
    L.deleteListFailure,
    "/lists/",
    id
  );
};

export const createList = (list, dispatch) => {
  createApiContext(
    dispatch,
    L.createListStart,
    L.createListSuccess,
    L.createListFailure,
    "/lists",
    list
  );
};

export const updateList = (list, dispatch) => {
  updateApiContext(
    dispatch,
    L.updateListStart,
    L.updateListSuccess,
    L.updateListFailure,
    `/lists/${list._id}`,
    list
  );
};

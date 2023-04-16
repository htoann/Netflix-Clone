import { createContext, useReducer } from "react";
import UserReducer from "./UserReducer";

const INITITAL_STATE = {
  users: [],
  isFetching: false,
  error: false,
};

export const UserContext = createContext(INITITAL_STATE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITITAL_STATE);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

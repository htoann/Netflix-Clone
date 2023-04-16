import React from "react";
import { AuthContextProvider } from "../context/authContext/AuthContext";
import { MovieContextProvider } from "../context/movieContext/MovieContext";
import { ListContextProvider } from "../context/listContext/ListContext";
import { UserContextProvider } from "../context/userContext/UserContext";

function ContextProvider({ children }) {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>{children}</UserContextProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  );
}

export default ContextProvider;

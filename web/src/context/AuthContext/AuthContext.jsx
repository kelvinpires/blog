import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user_id: localStorage.user_id ? JSON.parse(localStorage.user_id) : null,
  auth_token: localStorage.auth_token
    ? JSON.parse(localStorage.auth_token)
    : null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user_id", JSON.stringify(state.user_id));
    localStorage.setItem("auth_token", JSON.stringify(state.auth_token));
  }, [state]);

  return (
    <AuthContext.Provider
      value={{
        user_id: state.user_id,
        auth_token: state.auth_token,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

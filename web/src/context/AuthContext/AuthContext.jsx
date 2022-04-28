import { createContext, useEffect, useReducer } from "react";
import { api } from "../api";
import { handleLogout } from "./apiCalls";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: localStorage.user ? JSON.parse(localStorage.user) : null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state]);

  async function verifyUser() {
    if (state.user) {
      try {
        const dateNow = new Date();

        const res = await api.get(`/user/verify/${state.user.accessToken}`);
        const data = await res.data;

        const isExpired = data.user?.exp * 1000 < dateNow.getTime();

        if (isExpired) {
          handleLogout(dispatch);
        }
      } catch (err) {
        handleLogout(dispatch);
      }
    }
  }

  useEffect(() => {
    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user: state.user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

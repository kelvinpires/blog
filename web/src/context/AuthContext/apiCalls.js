import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";
import { api } from "../api";

export const login = async (user, dispatch) => {
  dispatch(loginStart);

  try {
    const res = await api.post("/user/login", user);
    const data = await res.data.user;
    console.log(data);
    dispatch(loginSuccess(data));
  } catch (err) {
    const res = await api.post("/user/login", user);
    const errorMessage = await res.data.error;
    console.log(errorMessage);
    dispatch(loginFailure);
  }
};

export const handleLogout = (dispatch) => {
  dispatch(logout);
};

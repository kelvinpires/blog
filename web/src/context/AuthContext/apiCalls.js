import { loginFailure, loginStart, loginSuccess, logout } from "./AuthActions";
import { api } from "../../lib/api";

export const login = async (userInfo, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await api.post("/user/login", userInfo);
    const data = await res.data.user;
    dispatch(loginSuccess(data));
    location.href = "http://localhost:3000/";
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const handleLogout = (dispatch) => {
  return dispatch(logout());
};

export async function verifyUser(dispatch) {
  const dateNow = new Date();

  const res = await api.get(
    `/user/verify/${JSON.parse(localStorage.auth_token)}`
  );
  const data = await res.data;

  const isExpired = data.user?.exp * 1000 < dateNow.getTime();

  if (isExpired) {
    return handleLogout(dispatch);
  }
}

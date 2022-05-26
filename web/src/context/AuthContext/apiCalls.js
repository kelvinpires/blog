import {
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
  signupStart,
  signupSuccess,
  signupFailure,
} from "./AuthActions";
import { api } from "../../lib/api";

export const signup = async (userInfo, dispatch, setError) => {
  dispatch(signupStart());

  try {
    const res = await api
      .post("/user/signup", userInfo)
      .catch((err) => setError(err.response.data.message));
    const message = await res.data.message;
    dispatch(signupSuccess());
    alert(message);
    location.href = "https://blog-kelvinpires.vercel.app/auth/login";
  } catch (err) {
    dispatch(signupFailure());
  }
};

export const login = async (userInfo, dispatch, setError) => {
  dispatch(loginStart());

  try {
    const res = await api
      .post("/user/login", userInfo)
      .catch((err) => setError(err.response.data.message));
    const data = await res.data.user;
    dispatch(loginSuccess(data));
    location.href = "https://blog-kelvinpires.vercel.app/";
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

export const getUserInfo = async (userId, auth_token, setUser) => {
  const res = await api
    .get(`/user/${userId}`, {
      headers: {
        token: `Bearer ${auth_token}`,
      },
    })
    .catch((err) => alert(err.response.data.error));
  const data = await res.data.user;

  setUser(data);
};

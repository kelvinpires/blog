export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
});

export const signupStart = () => ({
  type: "SIGNUP_START",
});

export const signupSuccess = () => ({
  type: "SIGNUP_SUCCESS",
});

export const signupFailure = () => ({
  type: "SIGNUP_FAILURE",
});

export const logout = () => ({
  type: "LOGOUT",
});

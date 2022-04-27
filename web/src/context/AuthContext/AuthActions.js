export const loginStart = () => ({
  type: "LOGIN_START",
});

export const loginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const loginFailure = () => ({
  type: "LOGIN_FAILURE",
  payload: null,
});

export const signupStart = () => ({
  type: "LOGIN_START",
});

export const signupSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const signupFailure = () => ({
  type: "LOGIN_FAILURE",
  payload: null,
});

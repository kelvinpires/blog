export default (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        isFetching: true,
        user_id: null,
        auth_token: null,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        isFetching: false,
        user_id: action.payload._id,
        auth_token: action.payload.accessToken,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        isFetching: false,
        user_id: null,
        auth_token: null,
        error: true,
      };
    case "SIGNUP_START":
      return {
        isFetching: true,
        error: false,
        user_id: null,
        auth_token: null,
      };
    case "SIGNUP_SUCCESS":
      return {
        isFetching: false,
        error: false,
        user_id: null,
        auth_token: null,
      };
    case "SIGNUP_FAILURE":
      return {
        isFetching: false,
        error: true,
        user_id: null,
        auth_token: null,
      };
    case "LOGOUT":
      return {
        isFetching: false,
        user_id: null,
        auth_token: null,
        error: false,
      };
    default:
      return {
        ...state,
      };
  }
};

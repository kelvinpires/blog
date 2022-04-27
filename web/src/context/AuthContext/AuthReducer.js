export default (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        auth: action.payload,
      };
    case "NAVIGATE":
      return {
        ...state,
        activeLink: action.payload,
      };
    case "SET USER DETAILS":
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;

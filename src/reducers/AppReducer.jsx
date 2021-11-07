const AppReducer = (state, action) => {
  switch (action.type) {
    case "AUTH":
      console.log("AUTH STATUS", action.payload);
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
      // console.log("User Details", action.payload);
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;

const AppReducer = (state, action) => {
  switch (action.type) {
    case "LOG IN":
      return {
        ...state,
        auth: true,
      };
    case "LOG OUT":
      return {
        ...state,
        auth: false,
      };
    case "NAVIGATE":
      console.log(action.payload);
      console.log("Change Url");
      return {
        ...state,
        // activeUser: { ...activeUser, activeLink: action.payload },
      };
    default:
      return state;
  }
};

export default AppReducer;

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
      return {
        ...state,
        activeLink: action.payload,
      };
  }
};

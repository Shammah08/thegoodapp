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
      // console.log("Change Url: ", action.payload);
      // console.log(...state);
      return {
        ...state,
        ...state.activeUser,
        ...{ activeLink: action.payload },
      };

    // ...state,{...state.activeUser, activeLink: ''}
    // ...state,
    // activeUser: {...state.activeUser, action.payload}
    // activeUser: { ...activeUser, activeLink: action.payload },

    default:
      return state;
  }
};

export default AppReducer;

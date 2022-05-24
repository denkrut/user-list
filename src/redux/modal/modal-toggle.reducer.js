const INITIAL_STATE = {
  toggle: false,
};

const modalToggleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default modalToggleReducer;

const INITIAL_STATE = {
  enableEdit: false,
  formEdit: true,
};

export const enableInputEditReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ENABLE_INPUT_EDIT":
      return {
        ...state,
        enableEdit: !state.enableEdit,
        formEdit: !state.formEdit,
      };
    default:
      return state;
  }
};

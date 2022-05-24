const defaultState = {
  testItems: [],
};

export const testRecucer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        testItems: [...state.testItems, action.payload],
      };
    case "DELETE_USER":
      return {
        ...state,
        testItems: state.testItems.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

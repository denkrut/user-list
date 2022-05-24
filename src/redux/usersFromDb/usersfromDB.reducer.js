const INITIAL_STATE = {
  users: [],
};

export const usersPromDBReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_USERS_FROM_DB":
      return {
        ...state,
        users: [...action.payload],
      };
    case "DELETE_USER_FROM_DB":
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

// const GET_USERS_FROM_DB = "GET_USERS_FROM_DB"

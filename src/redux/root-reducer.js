import { combineReducers } from "redux";
import usersReducer from "./users/users-reducer";
// import { testRecucer } from "./users/test.reduser";s

// import { testUsersSlice } from "./testUsers/testUsers.reducer";
import modalToggleReducer from "./modal/modal-toggle.reducer";
import { usersPromDBReducer } from "./usersFromDb/usersfromDB.reducer";

export default combineReducers({
  users: usersReducer,
  toggle: modalToggleReducer,
  // testItems: testRecucer,
  usersFromDB: usersPromDBReducer,
  // testUsers: testUsersSlice,
});

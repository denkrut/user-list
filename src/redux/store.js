import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./root-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { testUsersSlice } from "./testUsers/testUsers.reducer";
import usersReducer from "./users/users-reducer";
import thunk from "redux-thunk";

const middlewares = [logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const store = configureStore({
//   reducer: {
//     testUsers: testUsersSlice.reducer,
//   },
// });

export default store;

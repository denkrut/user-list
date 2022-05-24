import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "./fakedata";
export const testUsersSlice = createSlice({
  name: "testUsers",
  initialState: { value: UsersData },
  reducers: {
    addUser: (state, action) => {
      //Write code for adding a user
      state.value.push(action.payload);
    },
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
        return state;
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = testUsersSlice.actions;
export default testUsersSlice.reducer;

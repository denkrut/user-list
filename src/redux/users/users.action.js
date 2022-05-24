export const getAllUsers = (payload) => ({
  type: "FETCH_USERS",
  payload,
});

export const getUserInfo = (user) => ({
  type: "GET_USER_INFO",
  payload: user.id,
});

export const deleteUser = (user) => ({
  type: "DELETE_USER",
  payload: user,
});

export const editUser = (value, name) => ({
  type: "EDIT_USER",
  fieldName: name,
  value: value,
});

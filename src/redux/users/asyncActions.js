import { getAllUsers } from "./users.action";

export const fetchUsers = () => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())

      .then((json) => dispatch(getAllUsers(json)));
  };
};
export const searchUsers = (text) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users?name=${text}`)
      .then((response) => response.json())

      .then((json) => dispatch(getAllUsers(json)));
  };
};

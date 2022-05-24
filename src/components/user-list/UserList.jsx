import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../../redux/users/asyncActions";

import SearchUser from "../search-user/SearchUser";
import SortUsers from "../sortUsers/SortUsers";
import UserCard from "../user-card/UserCard";
import Modal from "../modal/Modal";
import AddUserForm from "../UserForm/AddUserForm";

import "./UserList.styles.scss";
import QuantityUsers from "../quantityUsers/QuantityUsers";

function UserList() {
  const { users, searchedUsers } = useSelector((state) => state.users);
  console.log("searchedUsers", searchedUsers);
  const { toggle } = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const quantityOfUsers = users.length;

  return (
    <div className="userlist-container">
      {users.length > 0 ? (
        <h3 className="userlist-header">User list</h3>
      ) : (
        <h3 className="userlist-header">User list is Empty</h3>
      )}
      {quantityOfUsers > 0 && (
        <QuantityUsers quantityOfUsers={quantityOfUsers} />
      )}
      {users.length > 0 && <SearchUser />}
      {toggle && (
        <Modal>
          <AddUserForm />
        </Modal>
      )}
      <div className="container">
        {users.length < 1 && (
          <button className="sort-btn" onClick={() => dispatch(fetchUsers())}>
            Get Users
          </button>
        )}
        <button
          className="sort-btn"
          onClick={() => dispatch({ type: "TOGGLE_MODAL" })}
        >
          Add User
        </button>
        {users.length ? <SortUsers /> : null}
      </div>
      {searchedUsers.length > 0
        ? searchedUsers.map((user) => (
            <UserCard key={user.id} user={user} name={user.name} />
          ))
        : users.map((user) => (
            <UserCard key={user.id} user={user} name={user.name} />
          ))}
    </div>
  );
}

export default UserList;

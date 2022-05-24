import React from "react";
import { useNavigate } from "react-router-dom";
import "./UserCard.styles.scss";
import { useDispatch } from "react-redux";

import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase.config";

function UserCard({ user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sendToDb = async () => {
    await setDoc(doc(db, "users", `${user.id}`), user);
  };

  const deleteFromDB = async () => {
    console.log("User to delete", user);
    await deleteDoc(doc(db, "users", `${user.id}`));
    dispatch({ type: "DELETE_USER_FROM_DB", payload: user });
  };

  return (
    <div className="user-card">
      <div className="user-credentials">
        <span className="name">
          <strong>name:</strong> {user.name}
        </span>
        <span className="email">
          <strong>email:</strong> {user.email}
        </span>
        <span className="company">
          <strong>company:</strong> {user.company.name}
        </span>
      </div>
      <div className="user-profile-edit">
        <span
          onClick={() => {
            dispatch({ type: "GET_CURRENT_USER_INFO", payload: user });
            navigate("/profile");
          }}
        >
          Edit
        </span>
        <span onClick={() => deleteFromDB(user)}>&#10006;</span>
        <span onClick={() => sendToDb(user)}>Add</span>
      </div>
    </div>
  );
}

export default UserCard;

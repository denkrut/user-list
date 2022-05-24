import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  deleteUser,
  updateUsername,
} from "../../redux/testUsers/testUsers.reducer";
import "./TestPage.styles.scss";

import { setDoc, doc, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase.config";

function TestPage() {
  // const dispatch = useDispatch();
  // const userList = useSelector((state) => state.testUsers.value);
  // console.log("UserList", userList);

  // const [name, setName] = useState("");
  // const [username, setUserName] = useState("");
  // const [newUsername, setNewUsername] = useState();
  // console.log("newUserNamme", newUsername);

  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  };

  const sendToDB = async () => {
    await setDoc(doc(db, "users", "firstUser"), user);
  };

  return (
    <div>
      <div className="addUser">
        <button onClick={sendToDB}>SENDTODB</button>
      </div>
      {/* <input
          type="text"
          placeholder="Name..."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="UserName..."
          onChange={(e) => setUserName(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addUser({
                id: userList[userList.length - 1].id + 1,
                name: name,
                username: username,
              })
            );
          }}
        >
          ADD USER
        </button>
      </div>

      <div>
        {userList.map((user) => (
          <div key={user.id} className="displayUsers">
            <h3>{user.name}</h3>
            <h4>{user.username}</h4>
            <input
              type="text"
              placeholder="New UserName..."
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button
              onClick={() =>
                dispatch(updateUsername({ id: user.id, username: newUsername }))
              }
            >
              Update User
            </button>
            <button onClick={() => dispatch(deleteUser({ id: user.id }))}>
              Delete User
            </button>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default TestPage;

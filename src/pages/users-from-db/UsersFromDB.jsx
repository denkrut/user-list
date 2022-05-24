import React from "react";
import "./UsersFromDB.styles.scss";
import { doc, getDocs, query, where, getDoc } from "firebase/firestore";

import { db } from "./../../firebase.config";
import UserCard from "../../components/user-card/UserCard";
import { useEffect } from "react";
import { collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";

function UsersFromDB() {
  //   const [user, setUser] = useState();s
  const { users } = useSelector((state) => state.usersFromDB);
  console.log("sers from useSelector", users);
  //   const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllUsers = async () => {
      // const q = query(collection(db, "users"), where("id", "===", Number));

      const querySnapshot = await getDocs(collection(db, "users"));
      console.log("querySnapshot:", querySnapshot.doc);
      const provisionalUsers = [];

      querySnapshot.forEach((doc) => {
        return provisionalUsers.push(doc.data());
      });
      //   setUsers(provisionalUsers);
      dispatch({ type: "GET_USERS_FROM_DB", payload: provisionalUsers });

      // setUsers(querySnapshot.doc);
      // .map((doc) => {

      //   console.log("Users from state", users);
      //   console.log(doc.id, " => ", doc.data());
    };
    fetchAllUsers();
  }, []);

  //   useEffect(() => {
  //     const fetchUsersfromDB = async () => {
  //       try {
  //         const usersRef = doc(db, "users", "7");
  //         const userSnap = await getDoc(usersRef);

  //         if (userSnap.exists()) {
  //           setUser(userSnap.data());
  //         }
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };
  //     fetchUsersfromDB();
  //   }, []);

  //   const deleteFromDB = async () => {
  //     console.log("User to delete", user);
  //     await deleteDoc(doc(db, "users", `${user.id}`));
  //   };

  return (
    <div className="db-container">
      <h1>Users from db</h1>
      {users
        ? users.map((user) => <UserCard key={user.id} user={user} />)
        : null}
    </div>
  );
}

export default UsersFromDB;

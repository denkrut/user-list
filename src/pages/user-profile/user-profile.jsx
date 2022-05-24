import React from "react";
import FormInput from "../../components/form-input/FormInput";

import "./user-profile.styles.scss";
import { useSelector } from "react-redux";

function UserProfile() {
  const currentUser = useSelector((state) => state.users.currentUser);
  console.log("USER PROFILE current user:", currentUser);

  // const currentUserKeys = Object.keys(currentUser);

  return (
    <div className="profile-container">
      <span className="profile-header-text">User Profile</span>
      <form>{<FormInput user={currentUser} />}</form>
    </div>
  );
}

export default UserProfile;

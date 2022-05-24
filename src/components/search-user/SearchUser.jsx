import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchUsers } from "../../redux/users/asyncActions";

import "./SearchUser.styles.scss";
function SearchUser() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText((prev) => (prev = e.target.value));
    dispatch({ type: "SEARCH_USER", payload: text });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(searchUsers(text));
  // };
  return (
    <div className="search-user-container">
      <div>
        <form type="submit">
          <input
            type="text"
            placeholder="Search User"
            value={text}
            onChange={(e) => handleChange(e)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchUser;

{
  /* <div>{<button onClick={handleSubmit}>Search</button> </div>  */
}

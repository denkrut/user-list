import React from "react";
import "../user-list/UserList.styles.scss";

import { useDispatch } from "react-redux";

function SortUsers() {
  const dispatch = useDispatch();
  return (
    <>
      {/*       
      <div className="sort-container">
              <div className="sort-users-container"> */}
      <button
        name="name"
        className="sort-btn"
        onClick={() => dispatch({ type: "SORT_BY_NAME" })}
      >
        Sort by Name
      </button>
      <button
        name="company"
        className="sort-btn"
        onClick={() => dispatch({ type: "SORT_BY_CITY" })}
      >
        Sort by Company
      </button>
      {/*       
        </div>
      
      </div> */}
    </>
  );
}

export default SortUsers;

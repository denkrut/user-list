import { useState } from "react";
import "./FormInput.styles.scss";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function FormInput({ user }) {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    const userUpdated = {
      ...user,
      [name]: value,

      company: {
        ...user.company,
        [name]: value,
      },
      address: {
        ...user.address,
        [name]: value,
      },
    };
    dispatch({ type: "INPUT_CHANGE", payload: userUpdated });
  };
  const enableInputEdit = (e) => {
    setDisabled(!disabled);
  };

  return (
    <div className="user-profile">
      <form type="submit">
        <label className="form-input-label">Name</label>
        <input
          disabled={disabled}
          className="form-input"
          name="name"
          type="text"
          min="3"
          value={user.name}
          onChange={(e) => onChange(e)}
          required
        />
        <label className="form-input-label">Email</label>
        <input
          disabled={disabled}
          className="form-input"
          name="email"
          type="email"
          value={user.email}
          onChange={(e) => onChange(e)}
        />
        <label className="form-input-label">UserName</label>
        <input
          disabled={disabled}
          className="form-input"
          name="username"
          type="text"
          value={user.username}
          onChange={(e) => onChange(e)}
        />
        <label className="form-input-label">City</label>
        <input
          disabled={disabled}
          className="form-input"
          name="city"
          type="text"
          value={user.address.city}
          onChange={(e) => onChange(e)}
        />
        <label className="form-input-label">ZipCode</label>
        <input
          disabled={disabled}
          className="form-input"
          name="zipcode"
          type="text"
          value={user.address.zipcode}
          onChange={(e) => onChange(e)}
        />
        <label className="form-input-label">Phone number</label>
        <input
          disabled={disabled}
          className="form-input"
          name="phone"
          type="phone"
          value={user.phone}
          onChange={(e) => onChange(e)}
        />
        <label className="form-input-label">Company</label>
        <input
          disabled={disabled}
          className="form-input"
          name="title"
          type="text"
          value={user.company.title}
          onChange={(e) => onChange(e)}
        />
      </form>
      <div className="edit-save-user">
        <Link
          to="/"
          className="user-profile-edit"
          onClick={(user) => dispatch({ type: "UPDATE_USER", payload: user })}
        >
          &#10004;
        </Link>
        <span
          className="user-profile-edit"
          style={{ fontSize: "30px" }}
          onClick={enableInputEdit}
        >
          &#9998;
        </span>
      </div>
    </div>
  );
}

export default FormInput;

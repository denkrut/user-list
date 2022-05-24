import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../redux/users/asyncActions";
import usersReducer from "../../redux/users/users-reducer";
import "./AddUserform.styles.scss";

export default function AddUserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    id: Date.now(),
    name: "",
    email: "",
    username: "",
    address: { city: "", phone: "", zipcode: "" },
    company: { name: "" },
  });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
      company: { ...user.company, [name]: value },
      address: { ...user.address, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("USERRR", user);
    dispatch({ type: "ADD_NEW_USER", payload: user });
    dispatch({ type: "TOGGLE_MODAL" });
    navigate("/");
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="email"
        name="email"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="username"
        name="username"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="phone"
        name="phone"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="city"
        name="city"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="zipcode"
        name="zipcode"
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="company"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <button type="Submit" className="submit-add-user-form">
        Create user
      </button>
    </form>
  );
}

// const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   //   console.log(errors);

// <form className="add-user-form" onSubmit={handleSubmit(onSubmit)}>
// <input
//   type="text"
//   placeholder="Name"
//   {...register("Name", { required: true, min: 3, maxLength: 80 })}
// />
// <input
//   type="text"
//   placeholder="Username"
//   {...register("Username", { required: true, min: 3, maxLength: 100 })}
// />
// <input
//   type="text"
//   placeholder="Email"
//   {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
// />
// <input
//   type="text"
//   placeholder="City"
//   {...register("City", { required: true, min: 3, maxLength: 100 })}
// />
// <input
//   type="tel"
//   placeholder="Phone"
//   {...register("Phone", { required: true, min: 8, maxLength: 12 })}
// />
// <input
//   type="text"
//   placeholder="ZipCode"
//   {...register("ZipCode", { required: true, min: 6 })}
// />
// <input
//   type="text"
//   placeholder="Company"
//   {...register("Company", { required: true, min: 8 })}
// />

// <button
//   onClick={() => onSubmit}
//   className="submit-add-user-form"
//   type="submit"
// >
//   Add
// </button>

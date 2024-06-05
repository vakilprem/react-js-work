import React, { useState } from "react";
// import { Form } from "react-router-dom";

function FuncationInput() {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(data);
  }
  const handleChange = (e) => {
    // const name = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    const new_value =
      name === "email" ? value.toLowerCase().replace("#", "@") : value;
    console.log(e.target);
    setData((prev) => {
      return {
        ...prev,
        [name]: new_value,
      };
    });
    // console.log(e.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name:</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        ></input>
        <br></br>
        <label>Enter Email:</label>
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Enter Email"
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default FuncationInput;

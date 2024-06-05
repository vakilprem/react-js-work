import React, { useState } from "react";

function Multipale() {
  const [fruits, setFruits] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setFruits([...fruits, value]);
    } else {
      setFruits(fruits.filter((e) => e !== value));
    }
  };
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fruits);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Select Units:</label>
        &nbsp;
        <input
          type="checkbox"
          name="fruits"
          value={"apple"}
          onChange={handleChange}
        ></input>
        <label>Apple</label>
        &nbsp;
        <input
          type="checkbox"
          name="fruits"
          onChange={handleChange}
          value={"Mango"}
        ></input>
        <label>Mango</label>
        &nbsp;
        <input
          type="checkbox"
          name="fruits"
          onChange={handleChange}
          value={"Banana"}
        ></input>
        <label>Banana</label>
        &nbsp;
        <input
          type="checkbox"
          name="fruits"
          onChange={handleChange}
          value={"Orange"}
        ></input>
        <label>Orange</label>
        <br></br>
        <br></br>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Multipale;

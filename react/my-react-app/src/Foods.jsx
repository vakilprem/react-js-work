import React, { useState } from "react";

function Foods() {
  const [food, setFood] = useState(["Apple", "Orange", "Banna"]);
  function handleAddFood() {
    const newfood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFood((f) => [...food, newfood]);
  }
  function handleRemoveFood(index) {
    setFood(food.filter((e, i) => i !== index));
  }
  return (
    <div>
      <h2>List of foods</h2>
      <ul>
        {food.map((food, index) => (
          <li key={index} onClick={() => handleRemoveFood(index)}>
            {food}
          </li>
        ))}
      </ul>
      <input type="text" id="foodInput" placeholder="EnterFood name" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Foods;

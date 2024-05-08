import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");
  return (
    <div className="color-container">
      <h1>Color Picker</h1>
      <div className="color-display" style={{ backgroundColor: color }}>
        <p>Selected Color : {color}</p>
      </div>
      <label>Select A Color</label>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      ></input>
    </div>
  );
}

export default ColorPicker;

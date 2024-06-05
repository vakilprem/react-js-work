import React, { useState } from "react";

function Other() {
  const [text, setText] = useState("");
  const [menu, setMenu] = useState("USA");
  const [checked, setChecked] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    console.log("cooment", e.target[0].value);
    console.log("Country", e.target[1].value);
    console.log("CheckBox", e.target[2].checked);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }}>Comment</label>
        <textarea
          cols={30}
          rows={5}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <br></br>
        <label>Select Country :</label>
        <select value={menu} onChange={(e) => setMenu(e.target.value)}>
          <option value={"Canda"}>Canda</option>
          <option value={"USA"}>USA</option>
          <option value={"India"}>India</option>
          <option value={"Peru"}>Peru</option>
        </select>
        <br></br>
        <label> Yes I Agree</label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        ></input>
        <br></br>

        <input type="submit" value={"submit"}></input>
      </form>
    </div>
  );
}

export default Other;

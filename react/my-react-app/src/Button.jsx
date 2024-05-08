import React from "react";

function Button() {
  const handleClick = (e) => {
    e.target.textContent = "Ouch 🙄";
  };
  return <button onClick={(e) => handleClick(e)}>Click ME</button>;
}

export default Button;

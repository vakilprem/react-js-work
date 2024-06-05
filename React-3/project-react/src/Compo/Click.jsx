import React from "react";

function Click() {
  function hello(name) {
    alert("Helllow There" + name);
  }
  return (
    <div>
      {/* <button onClick={hello}> Click Here</button> */}
      <button onClick={()=>hello("Premal")}> Click Here</button>
    </div>
  );
}

export default Click;

import React, { useState } from "react";

function UseArray() {
  let nun = [22, 11, 55, 44, 33];
  const [number, setNumber] = useState(nun);
  //   function ChangeArray(){
  //     setNumber([55,66,99,77,66])
  //   }
  function ChangeArray() {
    setNumber((prev) => {
      return [...prev, Math.floor(Math.random() * 50)];
    });
  }

  return (
    <div>
      <ul>
        {number.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={ChangeArray}>Change </button>
    </div>
  );
}

export default UseArray;

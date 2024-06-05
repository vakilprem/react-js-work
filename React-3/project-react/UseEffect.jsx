import React, { useEffect, useState } from "react";

function UseEffect() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Effect Run" + count);
  },[count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>ADD</button>
    </div>
  );
}

export default UseEffect;

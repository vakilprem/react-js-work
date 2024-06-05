import React from "react";

function Child({ dat }) {
  return (
    <div>
      <h1>
        i am {dat.name} age is {dat.age}
      </h1>
    </div>
  );
}

export default Child;

import React, { useState } from "react";

function UseState() {
  const obj = {
    name: "Premal",
    age: 30,
    height: 5.7,
    isYoung: true,
  };
  function Change() {
    // setPerson({
    //   name: "Prem",
    //   age: 55,
    //   height: 5,
    //   isYoung: false,
    // });
    setPerson(prevState =>{
        return{
            ...prevState,
            name:"kumar"
        }
    })
  }
  const [person, setPerson] = useState(obj);
  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={Change}>Change</button>
    </div>
  );
}

export default UseState;

import React, { useEffect, useRef } from "react";

function Refs() {
  const newRef = useRef();
  const lastRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(
      "Full Name = ",
      newRef.current.value,

      lastRef.current.value
    );
  }
  useEffect(() => {
    console.log(newRef);
    console.log(lastRef);
    newRef.current.focus();
    newRef.current.style.backgroundColor = "blue";
    // console.log(
    //   "Full Name = ",
    //   newRef.current.value,

    //   lastRef.current.value
    // );
    // console.log(newRef.current.innerHtml);
  });
  //   function handleClick() {
  //     newRef.current.style.color = "red";
  //     newRef.current.style.fontFamily = "cooper";
  //     newRef.current.hidden = true;
  //   }
  return (
    <div>
      <p>It can Make changes in to the dom directly</p>
      <p>refs are used to store the value of the elements</p>
      <p>We can make changes to the element directly in to the elment </p>
      <p>it is similer to key</p>
      <p>it is the shorthand to react</p>
      <p>it directly perform in to the actual dom</p>
      <p>Uncotroled component</p>
      <p>We can use UseRef reff Concept </p>
      {/* <h1 ref={newRef}>Lesrning never ends</h1> */}
      {/* <button onClick={handleClick}>Click</button> */}

      <form onSubmit={handleSubmit}>
        <label>Enter First name</label>
        <input ref={newRef} type="text"></input>
        <label>Enter Last name</label>
        <input ref={lastRef} type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Refs;

import React, { useContext } from "react";
import { NameContext } from "./App";

function C() {
  const myName = useContext(NameContext);
  return <div>
    <h1>Compo c</h1>
    <h1> {myName}</h1>
  </div>;
}

export default C;

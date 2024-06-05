import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reduxToolkit/counterSlice";

function App() {
  const myState = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Redux Tool Kit</h1>
      <input type="text" value={myState}></input>
      <button onClick={() => dispatch(increment())}>Plus</button>
      <button onClick={() => dispatch(decrement())}>Minus</button>
    </div>
  );
}

export default App;

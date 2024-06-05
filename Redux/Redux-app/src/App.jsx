import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, descrement } from "./actions";

function App() {
  const myState = useSelector((state) => state.inc_dec);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          <h1>Redux</h1>
        </li>
        <li>
          <p> A store that HOld State of your Application --Mobile Shope</p>
        </li>
        <li>
          <p>
            return type:'INCREMENT' Action -What to do -- Action-- plain
            javacript object type field action tell what to do but not how to do
            how to do will tell by Reducer An action the describe the type of
            chnage --Actoin Buy phone from the shop
          </p>
        </li>
        <li>
          <p>
            Reducer - How To do..Ties the store an action together ..mobile buy
            and shell ties
          </p>
        </li>
        <li>States are readonly</li>
      </ul>
      <input type="text" value={myState}></input>
      <br />
      <br />
      &nbsp; &nbsp;
      <button onClick={() => dispatch(increase())} className="btn btn-primary">
        Add
      </button>
      {/* <br/> */}
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={() => dispatch(descrement())} className="btn btn-danger">
        Minus
      </button>
    </div>
  );
}

export default App;

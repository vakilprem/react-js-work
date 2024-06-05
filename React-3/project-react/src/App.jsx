import { createContext } from "react";
import Context from "../Context";
import UseArray from "../UseArray";
import UseEffect from "../UseEffect";
import UseState from "../UseState";
import A from "./A";
import "./App.css";
import Click from "./Compo/Click";
import Hello from "./Compo/Hello";
import Student from "./Compo/Student";
import NEW, { Data2 } from "./Data";
// import Form from "./Form";

export const NameContext = createContext();

function App() {
  // const [count, setCount] = useState(0)
  let a = "Data";
  return (
    <>
      {/* <UseState />
      <UseArray />
      <UseEffect /> */}
      <NameContext.Provider value={"Premal"}>
        <A />
      </NameContext.Provider>
      {/* <B/> */}
      {/* <Form /> */}
    </>
  );
}

export default App;

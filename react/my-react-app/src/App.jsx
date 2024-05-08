// import Button from "./assets/Button";
// import Card from "./Card";
// import Food from "./Food";
// import Footer from "./Footer";
// import Header from "./Header";

import Button from "./Button";
import ColorPicker from "./ColorPicker";
import Counter from "./Counter";
import Create from "./Create";
import Crud from "./Crud";
import Foods from "./Foods";

import FormValidation from "./FormValidation";
import List from "./List";
// import MyComponent from "./MyComponent";
import Profile from "./Profile";
import Rest from "./Rest";
import ToDoList from "./ToDoList";
// import Todo2 from "./Todo2";
import Weather from "./Weather";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Read from "./Read";
import Edit from "./Edit";
import Login from "./Login";

// import User from "./User";
// import Student from "./assets/Student";

function App() {
  const fruits = [
    { id: 1, name: "Orange", calories: 95 },
    { id: 2, name: "Apple", calories: 45 },
    { id: 3, name: "Bananna", calories: 105 },
  ];
  const vegetable = [
    { id: 6, name: "Potato", calories: 110 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 105 },
    { id: 9, name: "corn", calories: 120 },
    { id: 10, name: "brocoli", calories: 37 },
  ];
  return (
    <>
      {/* <Header />
      <Food />
      <Footer /> */}
      {/* <Card />
      <Card /> */}
      {/* <Button /> */}
      {/* <Student name="Spngebob" age={30} isStudent={true} />
      <Student name="Patrik" age={27} isStudent={false} />
      <Student name="Saquidward" age={50} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Student /> */}
      {/* <User isLoggedIn={false} username="Premal" /> */}
      {/* {fruits.length > 0 ? <List item={fruits} category="fruits" /> : null} */}
      {/* {fruits.length > 0 && <List item={fruits} category="fruits" />}
      {vegetable.length > 0 ? (
        <List item={vegetable} category="vegetable" />
      ) : null} */}
      {/* <Button />
      <Profile /> */}
      {/* <MyComponent /> */}
      {/* <Counter />
      <ColorPicker />
      <Rest />
      <Foods /> */}
      {/* <ToDoList /> */}
      {/* <Todo2 /> */}
      {/* <Weather/> */}
      {/* <FormValidation /> */}
      {/* <Crud /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter> */}
      <Login />
    </>
  );
}

export default App;

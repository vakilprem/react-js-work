import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";
import PageNotFound from "./component/PageNotFound";
import Products from "./component/Products";
import Shirts from "./component/Shirts";
import Jens from "./component/Jens";
import Users from "./component/Users";
import UserDetails from "./component/UserDetails";
import Admin from "./component/Admin";
import Serch from "./component/Serch";

function App() {
  const navigate = useNavigate();
  const navigateTo = (url) => {
    navigate(url);
  };
  const navigateToWhere = () => {
    let name = "Premal";
    if (name == "Premal") {
      navigate("/about");
    } else {
      navigate("/contact");
    }
  };

  // const navigateToAbout = () => {
  //   navigate("/about");
  // };
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Products />}>
          <Route index element={<Shirts />}></Route>
          <Route path="shirts" element={<Shirts />} />
          <Route path="jens" element={<Jens />} />
        </Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/serach" element={<Serch />}></Route>
        <Route path="/user" element={<Users />}>
          <Route path=":id" element={<UserDetails />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <button onClick={() => navigate("/about")}>About</button> */}
      {/* <button onClick={() => navigateToAbout()}>About</button> */}
      {/* <button onClick={() => navigate("/contact")}>Contact</button> */}
      {/* <button onClick={() => navigateTo("/about")}>About</button>
      <button onClick={() => navigateTo("/contact")}>Contact</button> */}
      <button onClick={() => navigateToWhere()}>Click</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
}

export default App;

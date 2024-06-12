import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./assets/pages/Home/Home";
import Coin from "./assets/pages/Coin/Coin";
import Footer from "./component/Navbar/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/coin/:coinId" element={<Coin />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

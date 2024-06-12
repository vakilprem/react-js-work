// import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

import arrow_icom from "../../assets/arrow_icon.png";
import { useContext } from "react";
import { CoinContext } from "../../assets/context/CoinContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd": {
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "$" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };
  return (
    <div className="navbar">
      <div className="data">
        <Link to={"/"}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>
      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <li>Feature</li>
        <li> Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler} name="" id="">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sing Up <img src={arrow_icom} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;

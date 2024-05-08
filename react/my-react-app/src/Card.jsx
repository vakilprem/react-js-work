import React from "react";
import img from "./assets/img.jpg";
function Card() {
  return (
    <div className="card">
      <img className="img" alt="Profile Picture" src={img}></img>
      <h2 className="card-title">Premal</h2>
      <p className="card-text">I am a Software Devloper and Play Video Games</p>
    </div>
  );
}

export default Card;

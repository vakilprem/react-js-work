import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons"; // Example icon, replace with your desired icon
import "./Card.css"; // Import styles for Card component

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: "yellow" }}>
      <div className="icon-container">
        <FontAwesomeIcon icon={faCoffee} className="card-icon" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-description">{props.description}</p>
      </div>
    </div>
  );
}

export default Card;

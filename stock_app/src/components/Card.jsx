import React from "react";
import "./Card.css";

function Card({ title, year, poster }) {
  return (
    <div className="card">
      <img src={poster} alt={`${title} Poster`} />
      <div className="card-details">
        <h2>{title}</h2>
        <p>{year}</p>
      </div>
    </div>
  );
}

export default Card;

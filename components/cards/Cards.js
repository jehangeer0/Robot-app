import React from "react";
import classes from "../cards/Cards.module.css";
const Cards = ({ id, image, name, place }) => {
  return (
    <div className={classes.cardDesign}>
      <div className={classes.cardImages}>
        <img src={image} />
      </div>
      <div className={classes.cardText}>
        <h1>{name}</h1>
        <h2>{place}</h2>
      </div>
    </div>
  );
};

export default Cards;

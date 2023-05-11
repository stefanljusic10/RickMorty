import React from "react";
import "./card.scss";
import { useNavigate } from "react-router-dom";
import Status from "../Status/Status";
import { PATH } from "../../constants/constants";

const Card = ({ id, image, location, name, status }) => {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(PATH.character + `/${id}`)}>
      <img className="card__image" src={image} />
      <div className="card__content">
        <Status status={status} />
        <h2 className="card__name">{name}</h2>
        <h3 className="card__location-headline">Last location:</h3>
        <h3 className="card__location-name">{location}</h3>
      </div>
    </div>
  );
};

export default Card;

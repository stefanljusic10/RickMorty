import React from "react";
import "./button.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { PATH } from "../../constants/constants";

const Button = ({ url, path, name }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  //get id of episode or character from irl
  const id = url.split("/").slice(-1);

  // navigating to selected episode or character
  const goTo = () => {
    if(path === PATH.episode)
      navigate(pathname + `/${path}/${id}`);
    if(path === PATH.character)
      navigate(`/${path}/${id}`);
  };

  return (
    <button className="button" onClick={goTo}>
      {name}
    </button>
  );
};

export default Button;

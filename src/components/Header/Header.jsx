import React from "react";
import "./header.scss";
import { Link, Outlet } from "react-router-dom";
import { PATH } from "../../constants/constants";

const Header = () => {
  return (
    <>
      <div className="header">
        <Link to={PATH.index}>
          Rick & Morty
        </Link>
      </div>
      <Outlet />
    </>
  );
};

export default Header;

import React from "react";
import "./status.scss";
import { STATUS_COLOR } from "../../constants/constants";

const Status = ({ status }) => {
  const color =
    status === "Alive"
      ? STATUS_COLOR.alive
      : status === "Dead"
      ? STATUS_COLOR.dead
      : STATUS_COLOR.unknown;

  return (
    <p style={{ backgroundColor: color }} className="status">
      {status}
    </p>
  );
};

export default Status;

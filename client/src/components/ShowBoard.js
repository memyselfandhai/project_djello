import React, { Component } from "react";
import EditBoard from "./EditBoard.js";

const ShowBoard = ({ editBoard }) => {
  return (
    <div>
      <h1>board id goes here</h1>
      <EditBoard editBoard={editBoard} />
    </div>
  );
};

export default ShowBoard;

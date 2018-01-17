import React, { Component } from "react";
import { Link } from "react-router-dom";

const BoardCard = ({ board, deleteBoard }) => {
  return (
    <div className="BoardCard card" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        <h4>
          <Link to={`boards/${board.id}`}> {board.title} </Link>
        </h4>
        <button
          className="btn btn-danger btn-sm"
          value={board.id}
          //changed: wrapped in anon fn
          onClick={() => {
            deleteBoard(board.id);
          }}
        >
          Delete
        </button>{" "}
      </div>
    </div>
  );
};

export default BoardCard;

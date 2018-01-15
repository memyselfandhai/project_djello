import React, { Component } from "react";

const BoardCard = ({ board, onClick }) => {
  return (
    <div className="BoardCard card" style={{ maxWidth: "320px" }}>
      <div className="card-block">
        <h4>{board.title}</h4>
        <button
          className="btn btn-danger btn-sm"
          value="Delete"
          //changed: wrapped in anon fn
          onClick={() => {
            console.log("inside onClick", board.id);
            console.log(onClick);
            onClick(board.id);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BoardCard;

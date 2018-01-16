import React, { Component } from "react";
import BoardCard from "./BoardCard";

class Boards extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>slow your roll </p>;
    }

    const { boards, error } = this.props.boards;
    console.log("boards in boards comp => ", boards);
    let boardList = boards.map(board => {
      return (
        <BoardCard board={board} key={board.id} onClick={this.props.onClick} />
      );
    });

    return <div>{boardList}</div>;
  }
}

export default Boards;

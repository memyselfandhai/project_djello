import React, { Component } from "react";
import BoardCard from "./BoardCard";
import AddBoardContainer from "../containers/AddBoardContainer";

class Boards extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>slow your roll </p>;
    }

    const { boards, error } = this.props.boards;
    console.log("boards in boards comp => ", boards);
    let boardList = boards.map(board => {
      return (
        <BoardCard
          board={board}
          key={board.id}
          deleteBoard={this.props.deleteBoard}
        />
      );
    });

    return (
      <div>
        {boardList} <br />
        <AddBoardContainer />
      </div>
    );
  }
}

export default Boards;

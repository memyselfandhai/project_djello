import React, { Component } from "react";
import { connect } from "react-redux";
import Boards from "../components/Board";
import { getBoards, deleteBoard } from "../actions";

class BoardsContainer extends Component {
  componentDidMount() {
    this.props.getBoards();
  }

  render() {
    const { boards, isFetching } = this.props;
    return (
      <Boards
        boards={boards}
        isFetching={isFetching}
        onClick={this.props.deleteBoard}
      />
    );
  }
}

const mapStateToProps = state => {
  return { boards: state.boards, isFetching: state.isFetching };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getBoards: () => {
      dispatch(getBoards());
    },
    deleteBoard: () => {
      dispatch(deleteBoard());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardsContainer);

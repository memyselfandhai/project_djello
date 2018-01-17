import React, { Component } from "react";
import { connect } from "react-redux";
import ShowBoard from "../components/ShowBoard";
import { editBoard } from "../actions";

class ShowBoardContainer extends Component {
  // componentDidMount() {
  //   this.props.getBoards();
  // }

  render() {
    return <ShowBoard />;
  }
}

const mapStateToProps = state => {
  return { boards: state.boards, isFetching: state.isFetching };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(editBoard(data));
      form.reset();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowBoardContainer);

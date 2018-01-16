import { connect } from "react-redux";
import serialize from "form-serialize";
import { createBoard } from "../actions";
import AddBoard from "../components/AddBoard";

// Map dispatch to props to create a submit function that
// dispatches creating a Board
const mapDispatchToProps = dispatch => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, { hash: true });

      dispatch(createBoard(data));
      form.reset();
    }
  };
};

const AddBoardContainer = connect(null, mapDispatchToProps)(AddBoard);

export default AddBoardContainer;

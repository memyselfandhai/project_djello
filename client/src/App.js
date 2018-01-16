import React, { Component } from "react";
import "./App.css";
import BoardContainer from "./containers/BoardContainer";
import AddBoardContainer from "./containers/AddBoardContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoardContainer />
        <AddBoardContainer />
      </div>
    );
  }
}

export default App;

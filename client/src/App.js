import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BoardContainer from "./containers/BoardContainer";
import ShowBoardContainer from "./containers/ShowBoardContainer";
import ShowBoard from "./components/ShowBoard.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            {" "}
            <Route exact path="/" component={BoardContainer} />
            <Route path="/boards/:id" component={ShowBoardContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

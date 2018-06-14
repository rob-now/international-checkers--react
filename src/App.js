import React, {Component} from 'react';
import CheckersView from "./components/CheckersView";
import {BoardProvider} from "./contexts/Board";

class App extends Component {
  render() {
    return (
      <BoardProvider>
        <CheckersView/>
      </BoardProvider>
    );
  }
}

export default App;

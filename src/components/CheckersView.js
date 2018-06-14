import React, {Component} from 'react'
import {withBoard} from "../contexts/Board";

class CheckersView extends Component {
  render() {
    return (
      this.props.makeBoard()
    )
  }
}

export default withBoard(CheckersView)
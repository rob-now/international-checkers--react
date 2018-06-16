import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Piece.css'
import {withBoard} from "../contexts/Board";

class Piece extends Component {

  checkPositionOfSelected = () =>
   this.props.selectedY === this.props.rowIndex &&
    this.props.selectedX === this.props.squareIndex

  render() {
    const {square} = this.props
    return (
      <div
        onClick={
          () => this.props.turn === square ?
            this.props.handleSelected(this.props.turn, this.props.rowIndex, this.props.squareIndex) :
            undefined
        }
        className={
          this.props.turn === 'w' && square === 'w' ?
            (this.checkPositionOfSelected() ?
              "Checkers__Square--Selected" :
              undefined) :
            this.props.turn === 'b' && square === 'b' ?
              (this.checkPositionOfSelected() ?
                "Checkers__Square--Selected" :
                undefined) :
              undefined
        }
      >
        {
          square === 'w' ?
            <i className="fas fa-circle fa-3x fa-light"/> :
            square === 'b' ?
              <i className="fas fa-circle fa-3x fa-dark"/> :
              undefined
        }
      </div>
    )
  }
}

export default withBoard(Piece)
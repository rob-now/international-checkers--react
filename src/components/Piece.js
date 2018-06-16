import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Piece.css'
import {withBoard} from "../contexts/Board";

class Piece extends Component {
  render() {
    const {square} = this.props
    return (
      <div
        onClick={
          () => this.props.handleSelected(`${this.props.rowIndex}-${this.props.squareIndex}`)
        }
        className={
          this.props.turn === 'w' && square === 'w' ?
            (this.props.selected && this.props.selected === `${this.props.rowIndex}-${this.props.squareIndex}` ?
              "Checkers__Square--Selected" :
              undefined) :
            this.props.turn === 'b' && square === 'b' ?
              (this.props.selected && this.props.selected === `${this.props.rowIndex}-${this.props.squareIndex}` ?
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
import React, {Component} from 'react'
import './CheckersView.css'

class CheckersView extends Component {

  state = {
    boardState: [
      [0, 'b', 0, 'b', 0, 'b', 0, 'b', 0, 'b'],
      ['b', 0, 'b', 0, 'b', 0, 'b', 0, 'b', 0],
      [0, 'b', 0, 'b', 0, 'b', 0, 'b', 0, 'b'],
      ['b', 0, 'b', 0, 'b', 0, 'b', 0, 'b', 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 'w', 0, 'w', 0, 'w', 0, 'w', 0, 'w'],
      ['w', 0, 'w', 0, 'w', 0, 'w', 0, 'w', 0],
      [0, 'w', 0, 'w', 0, 'w', 0, 'w', 0, 'w'],
      ['w', 0, 'w', 0, 'w', 0, 'w', 0, 'w', 0]
    ]
  }

  makeBoard = () => {
    return (
      <div className="Checkers__Board">
        {
          this.state.boardState.map(
            (row, rowIndex) => {
              return (
                <div
                  key={`Row-${rowIndex}`}
                  className="Checkers__Row"
                >
                  {
                    row.map(
                      (square, squareIndex) =>
                        <div
                          key={`Square-${rowIndex}-${squareIndex}`}
                          className={rowIndex % 2 === 0 ?
                            (squareIndex % 2 === 0 ?
                                "Checkers__Square--Light" :
                                "Checkers__Square--Dark"
                            ) :
                            (squareIndex % 2 === 0 ?
                                "Checkers__Square--Dark" :
                                "Checkers__Square--Light"
                            )
                          }
                        >
                          {
                            square === 'w' ?
                              'white' :
                              square === 'b'
                                ? 'black' :
                                undefined
                          }
                        </div>
                    )
                  }
                </div>
              )
            }
          )
        }
      </div>
    )
  }

  render() {
    return (
      this.makeBoard()
    )
  }
}

export default CheckersView
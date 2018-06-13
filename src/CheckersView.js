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
            row => {
              return (
                <div className="Checkers__Row">
                  {
                    row.map(
                      square =>
                        <div className="Checkers__Square">
                          {square}
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
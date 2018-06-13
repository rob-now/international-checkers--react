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

  render() {
    return (
      <div className="Checkers__Board">
        <div className="Checkers__Row">
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
        </div>
        <div className="Checkers__Row">
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
        </div>
        <div className="Checkers__Row">
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
          <div className="Checkers__Square">

          </div>
        </div>
      </div>
    )
  }
}

export default CheckersView
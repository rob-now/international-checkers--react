import React, {Component, Fragment} from 'react'
import './CheckersView.css'
import 'font-awesome/css/font-awesome.min.css'

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

  makeLineNumbers = () =>
    <div className="Checkers__NumbersLine">
      <div className="break">
      </div>
      {
        this.state.boardState.map(
          (row, rowIndex) =>
            <div
              key={rowIndex + 1}
              className="Checkers__NumbersCell"
            >
              {rowIndex + 1}
            </div>
        )
      }
    </div>

  makeLineLetters = () => {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    return <div className="Checkers__LettersLine">
      {
        letters.map(
          (letter, index) =>
            <div
              key={index}
              className="Checkers__LettersCell"
            >
              {letter.toUpperCase()}
            </div>
        )
      }
    </div>
  }

  makeBoard = () => {
    return (
      <Fragment>

        <div className="Checkers__Board--Container">
          {
            this.makeLineNumbers()
          }
          <div className="Checkers__Board--InnerContainer">
            {
              this.makeLineLetters()
            }
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
                                    <i className="fas fa-circle fa-3x fa-light"/> :
                                    square === 'b' ?
                                      <i className="fas fa-circle fa-3x fa-dark"/> :
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
            {
              this.makeLineLetters()
            }
          </div>
          {
            this.makeLineNumbers()
          }
        </div>
      </Fragment>
    )
  }

  render() {
    return (
      this.makeBoard()
    )
  }
}

export default CheckersView
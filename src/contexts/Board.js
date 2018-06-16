import React, {Component, Fragment} from 'react'
import '../components/CheckersView.css'
import Piece from '../components/Piece';

const BoardContext = React.createContext()

export const BoardConsumer = BoardContext.Consumer

export class BoardProvider extends Component {

  state = {
    boardInitialState: [
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
    ],
    turn: 'w',
    selectedY: null,
    selectedX: null,
    moves: [],

    handleSelected: (color, y, x) => {
      console.log(y, x)
      this.setState({
        selectedY: y,
        selectedX: x,
        // moves: [`${this.state.selected.charAt(0)}`]
      })
      this.state.handlePossibleMoves(color, y, x)
    },

    handlePossibleMoves: (color, y, x) => {
      console.log('possible moves log')
      const upLeft = [`${y - 1}`, `${x - 1 < 0 ? null : this.state.boardInitialState[y - 1][x - 1] === 'w' ? null : x - 1}`]
      const upRight = [`${y - 1}`, `${x + 1 > 9 ? null : this.state.boardInitialState[y - 1][x + 1] === 'w' ? null : x + 1}`]
      color && color === 'w' ?
        this.setState({
          moves: upLeft.concat(upRight)
        }) :
        this.setState({
          moves: [`${y + 1}`, `${x - 1}`]
        })
    },

    makeLineNumbers: () =>
      <div className="Checkers__NumbersLine">
        <div className="break">
        </div>
        {
          this.state.boardInitialState.map(
            (row, index) =>
              <div
                key={index}
                className="Checkers__NumbersCell"
              >
                {this.state.boardInitialState.length - index}
              </div>
          )
        }
      </div>,

    makeLineLetters: () => {
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
    },

    makeBoard: () => {
      return (
        <Fragment>

          <div className="Checkers__Board--Container">
            {
              this.state.makeLineNumbers()
            }
            <div className="Checkers__Board--InnerContainer">
              {
                this.state.makeLineLetters()
              }
              <div className="Checkers__Board">
                {
                  this.state.boardInitialState.map(
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
                                  className={
                                    rowIndex % 2 === 0 ?
                                      (
                                        squareIndex % 2 === 0 ?
                                          "Checkers__Square--Light" :
                                          "Checkers__Square--Dark"
                                      ) :
                                      (
                                        squareIndex % 2 === 0 ?
                                          "Checkers__Square--Dark" :
                                          "Checkers__Square--Light"
                                      )

                                  }

                                >
                                  <Piece
                                    square={square}
                                    squareIndex={squareIndex}
                                    row={row}
                                    rowIndex={rowIndex}
                                  />
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
                this.state.makeLineLetters()
              }
            </div>
            {
              this.state.makeLineNumbers()
            }
          </div>
        </Fragment>
      )
    }
  }

  render() {
    return (
      <BoardContext.Provider value={this.state}>
        {this.props.children}
      </BoardContext.Provider>
    )
  }
}

export function withBoard(Component) {
  function BoardAwareComponent(props) {
    return (
      <BoardConsumer>
        {
          state =>
            <Component {...props} {...state}/>
        }
      </BoardConsumer>
    )
  }

  BoardAwareComponent.displayName = `BoardAware(${Component.displayName || Component.name || 'Component'})`

  return BoardAwareComponent
}


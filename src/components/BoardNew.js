import React, {Component} from 'react'
import './BoardNew.css'

const boardSize = 12

class BoardNew extends Component {

  renderRow = (x) => {
    //Storing cells in array
    let cells = []
    for (let j = 0; j < boardSize; j += 1) {
      cells[j] = this.renderCell((x * boardSize) + j, x, j)
    }
    console.log('cells', cells)
    return (
      <div
        className="board--row"
      >
        {cells}
      </div>
    )
  }

  renderCell = (cellId, x, y) => {
    console.log('rendering cell', cellId, x, y)
    const letters = [null, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', null]
    return <div
      className="board--cell"
    >
      {
        (y === 0 && x > 0 && x < 11) || (y === 11 && x > 0 && x < 11) ?
          boardSize - x - 1 :
          (x === 0 && y > 0 && y < 11) || (x === 11 && y > 0 && y < 11) ?
            letters.filter(
              (_, index) =>
                index === y
            ) :
            (y === 0 && x === 0) || (y === 0 && x === 11) || (y === 11 && x === 0) || (y === 11 && x === 11) ?
              '' :
              'inner'
      }
    </div>
  }

  render() {
    //Storing rows in array
    let rows = []
    for (let i = 0; i < boardSize; i += 1) {
      rows[i] = this.renderRow(i)
    }

    return (
      // console.log('rows', rows)
      <div
        className="board"
      >
        {rows}
      </div>
    )
  }
}

export default BoardNew
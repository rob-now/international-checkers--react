import React, {Component} from 'react'

const boardSize = 12

class BoardNew extends Component {

  renderRow = i => {
    //Storing cells in array
    let cells = []
    for (let j = 0; j < boardSize; j += 1) {
      cells[j] = this.renderCell((i * boardSize) + j)
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

  renderCell = i => {
    console.log('rendering cell', i)
    return <div
      className="board--cell"
    >
      cell
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
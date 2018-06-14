import React, {Component} from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './Piece.css'

class Piece extends Component {
  render() {
    const {square} = this.props
    return (
      <div>
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

export default Piece
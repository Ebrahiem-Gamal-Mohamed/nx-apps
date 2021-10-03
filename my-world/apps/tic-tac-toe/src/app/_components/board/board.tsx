import { Component } from 'react';
import Square from '../square/square';

import './board.scss';

/* eslint-disable-next-line */
export interface BoardProps {
  squares: string[] | null[];
  onClick: (i: number) => void;
}

export class Board extends Component<BoardProps> {
  renderSquare(i: number) {
    return (
      <Square
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const length = 3;
    return (
      <div className="board">
        {Array(length)
          .fill(null)
          .map((_, row) => {
            return (
              <div key={row} className="board-row flex">
                {Array(length)
                  .fill(null)
                  .map((_, col) => {
                    return this.renderSquare(length * row + col);
                  })}
              </div>
            );
          })}
      </div>
    );
  }
}

export default Board;

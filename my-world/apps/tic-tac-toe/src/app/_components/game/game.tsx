import { Component } from 'react';
import { Helper } from '../../_services/helper.service';
import Board from '../board/board';

import './game.scss';

/* eslint-disable-next-line */
export interface GameProps {}

export interface Square {
  squares: string[] | null[];
}

export interface State {
  history: Square[];
  xIsNext: boolean;
  stepNumber: number;
}

export class Game extends Component<GameProps, State> {
  winner: string | null = null;
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  initGameBoard() {
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
    });
  }

  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const currentSquares = history[history.length - 1];
    const updatedSquares = currentSquares.squares.slice();
    if (this.winner || updatedSquares[i]) {
      return;
    }
    updatedSquares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: [...history, { squares: updatedSquares }],
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  playAgain() {
    this.initGameBoard();
  }

  jumpTo(stepNumber: number) {
    this.setState({
      xIsNext: stepNumber % 2 === 0,
      stepNumber: stepNumber,
    });
  }

  render() {
    let boardStatus = '';
    const history = this.state?.history;
    const currentSquares = this.state?.history[this.state.stepNumber];
    this.winner = new Helper().calculateWinner(currentSquares?.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to Move #${move}` : `Go to game start.`;
      return (
        <li key={move}>
          <button className="btn" onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    if (this.winner) {
      boardStatus = `The winner is ${this.winner}`;
    } else {
      boardStatus = `Next Player ${this.state?.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={currentSquares.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div className="board-status">{boardStatus}</div>
          {moves?.length && <ol>{moves}</ol>}
          {this.winner && (
            <button className="reset-game-btn" onClick={() => this.playAgain()}>
              Play Again!
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Game;

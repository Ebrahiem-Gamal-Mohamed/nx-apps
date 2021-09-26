import { Component } from 'react';

import './square.scss';

/* eslint-disable-next-line */
export interface SquareProps {
  value: string | null;
  onClick: () => void
}

export class Square extends Component<SquareProps> {
  render() {
    return (
      <div>
        <button 
          className="square" 
          onClick={() => { this.props.onClick() }}>
          {this.props.value}
        </button>
      </div>
    );
  }
}

export default Square;

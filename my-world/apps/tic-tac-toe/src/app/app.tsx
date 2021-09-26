import { Component } from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './logo.svg';

import { Route, Link } from 'react-router-dom';
import { Game } from './_components/game/game';

export class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <header className="flex">
          <Logo width="75" height="75" />
          <h1>Welcome to tic-tac-toe!</h1>
        </header>
        <main>
          <p>Thank you Emy ♥ for being my Sweety wife</p>
          <br />
          <Game />
        </main>

        {/* START: routes */}
        {/* These routes and navigation have been generated for you */}
        {/* Feel free to move and update them to fit your needs */}
        <hr />
        <div role="navigation">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/page-2">Page 2</Link>
            </li>
          </ul>
        </div>
        <Route
          path="/"
          exact
          render={() => (
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          )}
        />
        {/* END: routes */}
      </div>
    );
  }
}

export default App;

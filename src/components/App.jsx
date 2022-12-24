import React, { PureComponent } from 'react';
import style from './style.scss';

class App extends PureComponent {
  render() {
    return (
      <div className={style.app}>
        <h1>My React App!</h1>
      </div>
    );
  }
}

export default App;

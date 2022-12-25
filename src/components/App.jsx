import React from 'react';
import useStore from '../hooks/useStore';
import style from './style.scss';

function App() {
  const store = useStore();

  console.log(store);

  return (
    <div className={style.app}>
      <h1>My React App!</h1>
    </div>
  );
}

export default App;

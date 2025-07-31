// src/App.jsx
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-container">
      <h1 className="header-title">Counter App</h1>
      <div className="card">
        <div className="count-display">{count}</div>
        <div className="button-group">
          <button onClick={decrement} className="decrement-button">
            -
          </button>
          <button onClick={increment} className="increment-button">
            +
          </button>
        </div>
        <p className="edit-text">
          
        </p>
      </div>
    </div>
  );
}

export default App;
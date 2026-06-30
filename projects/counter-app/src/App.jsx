import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-card">
      <h1 className="title">Counter App</h1>
      <div className="count-display">
        <h1>{count}</h1>
      </div>

      <div className="button-row">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>

        <button onClick={increment}>+</button>
      </div>

      <div className="reset-btn">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

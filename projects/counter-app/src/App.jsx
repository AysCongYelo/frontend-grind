import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="counter-card">
      <h1 className="title">Counter App</h1>
      <div className="count-display">
        <h1>{count}</h1>
      </div>

      <div className="button-row">
        <button
          onClick={() => setCount((prevCount) => prevCount - 1)}
          disabled={count === 0}
        >
          -
        </button>

        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          +
        </button>
      </div>

      <div className="reset-btn">
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default App;

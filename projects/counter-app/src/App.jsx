import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>

      <button
        onClick={() => {
          // console.log("Count:", count);
          setCount(count + 1);
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          // console.log("Count:", count);
          setCount(count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;

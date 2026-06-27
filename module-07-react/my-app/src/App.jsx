import { useState } from "react";

function App() {
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  return (
    <>
      <h1>{fruits.join(", ")}</h1>

      <button onClick={() => setFruits([...fruits, "Mango"])}>Add Mango</button>
    </>
  );
}

export default App;

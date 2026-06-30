import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  return (
    <>
      <h1>Color Picker</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </>
  );
}

export default App;

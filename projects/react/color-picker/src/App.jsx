import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000000");
  return (
    <div className="container">
      <h1 style={{ color }}>Color Picker</h1>
      <div className="box" style={{ backgroundColor: color }}></div>
      <input
        className="input"
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <p>Hexcode: {color}</p>
    </div>
  );
}

export default App;

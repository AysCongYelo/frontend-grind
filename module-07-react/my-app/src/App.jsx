import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Component mounted");

    const timer = setInterval(() => {
      console.log("Tick");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Cleanup");
    };
  }, []);

  return <h1>Cleanup Example</h1>;
}

export default App;

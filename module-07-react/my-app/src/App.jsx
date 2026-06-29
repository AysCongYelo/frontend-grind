import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Header() {
  const theme = useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}

export default App;

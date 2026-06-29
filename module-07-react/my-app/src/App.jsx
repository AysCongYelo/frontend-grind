import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to="/about">About</Link>
    </>
  );
}
function About() {
  return <h1>About Page</h1>;
}

function NotFound() {
  return <h1>404 - Page Not Found</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

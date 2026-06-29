function App() {
  const status = "";

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "success") {
    return <h1>Data Loaded!</h1>;
  }

  if (status === "error") {
    return <h1>Something went wrong.</h1>;
  }

  return <h1>Unknown Status</h1>;
}

export default App;

function App() {
  const handleSubmit = (e) => {
    // e.preventDefault();

    console.log("Form Submitted!");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

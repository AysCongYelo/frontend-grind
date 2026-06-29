function App() {
  const users = [
    { id: 1, name: "Juan", active: true },
    { id: 2, name: "Maria", active: false },
    { id: 3, name: "Pedro", active: true },
  ];

  return (
    <>
      {users
        .filter((user) => user.active)
        .map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
    </>
  );
}

export default App;

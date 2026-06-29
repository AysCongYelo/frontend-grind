import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function fetchUsers() {
      console.log("Fetching users...");
    }

    fetchUsers();
  }, []);

  return <h1>Fetch Example</h1>;
}

export default App;

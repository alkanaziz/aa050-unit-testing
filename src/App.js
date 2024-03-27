import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const _users = await response.json();
      // console.log(_users)
      setUsers(_users)

    } catch (error) {
      console.log("Error beim Fetch:", error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <h1>User List</h1>
      <ol>
        {users.map((user) => {
          return (
            <li key={user.id}>{user.name}</li>
          )
        })}
      </ol>
    </div>
  );
}

export default App;

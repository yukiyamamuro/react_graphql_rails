import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import fetchGraphQL from './fetchGraphQL';

function App() {
  const [lastName, setLastName] = useState(null);
  const [firstName, setFirstName] = useState(null);

  useEffect(() => {
    let isMounted = true;
    fetchGraphQL(`
      query Users {
        users(first: 2){
          nodes{
            lastName
            firstName
          }
        }
      }
    `).then(response => {
      if (!isMounted) {
        return;
      }
      const data = response.data;
      setFirstName(data.users.nodes[0].firstName);
      setLastName(data.users.nodes[0].lastName);
    }).catch(error => {
      console.error(error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {firstName != null ? `FirstName: ${firstName}` : "Loading"}
        </p>
        <p>
          {lastName != null ? `LastName: ${lastName}` : "Loading"}
        </p>
      </header>
    </div>
  );
}

export default App;

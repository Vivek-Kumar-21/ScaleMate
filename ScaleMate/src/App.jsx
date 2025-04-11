import { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setIsAuthenticated(true);
    setUsername(user);
  };

  const handleLogout = async () => {
    await fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include',
    });
    setIsAuthenticated(false);
    setUsername('');
  };

  useEffect(() => {
    fetch('http://localhost:5000/protected', {
      credentials: 'include',
    }).then(async (res) => {
      if (res.ok) {
        const data = await res.json();
        setIsAuthenticated(true);
        setUsername(data.message.split(', ')[1].replace('!', ''));
      }
    });
  }, []);

  return isAuthenticated ? (
    <Dashboard username={username} onLogout={handleLogout} />
  ) : (
    <Login onLogin={handleLogin} />
  );
}

export default App;

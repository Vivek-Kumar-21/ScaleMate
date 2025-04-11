import { useEffect, useState } from 'react';

const Dashboard = ({ username, onLogout }) => {
  const [home, setHome] = useState('');
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/home')
      .then(res => res.json())
      .then(data => setHome(data.message));

    fetch('http://localhost:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data.projects));

    fetch('http://localhost:5000/teams')
      .then(res => res.json())
      .then(data => setTeams(data.teams));
  }, []);

  return (
    <div className="min-h-screen bg-scale-darker text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">{home} - {username}</h1>
        <button onClick={onLogout} className="bg-scale-red px-4 py-2 rounded-xl">Logout</button>
      </div>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Projects</h2>
        <ul className="space-y-2">
          {projects.map(p => (
            <li key={p.id} className="bg-scale-light p-4 rounded-xl shadow">{p.name}: {p.description}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Teams</h2>
        <ul className="space-y-2">
          {teams.map(t => (
            <li key={t.id} className="bg-scale-light p-4 rounded-xl shadow">
              {t.name} - {t.focus} ({t.size} members)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;

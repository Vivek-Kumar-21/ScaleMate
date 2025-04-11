import { useEffect, useState } from 'react';
import './Dashboard.css'; // Reuse same styles

const TeamPage = ({ username, onLogout }) => {
  const [teams, setTeams] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newTeam, setNewTeam] = useState({ name: '', focus: '', size: '' });

  useEffect(() => {
    fetch('http://localhost:5000/teams')
      .then(res => res.json())
      .then(data => setTeams(data.teams));
  }, []);

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    if (newTeam.name && newTeam.focus && newTeam.size) {
      setTeams([...teams, { id: Date.now(), ...newTeam }]);
      setNewTeam({ name: '', focus: '', size: '' });
      setShowForm(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Teams - {username}</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      <button className="add-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Cancel' : 'Add New Team'}
      </button>

      {showForm && (
        <form onSubmit={handleTeamSubmit} className="entry-form">
          <input
            type="text"
            placeholder="Team Name"
            value={newTeam.name}
            onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Focus Area"
            value={newTeam.focus}
            onChange={(e) => setNewTeam({ ...newTeam, focus: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Size"
            value={newTeam.size}
            onChange={(e) => setNewTeam({ ...newTeam, size: e.target.value })}
            required
          />
          <button type="submit">Add</button>
        </form>
      )}

      <section>
        <h2>Teams</h2>
        <ul className="card-grid">
          {teams.map(t => (
            <li key={t.id} className="card">
              {t.name} - {t.focus} ({t.size} members)
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default TeamPage;

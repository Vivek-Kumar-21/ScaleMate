import { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = ({ username, onLogout }) => {
  const [home, setHome] = useState('');
  const [projects, setProjects] = useState([]);
  const [teams, setTeams] = useState([]);

  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showTeamForm, setShowTeamForm] = useState(false);

  const [newProject, setNewProject] = useState({ name: '', description: '' });
  const [newTeam, setNewTeam] = useState({ name: '', focus: '', size: '' });

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

  const handleProjectSubmit = (e) => {
    e.preventDefault();
    if (newProject.name && newProject.description) {
      setProjects([...projects, { id: Date.now(), ...newProject }]);
      setNewProject({ name: '', description: '' });
      setShowProjectForm(false);
    }
  };

  const handleTeamSubmit = (e) => {
    e.preventDefault();
    if (newTeam.name && newTeam.focus && newTeam.size) {
      setTeams([...teams, { id: Date.now(), ...newTeam }]);
      setNewTeam({ name: '', focus: '', size: '' });
      setShowTeamForm(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>{home} - {username}</h1>
        <button onClick={onLogout}>Logout</button>
      </div>

      <div className="form-buttons">
        <button className="add-btn" onClick={() => setShowProjectForm(!showProjectForm)}>
          {showProjectForm ? 'Cancel Project' : 'Add Project'}
        </button>
        <button className="add-btn" onClick={() => setShowTeamForm(!showTeamForm)}>
          {showTeamForm ? 'Cancel Team' : 'Add Team'}
        </button>
      </div>

      {showProjectForm && (
        <form onSubmit={handleProjectSubmit} className="entry-form">
          <input
            type="text"
            placeholder="Project Name"
            value={newProject.name}
            onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Description"
            value={newProject.description}
            onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            required
          />
          <button type="submit">Add Project</button>
        </form>
      )}

      {showTeamForm && (
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
            placeholder="Number of Members"
            value={newTeam.size}
            onChange={(e) => setNewTeam({ ...newTeam, size: e.target.value })}
            required
          />
          <button type="submit">Add Team</button>
        </form>
      )}

      <section>
        <h2>Projects</h2>
        <ul className="card-grid">
          {projects.map(p => (
            <li key={p.id} className="card">{p.name}: {p.description}</li>
          ))}
        </ul>
      </section>

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

export default Dashboard;

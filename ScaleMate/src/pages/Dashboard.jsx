import { motion } from 'framer-motion';
import { TrendingUp, Users, Folder, Activity, AlertTriangle } from 'lucide-react';

const TeamCard = ({ name, size, focus, skills, avatars }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="team-card"
  >
    <h3 className="text-xl font-semibold mb-3">{name}</h3>
    <div className="flex items-center gap-2 mb-2">
      <Users className="w-4 h-4 text-scale-purple" />
      <span>{size} members</span>
    </div>
    <p className="text-gray-400 mb-2">{focus}</p>
    <div className="flex -space-x-2 mb-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt="Team member"
          className="w-8 h-8 rounded-full border-2 border-scale-light"
        />
      ))}
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="px-2 py-1 bg-scale-lighter rounded-full text-sm">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const StatCard = ({ icon: Icon, label, value, trend }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="stat-card"
  >
    <div className="flex items-center gap-3 mb-2">
      <Icon className="w-5 h-5 text-scale-teal" />
      <span className="text-gray-400">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-2xl font-bold">{value}</span>
      {trend && (
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-green-400 text-sm"
        >
          +{trend}%
        </motion.span>
      )}
    </div>
  </motion.div>
);

const Alert = ({ type, message }) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    className={`alert-card ${type}`}
  >
    <AlertTriangle className={`w-5 h-5 ${type === 'urgent' ? 'text-scale-red' : 'text-yellow-500'}`} />
    <span>{message}</span>
  </motion.div>
);

const Dashboard = () => {
  const teams = [
    {
      name: 'Frontend Team',
      size: 8,
      focus: 'User Interface Development',
      skills: ['React', 'JavaScript', 'Tailwind'],
      avatars: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100'
      ]
    },
    {
      name: 'Backend Team',
      size: 6,
      focus: 'API Development',
      skills: ['Python', 'Flask', 'PostgreSQL'],
      avatars: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'
      ]
    },
    {
      name: 'Design Team',
      size: 4,
      focus: 'User Experience',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      avatars: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold mb-6">Teams Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <TeamCard key={team.name} {...team} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Key Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={Users} label="Total Team Size" value="18" trend="12" />
          <StatCard icon={Folder} label="Active Projects" value="24" />
          <StatCard icon={TrendingUp} label="Growth Rate" value="32%" trend="8" />
          <StatCard icon={Activity} label="Scaling Health" value="Optimal" />
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Recent Alerts</h2>
        <div className="space-y-4">
          <Alert
            type="urgent"
            message="Backend Team reaching capacity - Consider hiring additional developers"
          />
          <Alert
            type="warning"
            message="Design Team needs additional UI/UX specialist"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
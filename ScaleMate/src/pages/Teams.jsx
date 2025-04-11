import { motion } from 'framer-motion';
import { Users, Mail, Phone } from 'lucide-react';

const TeamMember = ({ name, role, email, phone, skills, avatar }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-scale-light p-6 rounded-2xl shadow-lg"
  >
    <div className="flex items-start gap-4">
      <img
        src={avatar}
        alt={name}
        className="w-16 h-16 rounded-full object-cover"
      />
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-gray-400 mb-3">{role}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-scale-teal" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Phone className="w-4 h-4 text-scale-teal" />
            <span>{phone}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 bg-scale-lighter rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Teams = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Frontend Lead",
      email: "sarah.j@scalesync.com",
      phone: "+1 (555) 123-4567",
      skills: ["React", "TypeScript", "UI/UX"],
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
    },
    {
      name: "Michael Chen",
      role: "Backend Developer",
      email: "michael.c@scalesync.com",
      phone: "+1 (555) 234-5678",
      skills: ["Python", "Node.js", "PostgreSQL"],
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      email: "emily.r@scalesync.com",
      phone: "+1 (555) 345-6789",
      skills: ["Figma", "Prototyping", "User Research"],
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Team Members</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button flex items-center gap-2"
        >
          <Users className="w-5 h-5" />
          Add Team Member
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {teamMembers.map((member) => (
          <TeamMember key={member.email} {...member} />
        ))}
      </div>
    </motion.div>
  );
};

export default Teams;
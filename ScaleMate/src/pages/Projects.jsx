import { motion } from 'framer-motion';
import { FolderKanban, Calendar, Users, Plus } from 'lucide-react';

const ProjectCard = ({ name, description, deadline, taskCount, team, progress }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-scale-light p-6 rounded-2xl shadow-lg"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-semibold">{name}</h3>
      <span className="px-3 py-1 bg-scale-lighter rounded-full text-sm">
        {progress}%
      </span>
    </div>
    
    <p className="text-gray-400 mb-4">{description}</p>
    
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Calendar className="w-4 h-4 text-scale-teal" />
        <span>Due {deadline}</span>
      </div>
      
      <div className="flex items-center gap-2 text-sm">
        <FolderKanban className="w-4 h-4 text-scale-purple" />
        <span>{taskCount} tasks</span>
      </div>
      
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-scale-teal" />
        <div className="flex -space-x-2">
          {team.map((member, index) => (
            <img
              key={index}
              src={member.avatar}
              alt={member.name}
              className="w-6 h-6 rounded-full border-2 border-scale-light"
              title={member.name}
            />
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      name: "Mobile App Redesign",
      description: "Revamping the user interface for better engagement",
      deadline: "March 30, 2024",
      taskCount: 24,
      progress: 65,
      team: [
        { name: "Sarah Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" },
        { name: "Michael Chen", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" }
      ]
    },
    {
      name: "API Integration",
      description: "Implementing new payment gateway APIs",
      deadline: "April 15, 2024",
      taskCount: 18,
      progress: 30,
      team: [
        { name: "Emily Rodriguez", avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100" },
        { name: "David Kim", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100" }
      ]
    },
    {
      name: "Analytics Dashboard",
      description: "Building real-time analytics dashboard",
      deadline: "April 30, 2024",
      taskCount: 32,
      progress: 15,
      team: [
        { name: "Lisa Wang", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100" },
        { name: "James Wilson", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100" }
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
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Projects</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Project
        </motion.button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
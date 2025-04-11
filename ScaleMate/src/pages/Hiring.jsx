import { motion } from 'framer-motion';
import { UserPlus, Clock, User, Building } from 'lucide-react';

const RoleCard = ({ title, department, location, stage, timeline, recruiter }) => {
  const stages = ['Posted', 'Screening', 'Interviewing', 'Offer', 'Hired'];
  const currentStageIndex = stages.indexOf(stage);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-scale-light p-6 rounded-2xl shadow-lg"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Building className="w-4 h-4" />
            <span>{department}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{timeline}</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <User className="w-4 h-4 text-scale-teal" />
          <span>Recruiter: {recruiter}</span>
        </div>

        <div className="flex items-center gap-2">
          {stages.map((s, index) => (
            <div key={s} className="flex-1 flex items-center">
              <div
                className={`h-2 w-full ${
                  index <= currentStageIndex
                    ? 'bg-scale-teal'
                    : 'bg-scale-lighter'
                }`}
              />
              <span
                className={`text-xs ${
                  index === currentStageIndex ? 'text-scale-teal' : 'text-gray-400'
                }`}
              >
                {s}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Hiring = () => {
  const openRoles = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      stage: "Interviewing",
      timeline: "2 weeks",
      recruiter: "Sarah Johnson"
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Remote",
      stage: "Screening",
      timeline: "1 week",
      recruiter: "Michael Chen"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      stage: "Posted",
      timeline: "3 days",
      recruiter: "Emily Rodriguez"
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
        <h2 className="text-3xl font-bold">Open Positions</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="glow-button flex items-center gap-2"
        >
          <UserPlus className="w-5 h-5" />
          Post New Role
        </motion.button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {openRoles.map((role) => (
          <RoleCard key={role.title} {...role} />
        ))}
      </div>
    </motion.div>
  );
};

export default Hiring;
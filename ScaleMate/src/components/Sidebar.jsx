import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users, FolderKanban, UserPlus } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { to: "/", icon: LayoutDashboard, label: "Dashboard" },
    { to: "/teams", icon: Users, label: "Teams" },
    { to: "/projects", icon: FolderKanban, label: "Projects" },
    { to: "/hiring", icon: UserPlus, label: "Hiring" }
  ];

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-64 bg-scale-light p-6 flex flex-col gap-8"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="flex items-center gap-3"
      >
        <LayoutDashboard className="w-8 h-8 text-scale-teal" />
        <h1 className="text-2xl font-bold">ScaleSync</h1>
      </motion.div>
      
      <nav className="flex flex-col gap-2">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <Icon className="w-5 h-5" />
              <span>{label}</span>
            </motion.div>
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;
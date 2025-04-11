import { useState } from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        onLogin();
      } else {
        const data = await response.json();
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-scale-darker flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-scale-light p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <div className="flex items-center gap-3 mb-8">
          <LogIn className="w-8 h-8 text-scale-teal" />
          <h1 className="text-2xl font-bold">Welcome to ScaleSync</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full px-4 py-3 bg-scale-darker rounded-xl border border-scale-lighter focus:border-scale-teal focus:ring-1 focus:ring-scale-teal outline-none transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full px-4 py-3 bg-scale-darker rounded-xl border border-scale-lighter focus:border-scale-teal focus:ring-1 focus:ring-scale-teal outline-none transition-all"
              required
            />
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-scale-red text-sm"
            >
              {error}
            </motion.p>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="glow-button w-full flex items-center justify-center gap-2"
          >
            {loading ? 'Logging in...' : 'Log In'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
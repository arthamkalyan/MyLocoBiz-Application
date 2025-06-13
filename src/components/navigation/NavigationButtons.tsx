
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const NavigationButtons = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="ghost" className="text-gray-700 hover:text-cyan-600">
          Sign In
        </Button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white hover:from-cyan-600 hover:to-orange-600">
          Get Started
        </Button>
      </motion.div>
    </div>
  );
};

export default NavigationButtons;

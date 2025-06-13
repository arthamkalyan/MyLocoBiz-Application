
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div 
      className="flex items-center space-x-3 nav-logo"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div className="relative">
        <motion.img 
          src="public\images\icon.png" 
          alt="MyLocoBiz Logo" 
          className="w-10 h-10"
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
        />
      </motion.div>

      <motion.h1 
        className="text-2xl font-bold text-gray-800 hover:text--600 transition-colors duration-300"
        whileHover={{ 
          scale: 1.02
        }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="text-xl font-bold">
        <span className="text-[#309898]">My</span>
        <span className="text-[#224156]">LocoBiz</span>
        </h2>

      </motion.h1>
    </motion.div>
  );
};

export default Logo;

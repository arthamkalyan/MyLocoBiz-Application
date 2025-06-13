
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { menuItemVariants } from './navigationAnimations';

const NavigationItems = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Integrations', path: '/integrations' },
    { name: 'FAQ', path: '/faq' }

  ];

  return (
    <div className="ml-10 flex items-baseline space-x-8">
      {navItems.map((item, i) => (
        <motion.div
          key={item.name}
          custom={i}
          initial="closed"
          animate="open"
          variants={menuItemVariants}
        >
          <Link to={item.path}>
            <motion.div
              className="nav-item text-foreground/70 hover:text-primary transition-colors duration-200 relative font-inter"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-primary/60"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default NavigationItems;

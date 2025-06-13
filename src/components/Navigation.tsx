
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { initializeNavigationAnimations } from './navigation/navigationAnimations';
import Logo from './navigation/Logo';
import NavigationItems from './navigation/NavigationItems';
import NavigationButtons from './navigation/NavigationButtons';
import MobileMenu from './navigation/MobileMenu';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 0.95)']
  );

  useEffect(() => {
    initializeNavigationAnimations();
  }, []);

  return (
    <motion.nav 
      className="fixed top-0 w-full backdrop-blur-md z-50 border-b border-gray-200"
      style={{ backgroundColor }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />

          <div className="hidden md:block">
            <NavigationItems />
          </div>

          <NavigationButtons />

          <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

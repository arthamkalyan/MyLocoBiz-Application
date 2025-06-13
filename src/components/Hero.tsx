
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Star, MapPin, TrendingUp, Zap, Users, Award, CheckCircle, Globe, Search, Smartphone, BarChart3 } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { SplitText, BlurText, GradientText, FadeContent, CountUp, ShinyText, RotatingText } from './animations/TextAnimations';
import { Aurora, DotGrid, Particles, Waves, GeometricShapes, FloatingElements } from './animations/BackgroundEffects';

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  useEffect(() => {
    gsap.fromTo('.hero-badge', {
      scale: 0.8,
      opacity: 0
    }, {
      scale: 1,
      opacity: 1,
      duration: 0.8,
      ease: 'back.out(1.7)'
    });

    // Professional floating animations
    gsap.to('.floating-card', {
      y: -15,
      duration: 4,
      ease: 'power2.inOut',
      stagger: 0.3,
      repeat: -1,
      yoyo: true
    });

    // GMB specific animations
    gsap.to('.gmb-floating', {
      y: -12,
      x: 8,
      duration: 5,
      ease: 'power2.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.6
    });

    // Subtle rotation for icons
    gsap.to('.rotating-icon', {
      rotation: 360,
      duration: 15,
      ease: 'none',
      repeat: -1
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const rotatingWords = ['Transform', 'Revolutionize', 'Dominate', 'Optimize'];

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden py-2"
    >
      {/* Professional Background Effects */}
      <Aurora className="opacity-20" />
      <DotGrid className="opacity-10" />
      <Particles count={60} className="opacity-40" />
      <GeometricShapes className="opacity-15" />
      <FloatingElements className="opacity-25" />
      <Waves className="opacity-30" />
      
      {/* Professional GMB Cards - Mobile Responsive */}
      <motion.div 
        className="gmb-floating absolute top-16 left-4 md:top-20 md:left-16 w-24 h-24 md:w-32 md:h-32 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border border-white/60 p-3 md:p-4"
        whileHover={{ scale: 1.05, rotate: 3 }}
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="rotating-icon w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center">
          <Search className="w-8 h-8 md:w-12 md:h-12 text-white" />
        </div>
        <div className="absolute -bottom-1 -right-1 md:-bottom-2 md:-right-2 w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
          <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
        </div>
      </motion.div>

      <motion.div 
        className="gmb-floating absolute top-32 right-4 md:top-40 md:right-20 w-20 h-20 md:w-28 md:h-28 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border border-white/60 p-2 md:p-3"
        whileHover={{ scale: 1.05, rotate: -3 }}
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="rotating-icon w-full h-full bg-gradient-to-br from-green-500 to-green-600 rounded-lg md:rounded-xl flex items-center justify-center">
          <MapPin className="w-6 h-6 md:w-10 md:h-10 text-white" />
        </div>
      </motion.div>

      

      <motion.div 
        className="gmb-floating absolute bottom-32 right-4 md:bottom-40 md:right-16 w-24 h-24 md:w-32 md:h-32 bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl shadow-2xl border border-white/60 p-3 md:p-4"
        whileHover={{ scale: 1.05, rotate: 2 }}
        initial={{ opacity: 0, scale: 0.8, x: 50, y: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <div className="rotating-icon w-full h-full bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg md:rounded-xl flex items-center justify-center relative">
          <Smartphone className="w-8 h-8 md:w-12 md:h-12 text-white" />
          <motion.div
            className="absolute top-1 right-1 md:top-2 md:right-2 w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Professional Floating Stats Cards - Mobile Responsive */}
      

     

      <motion.div 
        className="floating-card absolute bottom-16 left-12 md:bottom-32 md:left-20 bg-white/95 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-4 shadow-xl border border-white/60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        whileHover={{ scale: 1.03, y: -5 }}
      >
        <div className="flex items-center space-x-2">
          <Users className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
          <span className="text-xs md:text-sm font-medium text-gray-700">Businesses</span>
        </div>
        <div className="text-xl md:text-2xl font-bold text-purple-600 mt-1">
          <CountUp end={100} suffix="+" />
        </div>
      </motion.div>

     

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Professional Badge */}
          <motion.div 
            className="hero-badge inline-flex items-center px-4 md:px-8 py-2 md:py-4 bg-white/95 backdrop-blur-sm border border-blue-200/60 text-blue-800 rounded-full text-xs md:text-sm font-medium mb-6 md:mb-8 shadow-xl"
            whileHover={{ 
              scale: 1.03, 
              boxShadow: '0 20px 40px rgba(59, 130, 246, 0.25)',
              borderColor: 'rgba(59, 130, 246, 0.5)'
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            >
              <Star className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3 text-yellow-500" />
            </motion.div>
           
            <motion.div className="ml-2 md:ml-3 flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.1 }}
                >
                  <Star className="h-3 w-3 md:h-4 md:w-4 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Main Heading - Mobile Responsive */}
          <div className="mb-6 md:mb-8">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-2">
              <RotatingText words={rotatingWords} className="text-blue-600" /> Your
            </div>
            <div className="mt-2">
              <ShinyText>
                <GradientText 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold block"
                  gradient="from-blue-600 via-purple-600 to-teal-600"
                >
                  Google My Business
                </GradientText>
              </ShinyText>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mt-2">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                Performance
              </motion.span>
            </div>
          </div>

          {/* Enhanced Subtitle - Mobile Responsive */}
          <FadeContent direction="up" delay={0.8} className="mb-8 md:mb-12">
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              Tults and transform your 
              <motion.span 
                className="text-blue-600 font-semibold"
                whileHover={{ scale: 1.05, color: '#2563eb' }}
                transition={{ duration: 0.2 }}
              > Google My Business</motion.span> into a 
              <motion.span 
                className="text-purple-600 font-semibold"
                whileHover={{ scale: 1.05, color: '#9333ea' }}
                transition={{ duration: 0.2 }}
              > customer acquisition machine</motion.span>.
            </motion.p>
          </FadeContent>

          {/* Professional Features Grid - Mobile Responsive */}
          <FadeContent direction="up" delay={1} className="mb-8 md:mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 max-w-4xl mx-auto px-4">
              {[
                { icon: CheckCircle, text: 'Automated Reviews', color: 'text-green-600' },
                { icon: TrendingUp, text: 'Local Rankings', color: 'text-blue-600' },
                { icon: Zap, text: 'AI Optimization', color: 'text-purple-600' },
                { icon: MapPin, text: 'Geographic Tracking', color: 'text-teal-600' }
              ].map((feature, i) => (
                <motion.div 
                  key={i}
                  className="flex flex-col md:flex-row items-center justify-center space-y-1 md:space-y-0 md:space-x-2 bg-white/70 backdrop-blur-sm rounded-lg md:rounded-xl p-2 md:p-3 shadow-lg border border-white/40"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)'
                  }}
                >
                  <feature.icon className={`h-4 w-4 md:h-5 md:w-5 ${feature.color}`} />
                  <span className="text-xs md:text-sm font-medium text-gray-800 text-center md:text-left">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </FadeContent>

          {/* Enhanced CTA Buttons - Mobile Responsive */}
          <FadeContent direction="up" delay={1.4} className="mb-8 md:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
              <motion.div
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: '0 25px 50px rgba(59, 130, 246, 0.35)'
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-xl border-0 relative overflow-hidden group"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-30"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  Start Free 14-Day Trial
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:bg-gray-50 rounded-xl backdrop-blur-sm bg-white/80"
                >
                  <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  See Live Demo
                </Button>
              </motion.div>
            </div>
          </FadeContent>

          {/* Trust Indicators - Mobile Responsive */}
          <FadeContent direction="up" delay={1.6}>
            <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6 px-4">
              Trusted by local businesses and Google My Business experts worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 opacity-70 px-4">
              {['Google Partner', 'GMB Certified', 'Local SEO Verified', 'AI Powered'].map((brand, i) => (
                <motion.div
                  key={brand}
                  className="text-xs md:text-sm font-medium text-gray-600 px-3 md:px-4 py-1 md:py-2 bg-white/80 rounded-lg border border-gray-200/60 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 1.8 + i * 0.1,
                    duration: 0.5
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    y: -2
                  }}
                >
                  {brand}
                </motion.div>
              ))}
            </div>
          </FadeContent>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 8, 0]
        }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <motion.div 
          className="w-5 h-8 md:w-6 md:h-10 border-2 border-gray-400 rounded-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.1, borderColor: '#3b82f6' }}
        >
          <motion.div 
            className="w-1 h-2 md:h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-1 md:mt-2"
            animate={{ 
              y: [0, 8, 0]
            }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

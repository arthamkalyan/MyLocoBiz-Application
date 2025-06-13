
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ScrollReveal, FadeContent, GradientText } from './animations/TextAnimations';
import { Aurora } from './animations/BackgroundEffects';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white relative overflow-hidden" id="contact">
      <Aurora className="opacity-30" />
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-10 left-10 w-64 h-64 rounded-full bg-white/10 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <ScrollReveal>
          <motion.h2 
            className="text-4xl sm:text-5xl font-bold mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Dominate Your
            <span className="block">
              <GradientText gradient="from-yellow-300 to-orange-300">
                Local Market?
              </GradientText>
            </span>
          </motion.h2>
        </ScrollReveal>
        
        <FadeContent direction="up" delay={0.2}>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Join thousands of successful local businesses who trust 
            <span className="font-semibold text-yellow-300"> MylocoBiz </span> 
            to drive their growth. Start your free trial today and see results in just 30 days.
          </p>
        </FadeContent>
        
        <FadeContent direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 20px 40px rgba(255, 255, 255, 0.2)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/Pricing"> 
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-4 transition-all duration-300 shadow-xl font-semibold rounded-xl"
              >
                 14-Day Trial
                
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.div>
              </Button>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/dashboard">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-white text-white :bg-white/10 text-lg px-8 py-4 backdrop-blur-sm rounded-xl"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Demo Dashboard
                </Button>
              </Link>
            </motion.div>
          </div>
        </FadeContent>
        
        <FadeContent direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-white/90">
            {[
              'No credit card required',
              'Setup in under 5 minutes',
              'Cancel anytime'
            ].map((text, i) => (
              <motion.div 
                key={text}
                className="flex items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
                </motion.div>
                <span>{text}</span>
              </motion.div>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default CTA;

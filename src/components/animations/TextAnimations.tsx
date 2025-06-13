
import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export const SplitText = ({ children, className = '', delay = 0 }: SplitTextProps) => {
  const letters = Array.from(children);
  
  return (
    <motion.div className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: 'easeOut'
          }}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface BlurTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const BlurText = ({ children, className = '', delay = 0 }: BlurTextProps) => {
  return (
    <motion.div
      initial={{ filter: 'blur(10px)', opacity: 0 }}
      animate={{ filter: 'blur(0px)', opacity: 1 }}
      transition={{ duration: 0.8, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  gradient?: string;
}

export const GradientText = ({ children, className = '', gradient = 'from-blue-600 to-purple-600' }: GradientTextProps) => {
  return (
    <motion.span
      className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.span>
  );
};

interface FadeContentProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const FadeContent = ({ children, className = '', direction = 'up', delay = 0 }: FadeContentProps) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 30, x: 0 };
      case 'down': return { y: -30, x: 0 };
      case 'left': return { x: 30, y: 0 };
      case 'right': return { x: -30, y: 0 };
      default: return { y: 30, x: 0 };
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...getInitialPosition() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export const ScrollReveal = ({ children, className = '' }: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface CountUpProps {
  end: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
}

export const CountUp = ({ end, duration = 2, className = '', prefix = '', suffix = '' }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const increment = end / (duration * 60);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
}

export const ShinyText = ({ children, className = '' }: ShinyTextProps) => {
  return (
    <motion.div
      className={`relative inline-block ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
        animate={{
          x: [-100, 200]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 2
        }}
        style={{ transform: 'skewX(-20deg)' }}
      />
      {children}
    </motion.div>
  );
};

interface RotatingTextProps {
  words: string[];
  className?: string;
}

export const RotatingText = ({ words, className = '' }: RotatingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <motion.span
      key={currentIndex}
      initial={{ opacity: 0, y: 20, rotateX: 90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, rotateX: -90 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`inline-block ${className}`}
    >
      {words[currentIndex]}
    </motion.span>
  );
};

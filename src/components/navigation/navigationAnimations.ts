
export const menuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  open: {
    opacity: 1,
    height: 'auto',
    scale: 1,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  }
};

export const menuItemVariants = {
  closed: { 
    x: -20, 
    opacity: 0
  },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

export const initializeNavigationAnimations = () => {
  // Dynamic import to avoid SSR issues
  import('gsap').then(({ gsap }) => {
    // Professional navigation items animation
    gsap.fromTo('.nav-item', 
      { 
        y: -20, 
        opacity: 0
      },
      { 
        y: 0, 
        opacity: 1,
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power2.out',
        delay: 0.2
      }
    );

    // Professional logo animation
    gsap.fromTo('.nav-logo', 
      { 
        scale: 0.8, 
        opacity: 0
      },
      { 
        scale: 1, 
        opacity: 1,
        duration: 0.8, 
        ease: 'power2.out',
        delay: 0.1
      }
    );

    // Subtle floating animation for logo
    gsap.to('.nav-logo', {
      y: -2,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  });
};


import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, FadeContent, GradientText } from './animations/TextAnimations';
import { Particles } from './animations/BackgroundEffects';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Owner, Johnson's Bakery",
      content: "LocalPro helped us increase our online visibility by 400%. We're now the #1 bakery in our area and our foot traffic has doubled!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b2e5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Mike Rodriguez",
      role: "Manager, AutoFix Garage",
      content: "The review management feature is incredible. We went from 3.2 to 4.8 stars in just 3 months. Customer bookings are up 250%.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      role: "Director, Chen Medical Practice",
      content: "The automation features save us 10+ hours per week. Our patient satisfaction scores have improved dramatically since using LocalPro.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      role: "Franchise Owner, 5 Locations",
      content: "Managing multiple locations was a nightmare before LocalPro. Now I can oversee everything from one dashboard. ROI has been phenomenal.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      role: "Owner, Park's Fitness Studio",
      content: "The local SEO optimization got us ranking #1 for 'fitness studio near me'. New member sign-ups increased by 300% in the first quarter.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Robert Williams",
      role: "CEO, Williams Dental Group",
      content: "LocalPro's comprehensive approach transformed our online presence. We're now the most reviewed dental practice in our city with a 4.9-star average.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <Particles count={20} className="opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Loved by Local
              <span className="block">
                <GradientText gradient="from-purple-600 to-blue-600">
                  Business Owners
                </GradientText>
              </span>
            </h2>
            <FadeContent direction="up" delay={0.2}>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don't just take our word for it. See what successful local business owners 
                have to say about their experience with LocalPro.
              </p>
            </FadeContent>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-sm border-0 relative overflow-hidden group">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <CardContent className="p-8 relative z-10">
                    <motion.div 
                      className="flex items-center mb-4"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 + i * 0.05 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                    >
                      <Quote className="h-8 w-8 text-purple-400 mb-4" />
                    </motion.div>
                    
                    <motion.p 
                      className="text-gray-700 mb-6 leading-relaxed italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      "{testimonial.content}"
                    </motion.p>
                    
                    <motion.div 
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4 }}
                    >
                      <motion.img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

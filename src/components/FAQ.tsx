
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { ScrollReveal, FadeContent, GradientText } from './animations/TextAnimations';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly can I see results with MyLocoBiz?",
      answer: "Most businesses see initial improvements in their online visibility within 2-4 weeks. Significant ranking improvements typically occur within 3-6 months, depending on your industry and local competition."
    },
    {
      question: "Do I need technical knowledge to use the platform?",
      answer: "Not at all! MyLocoBiz is designed for business owners without technical expertise. Our intuitive dashboard and automated features handle the complex work while you focus on running your business."
    },
    {
      question: "Can I manage multiple business locations?",
      answer: "Yes! Our Professional and Enterprise plans support multiple locations. You can manage all your business listings, reviews, and local SEO from a single dashboard."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer comprehensive support including email support for all plans, priority support for Professional users, and dedicated account management for Enterprise customers. Plus, our knowledge base and video tutorials are available 24/7."
    },
    {
      question: "How does the review management feature work?",
      answer: "Our platform monitors reviews across Google, Facebook, Yelp, and other major sites. We send automated review requests to satisfied customers and provide templates for responding to negative reviews professionally."
    },
    {
      question: "Is there a contract or can I cancel anytime?",
      answer: "All our plans are month-to-month with no long-term contracts. You can upgrade, downgrade, or cancel your subscription at any time. We also offer a 14-day free trial for all new users."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center text-center px-1 py-2 md:py-3"
            >
              <h1 className="text-4xl md:text-5xl font-semibold text-foreground dark:text-white font-poppins leading-tight">
                 <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-4 leading-none gradient-text font-poppins">
                  Frequently Asked
                  <GradientText gradient="from-primary to-primary/60">
                  Questions
                </GradientText>
                </span>
              </h1>
            
             
            </motion.div>
            <FadeContent direction="up" delay={0.2}>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-inter">
                Get answers to the most common questions about MyLocoBiz and how it can help grow your local business.
              </p>
            </FadeContent>
          </div>
        </ScrollReveal>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-secondary/30 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-foreground font-inter pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openItems.includes(index) ? 45 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {openItems.includes(index) ? (
                          <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                        )}
                      </motion.div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openItems.includes(index) ? "auto" : 0,
                        opacity: openItems.includes(index) ? 1 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground font-inter leading-relaxed">
                          {faq.answer}
                        </p>
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

export default FAQ;

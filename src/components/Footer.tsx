
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, FadeContent, GradientText } from './animations/TextAnimations';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <ScrollReveal>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <GradientText gradient="from-blue-400 to-purple-400">
                  MyLocoBiz
                </GradientText>
              </motion.h3>
              
              <FadeContent direction="up" delay={0.2}>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                  Empowering local businesses to dominate their markets through comprehensive 
                  digital marketing solutions and advanced business intelligence.
                </p>
              </FadeContent>
              
              <FadeContent direction="up" delay={0.4}>
                <div className="flex space-x-4">
                  {[
                    { Icon: Facebook, href: '#' },
                    { Icon: Twitter, href: '#' },
                    { Icon: Instagram, href: '#' },
                    { Icon: Linkedin, href: '#' }
                  ].map(({ Icon, href }, i) => (
                    <motion.a 
                      key={i}
                      href={href} 
                      className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 5,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </FadeContent>
            </ScrollReveal>
          </div>
          
          <ScrollReveal>
  <div>
    <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
    <ul className="space-y-2">
      {[
        { name: "Home", link: "/" },
        { name: "Features", link: "/features" },
        { name: "Pricing", link: "/pricing" },
        { name: "Integrations", link: "/integrations" },
        { name: "FAQ", link: "/FAQ" },
       
      ].map((item, i) => (
        <motion.li 
          key={item.name}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <motion.a 
            href={item.link} 
            className="text-gray-400 hover:text-white transition-colors relative inline-block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {item.name}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  </div>
</ScrollReveal>

          
         <ScrollReveal>
  <div>
    <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
    <ul className="space-y-2">
      {[
        { label: 'About', link: '/about' },
        { label: 'Blog', link: '/blog' },
        { label: 'Careers', link: '/careers' },
        { label: 'Contact', link: '/contact' },
        { label: 'Privacy', link: '/privacy' }
      ].map(({ label, link }, i) => (
        <motion.li 
          key={label}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 + 0.2 }}
        >
          <motion.a 
            href={link} 
            className="text-gray-400 hover:text-white transition-colors relative inline-block"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {label}
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400"
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.li>
      ))}
    </ul>
  </div>
</ScrollReveal>

        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-6 mb-4 md:mb-0">
                <motion.div 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Mail className="h-4 w-4 mr-2" />
                  <span>support@MyLocoBiz.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-MyLocoBiz</span>
                </motion.div>
              </div>
              <motion.p 
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                © 2025 MyLocoBiz. All rights reserved.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

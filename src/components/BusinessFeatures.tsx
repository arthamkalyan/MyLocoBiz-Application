import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Timeline } from '@/components/ui/timeline';
import { ProfessionalBackground } from './animations/ProfessionalBackground';
import {
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CursorArrowRaysIcon,
  MapPinIcon,
  PhoneIcon,
  SparklesIcon,
  Cog8ToothIcon,
  ShareIcon,
  PhotoIcon,
  Squares2X2Icon,
  ArrowPathIcon,
  AdjustmentsHorizontalIcon,
  ChartPieIcon,
  ArrowTrendingUpIcon,
  BookmarkIcon,
} from '@heroicons/react/24/solid';

const BusinessFeatures = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  // Define common classes for our cards and add a fixed height (h-40) for uniform sizing.
  const cardClasses =
    'flex items-center bg-white rounded-lg shadow-md p-4 transition-transform duration-300 h-40';

  // Helper function to render each motion card with an icon, title, and description.
  const motionCard = (title, description, Icon, key) => (
    <motion.div
      key={key}
      className={cardClasses}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Icon column */}
      <div className="w-1/3 flex justify-center">
        <Icon className="h-10 w-10 text-[#309898]" />
      </div>
      {/* Title & description column */}
      <div className="w-2/3 pl-4">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-xs text-gray-600 mt-1">{description}</p>
      </div>
    </motion.div>
  );

  // Updated timeline data with three sections.
  const timelineData = [
    {
      title: 'Business Features',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Analytics Dashboard',
              'Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit.',
              ChartBarIcon,
              'bf1'
            )}
            {motionCard(
              'AI Review Management',
              'Manage your reviews effectively with AI insights.',
              ChatBubbleLeftRightIcon,
              'bf2'
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Automated Review Response',
              'Respond to reviews automatically and efficiently.',
              CursorArrowRaysIcon,
              'bf3'
            )}
            {motionCard(
              'Local Rank Tracking',
              'Track local performance and search rank easily.',
              MapPinIcon,
              'bf4'
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Local Geogrid Ranking',
              'Monitor geogrid-based ranking for local SEO.',
              SparklesIcon,
              'bf5'
            )}
            {motionCard(
              'Calls Tracking Feature',
              'Track incoming calls to optimize marketing.Track incoming calls to optimize marketing.Track incoming calls to optimize marketing.',
              PhoneIcon,
              'bf6'
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'Listing Management',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'AI Assistant - Auto Optimise Listing',
              'Enhance your listings with AI-driven optimization.',
              Cog8ToothIcon,
              'lm1'
            )}
            {motionCard(
              'Social Media Posting',
              'Automate your social media content posting.',
              ShareIcon,
              'lm2'
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Media Management',
              'Efficiently manage all your media assets.',
              PhotoIcon,
              'lm3'
            )}
            {motionCard(
              'GBP Bulk Posting',
              'Post multiple listings in bulk for efficiency.',
              Squares2X2Icon,
              'lm4'
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Bulk Update',
              'Update listings in bulk with ease.',
              ArrowPathIcon,
              'lm5'
            )}
          </div>
        </div>
      ),
    },
    {
      title: 'Performance Reporting',
      content: (
        <div className="space-y-4">
         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Customize Reporting Option',
              'Discover our success stories and milestones.',
              AdjustmentsHorizontalIcon,
              'ach1'
            )}
            {motionCard(
              'Automated Reporting',
              'Read detailed case studies of our work.',
              ChartPieIcon,
              'ach2'
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {motionCard(
              'Competitor Tracking',
              'Celebrating industry awards and recognitions.',
              ArrowTrendingUpIcon,
              'ach3'
            )}
            {motionCard(
              'Local Citation Tracking',
              'Hear directly from our satisfied clients.',
              BookmarkIcon,
              'ach4'
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section 
      ref={containerRef} 
      className="relative overflow-hidden"
      style={{
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
      }}
    >
      <ProfessionalBackground />
      <div className="relative z-10 p-6">
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default BusinessFeatures;

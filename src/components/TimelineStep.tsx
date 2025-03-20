import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStepProps {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function TimelineStep({ step, title, description, icon, index }: TimelineStepProps) {
  return (
    <motion.div 
      className="flex gap-8 items-start relative"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <div className="flex-none">
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold relative z-10">
          {icon}
        </div>
        {index < 4 && (
          <div className="absolute top-16 bottom-0 left-8 w-0.5 bg-blue-200" />
        )}
      </div>
      <div className="flex-1 pt-3 pb-12">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Step {step}: {title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
}
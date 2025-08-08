import React from 'react';
import { motion } from 'framer-motion';
import { Play, Heart, Music } from 'lucide-react';
import Button from '../components/Button';

const WelcomeScreen = ({ onStart }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient with subtle shapes */}
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      
      {/* Floating shapes */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1.1, 1, 1.1],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"
      />
      
      {/* Main content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-md mx-auto"
      >
        {/* Logo area */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <div className="relative">
                <Heart className="w-12 h-12 text-white animate-heartbeat" />
                <Music className="w-6 h-6 text-primary-pink absolute -top-1 -right-1" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* App name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
        >
          Break-Up Timer
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-xl text-white/90 mb-12 font-medium"
        >
          Let your music tell the truth.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={itemVariants}
          className="space-y-4"
        >
          <Button
            onClick={onStart}
            variant="gradient"
            className="w-full text-lg py-4"
            icon={Play}
          >
            Start Now
          </Button>
        </motion.div>

        {/* Additional info */}
        <motion.p
          variants={itemVariants}
          className="text-white/70 text-sm mt-8"
        >
          Discover what your playlists reveal about your relationship
        </motion.p>
      </motion.div>
    </div>
  );
};

export default WelcomeScreen;

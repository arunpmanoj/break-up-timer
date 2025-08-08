import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Heart, Zap, Sparkles } from 'lucide-react';

const AnalyzingScreen = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [progress, setProgress] = useState(0);

  const loadingPhrases = [
    "Analyzing emotional harmony… 🎧💔✨",
    "Reading heartbreak levels 📊",
    "Tuning in to your vibes 🎵",
    "Decoding musical chemistry 🔬",
    "Calculating love compatibility 💕",
    "Processing relationship patterns 📈",
    "Matching musical wavelengths 🌊",
    "Finalizing your destiny ⭐"
  ];

  useEffect(() => {
    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Loading phrases animation
    const phraseInterval = setInterval(() => {
      setCurrentPhrase(prev => (prev + 1) % loadingPhrases.length);
    }, 2000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(phraseInterval);
    };
  }, []);

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-pink via-primary-violet to-primary-cool flex items-center justify-center p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-md mx-auto text-center"
      >
        {/* Animated Icons */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
            >
              <Music className="w-10 h-10 text-white" />
            </motion.div>
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-2 -right-2 w-8 h-8 bg-primary-pink rounded-full flex items-center justify-center"
            >
              <Heart className="w-4 h-4 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.h2
            key={currentPhrase}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-display font-bold text-white mb-4"
          >
            {loadingPhrases[currentPhrase]}
          </motion.h2>
          
          <p className="text-white/80 text-lg">
            This might take a moment...
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              className="h-full bg-gradient-to-r from-primary-pink to-primary-violet rounded-full relative"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-white/30 rounded-full"
              />
            </motion.div>
          </div>
          <p className="text-white/70 text-sm mt-2">
            {Math.round(progress)}% complete
          </p>
        </motion.div>

        {/* Animated Elements */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Zap className="w-6 h-6 text-primary-pink" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Sparkles className="w-6 h-6 text-primary-violet" />
          </motion.div>
          
          <motion.div
            animate={{
              y: [0, -8, 0],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Heart className="w-6 h-6 text-primary-warm" />
          </motion.div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl"
        >
          <p className="text-white/80 text-sm">
            💡 Did you know? Music preferences can reveal relationship compatibility patterns!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AnalyzingScreen;

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Share2, RefreshCw, TrendingUp, Calendar, Zap } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const ResultsScreen = ({ result, onTryAgain }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (result) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [result]);

  if (!result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-pink via-primary-violet to-primary-cool flex items-center justify-center">
        <div className="text-white text-center">
          <p>Loading results...</p>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
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

  const heartVariants = {
    normal: { scale: 1 },
    crack: {
      scale: [1, 1.2, 0.8, 1],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.6,
        repeat: 2,
        ease: "easeInOut"
      }
    }
  };

  const confettiVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: [0, 1, 0],
      y: [0, -100, -200],
      transition: {
        duration: 3,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-pink via-primary-violet to-primary-cool p-6 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              variants={confettiVariants}
              initial="hidden"
              animate="visible"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
            />
          ))}
        </div>
      )}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto pt-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Prediction Result
          </h1>
          <p className="text-white/80 text-lg">
            Your musical destiny has been revealed
          </p>
        </motion.div>

        {/* Main Result Card */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card className="text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-pink/10 to-primary-violet/10 rounded-bl-2xl" />
            <div className="relative z-10">
              {/* Heart Icon with Cracking Animation */}
              <motion.div
                variants={heartVariants}
                animate="crack"
                className="flex justify-center mb-6"
              >
                <div className="relative">
                  <Heart className="w-16 h-16 text-primary-pink" />
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 w-16 h-16 border-2 border-primary-pink rounded-full"
                  />
                </div>
              </motion.div>

              {/* Duration Prediction */}
              <div className="mb-6">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                  Estimated Relationship Duration
                </h2>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="w-6 h-6 text-primary-violet" />
                  <span className="text-4xl font-bold text-gradient">
                    {result.duration} Days
                  </span>
                </div>
                <p className="text-gray-600">
                  Based on your musical compatibility analysis
                </p>
              </div>

              {/* Compatibility Score */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-primary-pink" />
                    <span className="font-semibold text-gray-900">Sentiment</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-pink">
                    {Math.round(result.sentiment)}%
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-primary-violet" />
                    <span className="font-semibold text-gray-900">Compatibility</span>
                  </div>
                  <div className="text-2xl font-bold text-primary-violet">
                    {Math.round(result.compatibility)}%
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Mood Graph */}
        <motion.div variants={itemVariants} className="mb-8">
          <Card>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Emotional Journey Over Time
            </h3>
            <div className="h-32 bg-gray-50 rounded-lg p-4 relative">
              <svg className="w-full h-full" viewBox="0 0 300 100">
                <defs>
                  <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FF6B9D" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#6C63FF" />
                  </linearGradient>
                </defs>
                <path
                  d={result.moodData.map((point, index) => {
                    const x = (index / (result.moodData.length - 1)) * 280 + 10;
                    const y = 90 - (point.sentiment / 100) * 80;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  stroke="url(#moodGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d={result.moodData.map((point, index) => {
                    const x = (index / (result.moodData.length - 1)) * 280 + 10;
                    const y = 90 - (point.energy / 100) * 80;
                    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
                  }).join(' ')}
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray="5,5"
                />
              </svg>
              <div className="absolute bottom-2 left-2 text-xs text-gray-500">
                <span className="inline-block w-3 h-0.5 bg-gradient-to-r from-primary-pink to-primary-violet mr-1"></span>
                Sentiment
                <span className="inline-block w-3 h-0.5 bg-primary-violet ml-4 mr-1 border-dashed"></span>
                Energy
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          <Button
            onClick={async () => {
              try {
                // Try native share API first
                if (navigator.share) {
                  await navigator.share({
                    title: 'Break-Up Timer Result',
                    text: `My relationship is predicted to last ${result.duration} days! Check out Break-Up Timer.`,
                    url: window.location.href
                  });
                } else {
                  // Fallback: copy to clipboard
                  await navigator.clipboard.writeText(
                    `My relationship is predicted to last ${result.duration} days! Check out Break-Up Timer.`
                  );
                  alert('Result copied to clipboard!');
                }
              } catch (error) {
                // Handle share cancellation or errors gracefully
                if (error.name === 'AbortError') {
                  // User cancelled the share - this is normal, don't show error
                  return;
                }
                
                // For other errors, try clipboard fallback
                try {
                  await navigator.clipboard.writeText(
                    `My relationship is predicted to last ${result.duration} days! Check out Break-Up Timer.`
                  );
                  alert('Result copied to clipboard!');
                } catch (clipboardError) {
                  // Final fallback - show the text to copy manually
                  const shareText = `My relationship is predicted to last ${result.duration} days! Check out Break-Up Timer.`;
                  alert(`Share this result: ${shareText}`);
                }
              }
            }}
            variant="secondary"
            icon={Share2}
            className="w-full"
          >
            Share Result
          </Button>
          
          <Button
            onClick={onTryAgain}
            variant="gradient"
            icon={RefreshCw}
            className="w-full"
          >
            Try Again
          </Button>
        </motion.div>

        {/* Fun Message */}
        <motion.div
          variants={itemVariants}
          className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-xl text-center"
        >
          <p className="text-white/90 text-sm">
            {result.duration > 200 
              ? "🎉 Looks like you've found your musical soulmate!"
              : result.duration > 100
              ? "💕 There's potential here - keep the music playing!"
              : "🎵 Every relationship teaches us something about ourselves"
            }
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultsScreen;

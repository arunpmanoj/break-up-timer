import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Music, Heart, ExternalLink, Shield } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

const PlaylistInputScreen = ({ onSubmit, onBack }) => {
  const [playlists, setPlaylists] = useState({
    yourPlaylist: '',
    theirPlaylist: ''
  });
  const [isConnected, setIsConnected] = useState(false);

  const handleInputChange = (field, value) => {
    setPlaylists(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSpotifyConnect = () => {
    // Simulate Spotify connection
    setIsConnected(true);
  };

  const handleContinue = () => {
    if (playlists.yourPlaylist && playlists.theirPlaylist) {
      onSubmit(playlists);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-pink via-primary-violet to-primary-cool p-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto pt-8"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <button
            onClick={onBack}
            className="absolute top-8 left-6 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          
          <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
            Connect Your Spotify Playlists
          </h1>
          <p className="text-white/80 text-lg">
            Let's analyze the musical chemistry between you two
          </p>
        </motion.div>

        {/* Playlist Input Cards */}
        <motion.div variants={itemVariants} className="space-y-6 mb-8">
          {/* Your Playlist Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-pink/20 to-primary-violet/20 rounded-bl-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-pink rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Your Playlist</h3>
              </div>
              <Input
                placeholder="Enter your playlist URL or name"
                value={playlists.yourPlaylist}
                onChange={(e) => handleInputChange('yourPlaylist', e.target.value)}
                className="mb-4"
              />
              <p className="text-sm text-gray-500">
                This playlist represents your musical taste and emotional state
              </p>
            </div>
          </Card>

          {/* Their Playlist Card */}
          <Card className="relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-violet/20 to-primary-cool/20 rounded-bl-2xl" />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-violet rounded-full flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Their Playlist</h3>
              </div>
              <Input
                placeholder="Enter their playlist URL or name"
                value={playlists.theirPlaylist}
                onChange={(e) => handleInputChange('theirPlaylist', e.target.value)}
                className="mb-4"
              />
              <p className="text-sm text-gray-500">
                This playlist represents your partner's musical taste and emotional state
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Spotify Connect Button */}
        <motion.div variants={itemVariants} className="mb-6">
          <Button
            onClick={handleSpotifyConnect}
            variant={isConnected ? "secondary" : "primary"}
            className="w-full"
            icon={ExternalLink}
            disabled={isConnected}
          >
            {isConnected ? "Connected to Spotify" : "Connect via Spotify"}
          </Button>
        </motion.div>

        {/* Continue Button */}
        <motion.div variants={itemVariants} className="mb-6">
          <Button
            onClick={handleContinue}
            variant="gradient"
            className="w-full"
            disabled={!playlists.yourPlaylist || !playlists.theirPlaylist || !isConnected}
          >
            Analyze My Love Life
          </Button>
        </motion.div>

        {/* Privacy Tip */}
        <motion.div 
          variants={itemVariants}
          className="flex items-center justify-center gap-2 text-white/70 text-sm"
        >
          <Shield className="w-4 h-4" />
          <span>We never store your data ❤️</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PlaylistInputScreen;

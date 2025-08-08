import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Import screens
import WelcomeScreen from './screens/WelcomeScreen';
import PlaylistInputScreen from './screens/PlaylistInputScreen';
import AnalyzingScreen from './screens/AnalyzingScreen';
import ResultsScreen from './screens/ResultsScreen';

function AppContent() {
  const navigate = useNavigate();
  const [playlistData, setPlaylistData] = useState({
    yourPlaylist: '',
    theirPlaylist: ''
  });
  const [analysisResult, setAnalysisResult] = useState(null);

  const handlePlaylistSubmit = (data) => {
    setPlaylistData(data);
    navigate('/analyzing');
    
    // Simulate analysis
    setTimeout(() => {
      const mockResult = {
        duration: Math.floor(Math.random() * 365) + 30, // 30-395 days
        sentiment: Math.random() * 100,
        compatibility: Math.random() * 100,
        moodData: generateMockMoodData()
      };
      setAnalysisResult(mockResult);
      navigate('/results');
    }, 3000);
  };

  const generateMockMoodData = () => {
    return Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      sentiment: Math.random() * 100,
      energy: Math.random() * 100
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-pink via-primary-violet to-primary-cool">
      <AnimatePresence mode="wait">
        <Routes>
          <Route 
            path="/" 
            element={
              <WelcomeScreen 
                onStart={() => navigate('/playlist')}
              />
            } 
          />
          <Route 
            path="/playlist" 
            element={
              <PlaylistInputScreen 
                onSubmit={handlePlaylistSubmit}
                onBack={() => navigate('/')}
              />
            } 
          />
          <Route 
            path="/analyzing" 
            element={
              <AnalyzingScreen />
            } 
          />
          <Route 
            path="/results" 
            element={
              <ResultsScreen 
                result={analysisResult}
                onTryAgain={() => {
                  setPlaylistData({ yourPlaylist: '', theirPlaylist: '' });
                  setAnalysisResult(null);
                  navigate('/');
                }}
              />
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

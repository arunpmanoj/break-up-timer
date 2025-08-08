import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false, 
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseClasses = 'font-button uppercase tracking-wide px-6 py-3 rounded-xl shadow-soft transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  
  const variants = {
    primary: 'bg-primary-spotify hover:bg-green-600 text-white focus:ring-primary-spotify',
    secondary: 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 focus:ring-primary-violet',
    gradient: 'bg-gradient-to-r from-primary-pink to-primary-violet hover:from-primary-pink/90 hover:to-primary-violet/90 text-white focus:ring-primary-violet',
    outline: 'bg-transparent border-2 border-primary-spotify text-primary-spotify hover:bg-primary-spotify hover:text-white focus:ring-primary-spotify'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="flex items-center justify-center gap-2">
        {Icon && <Icon className="w-4 h-4" />}
        {children}
      </div>
    </motion.button>
  );
};

export default Button;

import React from 'react';
import { motion } from 'framer-motion';

const Input = ({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = 'text',
  className = '',
  icon: Icon,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`space-y-2 ${className}`}
    >
      {label && (
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            block w-full px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-primary-violet focus:border-transparent
            transition-all duration-200
            ${Icon ? 'pl-10' : ''}
            placeholder-gray-400
          `}
          {...props}
        />
      </div>
    </motion.div>
  );
};

export default Input;

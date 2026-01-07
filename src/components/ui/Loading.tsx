import React from 'react';
import { motion } from 'framer-motion';
import { getRandomLoadingMessage } from '../../lib/utils';

interface LoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export const Loading: React.FC<LoadingProps> = ({
  message,
  fullScreen = false,
}) => {
  const displayMessage = message || getRandomLoadingMessage();

  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      {/* Animated Logo */}
      <motion.svg
        width="64"
        height="64"
        viewBox="0 0 100 100"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
      >
        <defs>
          <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#6b8cbe" />
          </linearGradient>
        </defs>
        <path
          d="M 50 30 L 65 50 L 50 70 L 35 50 Z"
          fill="url(#loadingGradient)"
        />
      </motion.svg>

      <p className="text-mythril-400 text-sm animate-pulse">
        {displayMessage}
      </p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-moria-900 flex items-center justify-center z-50">
        {content}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  );
};

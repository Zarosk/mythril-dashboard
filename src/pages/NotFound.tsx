import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Home } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-moria-900">
      <div className="text-center">
        <svg width="80" height="80" viewBox="0 0 100 100" className="mx-auto mb-6 opacity-50">
          <defs>
            <linearGradient id="notFoundGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d1d5db" />
              <stop offset="100%" stopColor="#6b7280" />
            </linearGradient>
          </defs>
          <path
            d="M 50 5 L 90 20 L 90 55 C 90 75, 70 90, 50 95 C 30 90, 10 75, 10 55 L 10 20 Z"
            fill="#1a1a2e"
            stroke="url(#notFoundGrad)"
            strokeWidth="3"
          />
          <path d="M 50 30 L 65 50 L 50 70 L 35 50 Z" fill="#6b7280" />
        </svg>

        <h1 className="text-2xl font-bold text-mythril-200 mb-2">
          You delved too greedily and too deep.
        </h1>
        <p className="text-mythril-500 mb-8">
          The page you're looking for doesn't exist.
        </p>

        <Link to="/">
          <Button variant="primary">
            <Home className="h-4 w-4" />
            Return to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

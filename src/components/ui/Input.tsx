import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-mythril-300">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full bg-moria-800 border border-mythril-700 rounded-lg px-4 py-2.5',
          'text-mythril-100 placeholder-mythril-500',
          'focus:outline-none focus:border-dwarven focus:ring-1 focus:ring-dwarven',
          error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
          className
        )}
        {...props}
      />
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
    </div>
  );
};

import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  className?: string;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  className,
  children,
}) => {
  const variants = {
    default: 'bg-mythril-700 text-mythril-300',
    success: 'bg-green-500/20 text-green-400',
    warning: 'bg-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/20 text-red-400',
    info: 'bg-dwarven/20 text-dwarven-light',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

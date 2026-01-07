import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps {
  className?: string;
  hover?: boolean;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className, hover = false, children }) => {
  return (
    <div
      className={cn(
        'bg-moria-700 border border-white/10 rounded-xl p-6',
        hover && 'hover:border-dwarven/50 hover:shadow-lg hover:shadow-dwarven/10 transition-all cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn('flex items-center justify-between mb-4', className)}>
    {children}
  </div>
);

export const CardTitle: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <h3 className={cn('text-lg font-semibold text-mythril-100', className)}>
    {children}
  </h3>
);

export const CardContent: React.FC<{ className?: string; children: React.ReactNode }> = ({
  className,
  children,
}) => (
  <div className={cn('', className)}>
    {children}
  </div>
);

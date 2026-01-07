import React from 'react';
import { Card } from '../ui/Card';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
}

export const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon,
}) => {
  const isPositive = change && change > 0;
  const isNegative = change && change < 0;

  return (
    <Card className="flex items-start justify-between">
      <div>
        <p className="text-sm text-mythril-500">{title}</p>
        <p className="text-3xl font-bold text-mythril-100 mt-1">{value}</p>
        {change !== undefined && (
          <div className={`flex items-center gap-1 mt-2 text-sm ${
            isPositive ? 'text-green-400' : isNegative ? 'text-red-400' : 'text-mythril-500'
          }`}>
            {isPositive ? <TrendingUp className="h-4 w-4" /> :
             isNegative ? <TrendingDown className="h-4 w-4" /> : null}
            <span>{isPositive ? '+' : ''}{change}% this month</span>
          </div>
        )}
      </div>
      <div className="p-3 bg-dwarven/20 rounded-lg text-dwarven-light">
        {icon}
      </div>
    </Card>
  );
};

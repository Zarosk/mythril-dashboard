import React from 'react';
import { Header } from '../components/layout/Header';
import { StatsCard } from '../components/dashboard/StatsCard';
import { RecentBuilds } from '../components/dashboard/RecentBuilds';
import { QuickActions } from '../components/dashboard/QuickActions';
import { Hammer, Brain, CheckCircle, Zap } from 'lucide-react';
import type { Build } from '../types';

// Mock data - replace with API calls
const mockStats = {
  totalBuilds: 42,
  brainNotes: 127,
  successRate: 94,
  buildsThisMonth: 12,
};

const mockBuilds: Build[] = [
  {
    id: '1',
    taskId: 'MYTHRIL-042',
    project: 'landing-page',
    description: 'A modern SaaS landing page with hero, features, and pricing',
    status: 'completed',
    progress: 100,
    createdAt: new Date(Date.now() - 3600000).toISOString(),
    completedAt: new Date().toISOString(),
  },
  {
    id: '2',
    taskId: 'MYTHRIL-041',
    project: 'auth-api',
    description: 'JWT authentication for Express with login and register',
    status: 'running',
    progress: 60,
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: '3',
    taskId: 'MYTHRIL-040',
    project: 'user-card',
    description: 'React component for user profile display',
    status: 'pending',
    progress: 0,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
];

export const Dashboard: React.FC = () => {
  return (
    <div>
      <Header
        title="Dashboard"
        subtitle="Welcome back to the forge"
      />

      <div className="p-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Total Builds"
            value={mockStats.totalBuilds}
            change={15}
            icon={<Hammer className="h-6 w-6" />}
          />
          <StatsCard
            title="Brain Notes"
            value={mockStats.brainNotes}
            change={8}
            icon={<Brain className="h-6 w-6" />}
          />
          <StatsCard
            title="Success Rate"
            value={`${mockStats.successRate}%`}
            change={2}
            icon={<CheckCircle className="h-6 w-6" />}
          />
          <StatsCard
            title="This Month"
            value={mockStats.buildsThisMonth}
            icon={<Zap className="h-6 w-6" />}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentBuilds builds={mockBuilds} />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

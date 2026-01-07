import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Plus, Brain, Github, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const QuickActions: React.FC = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: Plus,
      label: 'New Build',
      description: 'Create a new project',
      onClick: () => {/* Open Discord or modal */},
      primary: true,
    },
    {
      icon: Brain,
      label: 'Add Note',
      description: 'Store context in brain',
      onClick: () => navigate('/brain'),
    },
    {
      icon: Github,
      label: 'Connect GitHub',
      description: 'Push to repositories',
      onClick: () => navigate('/settings'),
    },
    {
      icon: Settings,
      label: 'Settings',
      description: 'Configure Mythril',
      onClick: () => navigate('/settings'),
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action) => (
            <button
              key={action.label}
              onClick={action.onClick}
              className={`p-4 rounded-lg text-left transition-all ${
                action.primary
                  ? 'bg-dwarven hover:bg-dwarven-light text-white'
                  : 'bg-moria-800 hover:bg-moria-600 text-mythril-100'
              }`}
            >
              <action.icon className="h-5 w-5 mb-2" />
              <p className="font-medium">{action.label}</p>
              <p className={`text-xs mt-0.5 ${
                action.primary ? 'text-white/70' : 'text-mythril-500'
              }`}>
                {action.description}
              </p>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

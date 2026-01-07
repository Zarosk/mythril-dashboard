import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Hammer,
  Brain,
  Settings,
  LogOut,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Builds', href: '/builds', icon: Hammer },
  { name: 'Brain', href: '/brain', icon: Brain },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const external = [
  { name: 'Documentation', href: 'https://docs.mythril.dev', icon: HelpCircle },
  { name: 'Discord', href: 'https://discord.gg/mythril', icon: ExternalLink },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-moria-800 border-r border-white/10 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <svg width="32" height="32" viewBox="0 0 100 100">
            <defs>
              <linearGradient id="sidebarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#a8aeb8" />
              </linearGradient>
            </defs>
            <path
              d="M 50 5 L 90 20 L 90 55 C 90 75, 70 90, 50 95 C 30 90, 10 75, 10 55 L 10 20 Z"
              fill="#1a1a2e"
              stroke="url(#sidebarGradient)"
              strokeWidth="3"
            />
            <path d="M 50 30 L 65 50 L 50 70 L 35 50 Z" fill="#4a6fa5" />
          </svg>
          <span className="text-xl font-bold text-mythril-100 tracking-wide">MYTHRIL</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <NavLink
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-dwarven/20 text-dwarven-light border-l-2 border-dwarven'
                  : 'text-mythril-400 hover:text-mythril-100 hover:bg-white/5'
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      {/* External Links */}
      <div className="p-4 border-t border-white/10 space-y-1">
        {external.map((item) => (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-mythril-500 hover:text-mythril-300 hover:bg-white/5 transition-colors"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </a>
        ))}
      </div>

      {/* User Section */}
      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium text-mythril-400 hover:text-red-400 hover:bg-red-500/10 transition-colors w-full">
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </aside>
  );
};

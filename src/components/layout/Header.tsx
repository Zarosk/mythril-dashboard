import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle }) => {
  return (
    <header className="h-16 border-b border-white/10 bg-moria-800/50 backdrop-blur-sm flex items-center justify-between px-8">
      <div>
        <h1 className="text-xl font-semibold text-mythril-100">{title}</h1>
        {subtitle && (
          <p className="text-sm text-mythril-500">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mythril-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-64 bg-moria-700 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-mythril-100 placeholder-mythril-500 focus:outline-none focus:border-dwarven"
          />
        </div>

        {/* Notifications */}
        <button className="relative p-2 text-mythril-400 hover:text-mythril-100 hover:bg-white/5 rounded-lg transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-forge-glow rounded-full" />
        </button>

        {/* User Avatar */}
        <div className="h-9 w-9 rounded-full bg-dwarven flex items-center justify-center text-white font-semibold">
          M
        </div>
      </div>
    </header>
  );
};

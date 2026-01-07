import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-moria-900">
      <Sidebar />
      <main className="ml-64">
        <Outlet />
      </main>
    </div>
  );
};

import React from 'react';
import { BarChart2 } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center">
          <BarChart2 className="h-8 w-8 text-blue-600 mr-3" />
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
            <p className="text-sm text-gray-500">Real-time business insights</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
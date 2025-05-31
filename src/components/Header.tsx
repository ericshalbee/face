import React from 'react';
import { Facebook } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#1877F2] text-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <Facebook size={40} className="mr-3" />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Official Facebook Support Hub</h1>
            <p className="text-sm md:text-base opacity-90">Verified Resources & Contact Methods</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://www.facebook.com/help" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-[#1877F2] px-4 py-2 rounded-md font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Visit Help Center
          </a>
        </div>
      </div>
    </header>
  );
};
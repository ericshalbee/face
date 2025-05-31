import React from 'react';
import { Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <Facebook size={24} className="mr-2 text-white" />
            <p className="text-lg font-semibold text-white">Facebook Support Hub</p>
          </div>
          <div className="text-sm">
            <p className="font-medium text-center md:text-right">
              Unofficial Resource - Not affiliated with Meta
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 pb-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">
                This website provides links to official Facebook resources only. 
                We do not offer direct Facebook support services.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-4">
              <a href="#" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-sm hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="text-xs text-center md:text-right text-gray-500 mt-4">
          <p>© {new Date().getFullYear()} Facebook Support Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
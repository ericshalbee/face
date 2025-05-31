import React from 'react';
import { AlertTriangle } from 'lucide-react';

export const ScamAlertBanner: React.FC = () => {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-md shadow-sm animate-fade-in">
      <div className="flex items-start">
        <AlertTriangle className="text-amber-500 mr-3 flex-shrink-0 mt-1" size={24} />
        <div>
          <h2 className="text-amber-800 font-bold text-lg">⚠️ Scam Alert: Beware of Fake Support Numbers!</h2>
          <p className="text-amber-700 mt-1">
            Facebook does <span className="font-bold">not</span> offer public 24/7 phone support. Any website or service 
            claiming to offer direct Facebook phone support is likely a scam.
          </p>
          <a 
            href="https://www.facebook.com/help/203305893040179" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-block text-amber-800 font-medium underline hover:text-amber-900"
          >
            Learn how to spot and report scams
          </a>
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { HelpCircle, Search, Shield, UserCog, Lock } from 'lucide-react';
import { SupportCard } from './SupportCard';

export const HelpCenterSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <HelpCircle className="text-[#1877F2] mr-2" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Help Center Portal</h2>
      </div>

      <div className="bg-gray-100 p-3 rounded-md flex items-center mb-6">
        <Search size={20} className="text-gray-500 mr-2" />
        <input 
          type="text" 
          placeholder="Search for help topics..." 
          className="bg-transparent flex-grow border-none focus:outline-none text-gray-700 placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-4">
        <SupportCard 
          icon={<Shield className="text-green-600\" size={20} />}
          title="Account Security & Recovery"
          description="Reset password, recover account, report hacking"
          linkText="Get Help"
          linkUrl="https://www.facebook.com/help/203305893040179"
          verified
        />
        
        <SupportCard 
          icon={<Lock className="text-blue-600\" size={20} />}
          title="Privacy & Safety"
          description="Control your data, manage privacy settings"
          linkText="Privacy Center"
          linkUrl="https://www.facebook.com/privacy/center/"
          verified
        />
        
        <SupportCard 
          icon={<UserCog className="text-purple-600\" size={20} />}
          title="Account Settings"
          description="Update profile, manage notifications, preferences"
          linkText="Settings Help"
          linkUrl="https://www.facebook.com/help/239070709801747"
          verified
        />
      </div>

      <a 
        href="https://www.facebook.com/help/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="mt-6 w-full bg-[#1877F2] text-white py-3 px-4 rounded-md font-medium flex items-center justify-center transition-colors hover:bg-[#1661c6] focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-opacity-50"
      >
        Visit Facebook Help Center
        <HelpCircle size={18} className="ml-2" />
      </a>
    </section>
  );
};
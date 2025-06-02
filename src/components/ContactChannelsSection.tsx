import React from 'react';
import { MessageCircle, Building, AlertOctagon, CheckCircle2 } from 'lucide-react';
import { SupportCard } from './SupportCard';

export const ContactChannelsSection: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <MessageCircle className="text-[#1877F2] mr-2" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Official Contact Channels</h2>
      </div>

      <div className="text-sm text-gray-600 mb-6">
        <p>Facebook primarily offers support through their Help Center and in-app tools rather than direct contact methods.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <SupportCard 
          icon={<Building className="text-blue-600\" size={20} />}
          title="Business Support"
          description="For advertisers and business account issues"
          linkText="Business Help Center"
          linkUrl="https://www.facebook.com/business/help"
          verified
        />
        
        <SupportCard 
          icon={<AlertOctagon className="text-red-600\" size={20} />}
          title="Report a Problem"
          description="Report issues directly within the Facebook app"
          linkText="How to Report Problems"
          linkUrl="https://www.facebook.com/help/1126628984024935"
          verified
        />
        
        <SupportCard 
          icon={<CheckCircle2 className="text-purple-600\" size={20} />}
          title="Meta Verified Support"
          description="Priority support for Meta Verified subscribers"
          linkText="Learn More"
          linkUrl="https://www.facebook.com/help/178774494481770"
          verified
        />
      </div>

      <div className="mt-6 p-4 bg-gray-100 rounded-md">
        <h3 className="font-semibold text-gray-800 mb-1">Important Note:</h3>
        <p className="text-sm text-gray-700">
          Facebook does not offer general public phone support. The phone number (650-543-4800) 
          is for Facebook's corporate office and does not provide customer service.
        </p>
      </div>
    </section>
  );
};

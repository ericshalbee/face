import React from 'react';
import { LayoutGrid, ShoppingCart, Badge as BadgeAd, ShieldAlert } from 'lucide-react';
import { SupportCard } from './SupportCard';

export const SpecializedSupportSection: React.FC = () => {
  return (
    <section className="mt-8 bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <LayoutGrid className="text-[#1877F2] mr-2" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Specialized Support</h2>
      </div>

      <p className="text-sm text-gray-600 mb-6">
        Get help with specific Facebook products and services
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SupportCard 
          icon={<ShoppingCart className="text-green-600\" size={20} />}
          title="Marketplace Issues"
          description="Get help with buying, selling, or reporting items"
          linkText="Marketplace Help"
          linkUrl="https://www.facebook.com/help/1156544111079370"
          verified
        />
        
        <SupportCard 
          icon={<BadgeAd className="text-blue-600\" size={20} />}
          title="Ads Support"
          description="Troubleshoot advertising issues and payments"
          linkText="Ads Help Center"
          linkUrl="https://www.facebook.com/business/help/330994584611146"
          verified
        />
        
        <SupportCard 
          icon={<ShieldAlert className="text-red-600\" size={20} />}
          title="Account Disabled"
          description="Appeal a disabled account or locked features"
          linkText="Submit Appeal"
          linkUrl="https://www.facebook.com/help/contact/317389574998690"
          verified
        />
      </div>

      <div className="mt-6 p-4 border border-blue-200 bg-blue-50 rounded-md">
        <h3 className="font-semibold text-blue-800 mb-1">Support Flowchart</h3>
        <p className="text-sm text-blue-700">
          Most Facebook issues follow this process: 1) Check Help Center, 2) Use in-app reporting, 
          3) Submit specialized form, 4) Wait for response. Direct support is prioritized for 
          business customers and Meta Verified subscribers.
        </p>
      </div>
    </section>
  );
};
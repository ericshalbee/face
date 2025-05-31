import React, { ReactNode } from 'react';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface SupportCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  verified?: boolean;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkUrl,
  verified = false
}) => {
  return (
    <div className="border border-gray-200 rounded-md p-4 transition-all duration-300 hover:shadow-md">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3 mt-1">
          {icon}
        </div>
        <div className="flex-grow">
          <div className="flex items-center">
            <h3 className="font-semibold text-gray-800">{title}</h3>
            {verified && (
              <div className="ml-2 flex items-center text-xs text-green-600 font-medium">
                <CheckCircle size={14} className="mr-1" />
                <span>Official</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          <a 
            href={linkUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center text-sm font-medium text-[#1877F2] hover:underline"
          >
            {linkText}
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
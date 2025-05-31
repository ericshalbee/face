import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faqData';

export const DynamicFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mt-8 bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <HelpCircle className="text-[#1877F2] mr-2" size={24} />
        <h2 className="text-xl font-bold text-gray-800">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-3">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className="border border-gray-200 rounded-md overflow-hidden transition-all duration-300"
          >
            <button
              className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors text-left"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp size={18} className="text-gray-600" />
              ) : (
                <ChevronDown size={18} className="text-gray-600" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
                {faq.link && (
                  <a 
                    href={faq.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[#1877F2] hover:underline"
                  >
                    {faq.link.text}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
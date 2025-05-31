import React from 'react';
import { Header } from './components/Header';
import { HelpCenterSection } from './components/HelpCenterSection';
import { ContactChannelsSection } from './components/ContactChannelsSection';
import { ScamAlertBanner } from './components/ScamAlertBanner';
import { SpecializedSupportSection } from './components/SpecializedSupportSection';
import { DynamicFAQ } from './components/DynamicFAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:py-10">
        <ScamAlertBanner />
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HelpCenterSection />
          <ContactChannelsSection />
        </div>
        <SpecializedSupportSection />
        <DynamicFAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
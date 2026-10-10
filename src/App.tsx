import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { ArchitectureDeepDive } from './components/ArchitectureDeepDive';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  const [isEyeContact, setIsEyeContact] = useState<boolean>(true);

  return (
    <div className="min-h-screen bg-transparent text-[#faf8f3] selection:bg-[#e6c280] selection:text-[#182713] relative overflow-x-hidden">
      {/* Luxury Tactile Fine-Grain Noise Overlay */}
      <div className="luxury-grain-overlay" aria-hidden="true" />

      {/* Luxury Animated Custom Cursor */}
      <CustomCursor isEyeContact={isEyeContact} />

      {/* Top Luxury Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with Interactive Gaze Core */}
        <Hero onEyeContactChange={setIsEyeContact} />

        {/* Selected Works Section */}
        <SelectedWorks />

        {/* Technical Architecture Deep Dive */}
        <ArchitectureDeepDive />
      </main>

      {/* Studio Footer */}
      <Footer />
    </div>
  );
};

export default App;

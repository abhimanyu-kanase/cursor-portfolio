import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SelectedWorks } from './components/SelectedWorks';
import { ArchitectureDeepDive } from './components/ArchitectureDeepDive';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ResumePage } from './components/ResumePage';
import { ContactPage } from './components/ContactPage';
import { projectsData } from './data/projectsData';

type RouteState =
  | { type: 'home' }
  | { type: 'resume' }
  | { type: 'contact' }
  | { type: 'project'; slug: string };

const parseCurrentRoute = (): RouteState => {
  if (typeof window === 'undefined') return { type: 'home' };
  const hash = window.location.hash;
  if (hash === '#/resume' || hash.startsWith('#/resume')) {
    return { type: 'resume' };
  }
  if (hash === '#/contact' || hash.startsWith('#/contact')) {
    return { type: 'contact' };
  }
  const match = hash.match(/^#\/project\/([a-zA-Z0-9_-]+)/);
  if (match) {
    const slug = match[1];
    const exists = projectsData.some((p) => p.slug === slug);
    if (exists) return { type: 'project', slug };
  }
  return { type: 'home' };
};

export const App: React.FC = () => {
  const [isEyeContact, setIsEyeContact] = useState<boolean>(true);
  const [currentRoute, setCurrentRoute] = useState<RouteState>(parseCurrentRoute);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(parseCurrentRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleSelectProject = (slug: string) => {
    setCurrentRoute({ type: 'project', slug });
    window.location.hash = `#/project/${slug}`;
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenResume = () => {
    setCurrentRoute({ type: 'resume' });
    window.location.hash = '#/resume';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleOpenContact = () => {
    setCurrentRoute({ type: 'contact' });
    window.location.hash = '#/contact';
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBackToPortfolio = () => {
    setCurrentRoute({ type: 'home' });
    window.location.hash = '#works';
    setTimeout(() => {
      const worksEl = document.getElementById('works');
      if (worksEl) {
        worksEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  const handleBackHome = () => {
    setCurrentRoute({ type: 'home' });
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-[#faf8f3] selection:bg-[#e6c280] selection:text-[#182713] relative overflow-x-hidden">
      {/* Luxury Tactile Fine-Grain Noise Overlay */}
      <div className="luxury-grain-overlay" aria-hidden="true" />

      {/* Luxury Animated Custom Cursor */}
      <CustomCursor isEyeContact={isEyeContact} />

      {currentRoute.type === 'project' ? (
        <ProjectDetailPage
          slug={currentRoute.slug}
          onBack={handleBackToPortfolio}
          onNavigateProject={handleSelectProject}
        />
      ) : currentRoute.type === 'resume' ? (
        <ResumePage
          onBack={handleBackHome}
          onNavigateProject={handleSelectProject}
        />
      ) : currentRoute.type === 'contact' ? (
        <ContactPage
          onBack={handleBackHome}
          onOpenResume={handleOpenResume}
        />
      ) : (
        <>
          {/* Top Luxury Navigation */}
          <Navbar onOpenContact={handleOpenContact} />

          <main>
            {/* Hero Section with Interactive Gaze Core */}
            <Hero
              onEyeContactChange={setIsEyeContact}
              onOpenResume={handleOpenResume}
              onOpenContact={handleOpenContact}
            />

            {/* Selected Works Section */}
            <SelectedWorks onSelectProject={handleSelectProject} />

            {/* Technical Architecture Deep Dive */}
            <ArchitectureDeepDive />
          </main>
        </>
      )}

      {/* Studio Footer */}
      <Footer />
    </div>
  );
};

export default App;

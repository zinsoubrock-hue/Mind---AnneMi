/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { BookPage } from './components/pages/BookPage';
import { MentoringPage } from './components/pages/MentoringPage';
import { MastermindPage } from './components/pages/MastermindPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { BookingModal } from './components/BookingModal';
import { ExcerptModal } from './components/ExcerptModal';

export default function App() {
  // Read initial path from URL (e.g. /contact from user prompt)
  const getInitialPage = (): PageId => {
    const path = window.location.pathname.replace(/^\//, '').toLowerCase();
    if (path === 'contact') return 'contact';
    if (path === 'book') return 'book';
    if (path === 'mentoring') return 'mentoring';
    if (path === 'mastermind') return 'mastermind';
    if (path === 'about') return 'about';
    return 'contact'; // Start on Contact as explicitly requested in the prompt, or home
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage());
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isExcerptOpen, setIsExcerptOpen] = useState(false);
  const [excerptChapterIndex, setExcerptChapterIndex] = useState(0);

  // Sync route changes with browser history
  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const targetUrl = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== targetUrl) {
      window.history.pushState({ page }, '', targetUrl);
    }
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (['home', 'book', 'mentoring', 'mastermind', 'about', 'contact'].includes(path)) {
        setCurrentPage(path as PageId);
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleOpenExcerpt = (chapterIndex = 0) => {
    setExcerptChapterIndex(chapterIndex);
    setIsExcerptOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A3038] selection:bg-[#E2D8CC] selection:text-[#1A3038]">
      {/* Top Bar Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
            onOpenExcerpt={() => handleOpenExcerpt(0)}
          />
        )}

        {currentPage === 'book' && (
          <BookPage
            onOpenExcerpt={handleOpenExcerpt}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'mentoring' && (
          <MentoringPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'mastermind' && (
          <MastermindPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenBooking={() => setIsBookingOpen(true)}
          />
        )}
      </main>

      {/* Quiet Coastal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Virtual Discovery Calendar Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Interactive Book Chapter Reader Modal */}
      <ExcerptModal
        isOpen={isExcerptOpen}
        onClose={() => setIsExcerptOpen(false)}
        initialChapterIndex={excerptChapterIndex}
      />
    </div>
  );
}

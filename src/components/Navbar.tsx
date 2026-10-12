import { useState } from 'react';
import { PageId } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function Navbar({ currentPage, onNavigate, onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Overview' },
    { id: 'book', label: 'The Book' },
    { id: 'mentoring', label: 'Mentoring' },
    { id: 'mastermind', label: 'Mastermind' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display face) */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-serif text-lg sm:text-xl font-medium tracking-tight text-[#1A3038] hover:text-[#B36544] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Making Powerful Choices
        </button>

        {/* Zone 2: Single-line Text Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#4A6064]">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#1A3038] font-semibold'
                    : 'hover:text-[#1A3038]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B36544]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] rounded-sm hover:bg-[#25424D] transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            className="lg:hidden p-2 text-[#1A3038] hover:text-[#B36544] focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D9] px-6 py-6 animate-in fade-in duration-200 shadow-xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base font-medium py-2 transition-colors cursor-pointer ${
                  currentPage === link.id
                    ? 'text-[#B36544] font-semibold pl-2 border-l-2 border-[#B36544]'
                    : 'text-[#4A6064] hover:text-[#1A3038]'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-[#E8E2D9] flex flex-col gap-3">
              <button
                onClick={() => {
                  handleNavClick('contact');
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] rounded-sm hover:bg-[#25424D] transition-colors"
              >
                Contact & Inquiries
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#1A3038] rounded-sm hover:bg-[#F2ECE4] transition-colors"
              >
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

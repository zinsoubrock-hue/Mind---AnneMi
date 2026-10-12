import { PageId } from '../types';
import { SITE_METADATA, LEGAL_DISCLAIMER } from '../data/content';
import { ArrowUp, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#1A3038] text-[#E5EAE7] border-t border-[#25424D] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2B4B57]">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-serif text-2xl font-light tracking-wide text-white">
              Making Powerful Choices
            </h2>
            <p className="text-sm text-[#A9BEB9] leading-relaxed max-w-md font-light">
              By AnneMie Decatte — Life Strategist, Author & Mentor. Guiding individuals out of
              subconscious autopilot into intentional agency, deep clarity, and purposeful life
              architecture.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-[#8BA49E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C87A57]" />
                <span>Byron Bay & Sydney, Australia · Serving clients worldwide</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C87A57]" />
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="hover:text-white transition-colors underline-offset-4 hover:underline"
                >
                  {SITE_METADATA.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Mirror */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C87A57]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#D1DDD9]">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Overview & Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('book')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Book: Making Powerful Choices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mentoring')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  1-on-1 Mentoring
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('mastermind')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Mastermind
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About AnneMie Decatte
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiries */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C87A57]">
              Conversations & Bookings
            </h3>
            <p className="text-sm text-[#A9BEB9] leading-relaxed font-light">
              Ready to examine the architecture of your decisions? Schedule an initial virtual
              discovery conversation or send an inquiry directly to AnneMie.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('contact')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-[#F5F1EB] hover:bg-white rounded-sm transition-colors text-center cursor-pointer"
              >
                Send Message
              </button>
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#E5EAE7] border border-[#446772] hover:border-[#8BA49E] rounded-sm transition-colors text-center cursor-pointer"
              >
                Schedule Virtual Call
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[#7A958F] font-light">
          <p className="max-w-3xl leading-relaxed">{LEGAL_DISCLAIMER}</p>
          <div className="flex items-center gap-6 shrink-0 self-end md:self-auto">
            <span>© {new Date().getFullYear()} AnneMie Decatte. All rights reserved.</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-[#2B4B57] rounded-sm hover:border-[#8BA49E] hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

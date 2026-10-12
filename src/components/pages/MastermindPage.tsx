import { useState } from 'react';
import { PageId } from '../../types';
import { MASTERMIND_FEATURES } from '../../data/content';
import { Users, CheckCircle, ArrowRight, Sparkles, Send } from 'lucide-react';

interface MastermindPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function MastermindPage({ onNavigate, onOpenBooking }: MastermindPageProps) {
  const [waitlistData, setWaitlistData] = useState({
    name: '',
    email: '',
    role: '',
    intent: '',
  });
  const [isJoined, setIsJoined] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistData.name || !waitlistData.email) return;
    setIsJoined(true);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* Mastermind Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              <span>Transformational Community</span>
              <span aria-hidden="true">·</span>
              <span>Collective Intelligence</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3038] font-light tracking-tight leading-[1.15]">
              Making Powerful Choices Mastermind
            </h1>

            <p className="text-base sm:text-lg text-[#4A6064] font-light leading-relaxed">
              A curated space for driven individuals seeking clarity, momentum, and profound growth
              through guided advisory, peer accountability, and transformative conversations.
            </p>

            <div className="p-4 bg-[#F5F1EB] border border-[#E0D8CE] rounded-sm text-xs text-[#5E7370] flex items-center justify-between gap-4">
              <span className="font-medium text-[#1A3038]">
                Applications open twice annually. Strict limit of 15 members per cohort.
              </span>
              <a
                href="#waitlist"
                className="text-[#B36544] font-semibold hover:underline shrink-0"
              >
                Join Waitlist →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Mastermind Premise */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              The Core Concept
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Why We Go Further Together
            </h2>
            <p className="text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
              As Napoleon Hill observed in his seminal study of exceptional achievement, no individual
              creates significant enduring impact in isolation. A mastermind creates a friendly alliance
              dedicated to mutual purpose, elevation, and constructive challenge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MASTERMIND_FEATURES.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm space-y-4 hover:border-[#1A3038] transition-all shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-[#E5EDE8] text-[#3D5A56] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-2xl text-[#1A3038] font-normal">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Application Form */}
      <section id="waitlist" className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <div className="bg-white border border-[#E0D8CE] p-8 sm:p-12 rounded-sm shadow-xs space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                Priority Application
              </span>
              <h2 className="font-serif text-3xl text-[#1A3038] font-light">
                Join the Mastermind Waitlist
              </h2>
              <p className="text-sm text-[#4A6064] font-light max-w-lg mx-auto">
                Express your interest below to receive preliminary cohort dates, curriculum
                specifications, and interview invitations prior to public announcements.
              </p>
            </div>

            {isJoined ? (
              <div className="py-10 text-center space-y-5 bg-[#FAF8F5] border border-[#E0D8CE] rounded-sm p-6 animate-in fade-in">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#E5EDE8] text-[#3D5A56] flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#1A3038]">Waitlist Confirmed</h3>
                  <p className="text-sm text-[#4A6064] max-w-md mx-auto font-light leading-relaxed">
                    Thank you, <strong className="text-[#1A3038]">{waitlistData.name}</strong>. You
                    have been registered on the priority candidate roster. When candidate interview
                    rounds begin, AnneMie’s office will reach out to{' '}
                    <strong className="text-[#1A3038]">{waitlistData.email}</strong>.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-colors cursor-pointer"
                >
                  Have an Immediate Question?
                </button>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={waitlistData.name}
                      onChange={(e) => setWaitlistData({ ...waitlistData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={waitlistData.email}
                      onChange={(e) => setWaitlistData({ ...waitlistData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038]"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                    Current Role or Professional Domain
                  </label>
                  <input
                    type="text"
                    value={waitlistData.role}
                    onChange={(e) => setWaitlistData({ ...waitlistData, role: e.target.value })}
                    placeholder="e.g. Founder, Creative Director, Senior Partner..."
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                    What is the most significant decision or breakthrough you wish to achieve?
                  </label>
                  <textarea
                    rows={3}
                    value={waitlistData.intent}
                    onChange={(e) => setWaitlistData({ ...waitlistData, intent: e.target.value })}
                    placeholder="Share your focus area..."
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Submit Waitlist Application</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

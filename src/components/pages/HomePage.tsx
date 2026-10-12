import { useState } from 'react';
import { PageId } from '../../types';
import { IMAGES, CORE_PHILOSOPHY, TESTIMONIALS, SITE_METADATA } from '../../data/content';
import { ArrowRight, BookOpen, Compass, Users, Sparkles, Check, ChevronRight } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenExcerpt: () => void;
}

export function HomePage({ onNavigate, onOpenBooking, onOpenExcerpt }: HomePageProps) {
  // Interactive 3-question reflection based on the book's thinking system
  const [reflectionAnswers, setReflectionAnswers] = useState<Record<number, string>>({});
  const [showAssessmentResult, setShowAssessmentResult] = useState(false);

  const reflectionQuestions = [
    {
      id: 1,
      question: 'When faced with a major decision, what is your typical default mode?',
      options: [
        { label: 'Analyze endlessly waiting for 100% certainty (Perfection Trap)', value: 'perfection' },
        { label: 'React automatically based on past precedents and comfort (Autopilot)', value: 'autopilot' },
        { label: 'Assess probabilities, align with core values, and take action (Conscious Agency)', value: 'agency' },
      ],
    },
    {
      id: 2,
      question: 'How do you handle uncomfortable or avoided conversations?',
      options: [
        { label: 'Postpone them to maintain temporary peace', value: 'avoid' },
        { label: 'Address them reactively when emotions overflow', value: 'react' },
        { label: 'Step into them proactively with clarity and emotional intelligence', value: 'proactive' },
      ],
    },
  ];

  const handleSelectReflection = (questionId: number, val: string) => {
    setReflectionAnswers((prev) => ({ ...prev, [questionId]: val }));
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-[#E8E2D9] pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Col: Hero copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                <span>Life Strategy</span>
                <span aria-hidden="true">·</span>
                <span>The Better Thinking System</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A3038] font-light tracking-tight leading-[1.12]">
                How to Think Differently, Stretch Your Mind, and Live an Epic Life.
              </h1>

              <p className="text-base sm:text-lg text-[#4A6064] font-light leading-relaxed max-w-2xl">
                Break free from autopilot. Align your actions with your true values, and master the
                quiet architecture of conscious choice. By author, life strategist, and mentor{' '}
                <strong className="text-[#1A3038] font-medium">AnneMie Decatte</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('book')}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore the Book</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('mentoring')}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-white border border-[#D5CCC1] hover:border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>1-on-1 Mentoring</span>
                  <Compass className="w-3.5 h-3.5 text-[#B36544]" />
                </button>
              </div>

              {/* Trust quote strip */}
              <div className="pt-6 border-t border-[#E8E2D9] flex items-center gap-4 text-xs text-[#6B7F7D]">
                <span className="font-serif italic text-sm text-[#1A3038]">
                  “Your current life is the sum of your past choices. When you change how you think,
                  you change what you choose.”
                </span>
              </div>
            </div>

            {/* Right Col: Australian Coastal Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-sm border border-[#E0D8CE] shadow-lg bg-[#EFEBE4]">
                <img
                  src={IMAGES.hero}
                  alt="Australian coastal pavilion overlooking the ocean in Byron Bay"
                  className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#E5EAE7]">
                    Byron Bay, Australia
                  </span>
                  <p className="font-serif text-lg font-light">
                    Grounding strategy in natural clarity and quiet perspective.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section: 3 Pillars */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Core Methodology
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              The Architecture of The Better Thinking System
            </h2>
            <p className="text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
              AnneMie Decatte’s methodology combines mindset, emotional intelligence, and real-world
              strategy to move from default reaction into intentional authorship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {CORE_PHILOSOPHY.map((pillar) => (
              <div
                key={pillar.index}
                className="bg-white border border-[#E0D8CE] p-8 rounded-sm space-y-4 hover:border-[#1A3038] transition-all shadow-xs"
              >
                <span className="font-mono text-xs font-semibold text-[#B36544] tracking-widest">
                  {pillar.index}
                </span>
                <h3 className="font-serif text-xl text-[#1A3038] font-normal">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings Bento / Asymmetric Grid */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                Ways to Engage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
                Books, Mentoring & Transformational Cohorts
              </h2>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-xs font-semibold uppercase tracking-wider text-[#1A3038] hover:text-[#B36544] transition-colors flex items-center gap-1.5 cursor-pointer self-start sm:self-auto"
            >
              <span>View all pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Bento Card 1: The Book (7 Cols) */}
            <div className="lg:col-span-7 bg-[#F7F4EE] border border-[#E0D8CE] p-8 sm:p-10 rounded-sm flex flex-col justify-between space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B36544]">
                  <BookOpen className="w-4 h-4" />
                  <span className="uppercase tracking-widest font-sans font-semibold">The Book</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A3038] font-light leading-snug">
                  Making Powerful Choices
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  A Guide on How to Think Differently, Stretch Your Mind, and Live an Epic and
                  Meaningful Life! Learn how to dismantle autopilot, embrace decision uncertainty,
                  and construct a thinking system built for courage and clarity.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8E2D9]">
                <button
                  onClick={onOpenExcerpt}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#1A3038] hover:bg-white rounded-sm transition-colors text-center cursor-pointer"
                >
                  Read Chapter Preview
                </button>
                <button
                  onClick={() => onNavigate('book')}
                  className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors text-center cursor-pointer"
                >
                  Order the Book
                </button>
              </div>
            </div>

            {/* Bento Card 2: 1-on-1 Mentoring (5 Cols) */}
            <div className="lg:col-span-5 bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm flex flex-col justify-between space-y-8 shadow-xs">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B36544]">
                  <Compass className="w-4 h-4" />
                  <span className="uppercase tracking-widest font-sans font-semibold">Mentoring</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A3038] font-light">
                  1-on-1 Strategic Mentoring
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  Work directly with AnneMie Decatte in a private advisory container to examine your
                  beliefs, dissolve subconscious bottlenecks, and execute decisive life and career pivots.
                </p>
              </div>

              <button
                onClick={() => onNavigate('mentoring')}
                className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors text-center cursor-pointer"
              >
                Learn About Mentoring
              </button>
            </div>

            {/* Bento Card 3: Mastermind (Full width banner 12 Cols) */}
            <div className="lg:col-span-12 bg-[#1A3038] text-white p-8 sm:p-12 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C87A57]">
                  <Users className="w-4 h-4" />
                  <span>The Mastermind</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light">
                  Making Powerful Choices Mastermind
                </h3>
                <p className="text-sm text-[#A9BEB9] font-light leading-relaxed">
                  A high-calibre collective of driven leaders and thinkers committed to clarity,
                  momentum, and accountability through deep conversations and peer advisory.
                </p>
              </div>

              <button
                onClick={() => onNavigate('mastermind')}
                className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-[#FAF8F5] hover:bg-white rounded-sm transition-colors whitespace-nowrap cursor-pointer shrink-0"
              >
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Thinking System Reflection Section */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Self-Reflection Tool
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Audit Your Decision Operating System
            </h2>
            <p className="text-sm text-[#4A6064] font-light max-w-xl mx-auto leading-relaxed">
              Answer two core questions from the book to identify where autopilot may be quietly
              limiting your agency.
            </p>
          </div>

          <div className="space-y-6 bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm">
            {reflectionQuestions.map((q) => (
              <div key={q.id} className="space-y-3">
                <span className="text-xs font-mono text-[#B36544] font-semibold">
                  0{q.id}. QUESTION
                </span>
                <p className="text-sm sm:text-base font-medium text-[#1A3038]">{q.question}</p>
                <div className="grid grid-cols-1 gap-2 pt-1">
                  {q.options.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleSelectReflection(q.id, opt.value)}
                      className={`text-left p-3.5 text-xs sm:text-sm border rounded-sm transition-all cursor-pointer flex items-center justify-between ${
                        reflectionAnswers[q.id] === opt.value
                          ? 'border-[#1A3038] bg-[#F7F4EE] text-[#1A3038] font-medium'
                          : 'border-[#E0D8CE] hover:bg-[#FAF8F5] text-[#4A6064]'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {reflectionAnswers[q.id] === opt.value && (
                        <Check className="w-4 h-4 text-[#B36544] shrink-0 ml-2" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {Object.keys(reflectionAnswers).length === 2 && (
              <div className="pt-6 border-t border-[#E8E2D9] space-y-4 animate-in fade-in">
                <div className="p-5 bg-[#FAF8F5] border border-[#E0D8CE] rounded-sm space-y-2">
                  <h4 className="font-serif text-lg text-[#1A3038]">AnneMie’s Diagnostic Note:</h4>
                  <p className="text-xs sm:text-sm text-[#4A6064] font-light leading-relaxed">
                    Most high-achievers remain trapped in autopilot because comfort is rewarded over
                    courage. Upgrading your thinking system requires acknowledging where avoidance
                    masquerades as rationality. The book provides the tactical toolkit to bridge this exact gap.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={() => onNavigate('book')}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors text-center cursor-pointer"
                  >
                    Read More in the Book
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-colors text-center cursor-pointer"
                  >
                    Discuss in a Discovery Session
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Reader & Client Testimonials Section */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Voices & Evidence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Impact & Reader Reflections
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EE] border border-[#E0D8CE] p-8 rounded-sm space-y-6 flex flex-col justify-between"
              >
                <p className="font-serif italic text-base sm:text-lg text-[#1A3038] leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="space-y-1 border-t border-[#E8E2D9] pt-4">
                  <strong className="text-sm font-semibold text-[#1A3038] block">{t.author}</strong>
                  <span className="text-xs text-[#5E7370] block font-light">{t.role}</span>
                  {t.location && (
                    <span className="text-[11px] text-[#8BA49E] block font-light">{t.location}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author Introduction Snapshot */}
      <section className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-sm border border-[#E0D8CE] shadow-md bg-[#EFEBE4]">
                <img
                  src={IMAGES.author}
                  alt="AnneMie Decatte — Life Strategist and Author"
                  className="w-full h-[450px] sm:h-[520px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                Meet the Author & Mentor
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
                AnneMie Decatte
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
                <p>
                  Originally from Belgium, AnneMie Decatte’s career spans high-level corporate
                  aviation working alongside Sir Richard Branson, leading intercultural training and
                  communication in Japan, and mentoring high-performing leaders around the globe.
                </p>
                <p>
                  A certified Professional Coach, NLP Master Coach, and founder of Accountable ETHOS,
                  AnneMie brings grounded wisdom, clear perspective, and practical strategy to
                  everyone ready to make choices that truly matter.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors cursor-pointer"
                >
                  Read AnneMie’s Full Story
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

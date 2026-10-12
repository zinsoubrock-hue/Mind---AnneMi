import { PageId } from '../../types';
import { IMAGES, MENTORING_PILLARS, TESTIMONIALS } from '../../data/content';
import { Compass, Calendar, ArrowRight, Video, CheckCircle2 } from 'lucide-react';

interface MentoringPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function MentoringPage({ onNavigate, onOpenBooking }: MentoringPageProps) {
  const whoItIsFor = [
    {
      title: 'Founders & Leaders at Critical Crossroads',
      description:
        'When strategic stakes are high, clarity cannot be left to default reactions. We map out high-conviction decision frameworks for your business and team.',
    },
    {
      title: 'Executives & Professionals Seeking Intentional Pivots',
      description:
        'You have achieved external markers of success, yet feel governed by autopilot. We align your next career iteration with deep personal sovereignty.',
    },
    {
      title: 'Individuals Ready to Dismantle Limiting Scripts',
      description:
        'Break free from recurring relationship patterns, procrastination disguised as diligence, and unexamined family or cultural conditioning.',
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* Mentoring Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                <span>Private Advisory</span>
                <span aria-hidden="true">·</span>
                <span>One-on-One Strategy</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3038] font-light tracking-tight leading-[1.15]">
                One-on-One Mentoring with AnneMie Decatte
              </h1>

              <p className="text-base sm:text-lg text-[#4A6064] font-light leading-relaxed">
                A bespoke strategic container to refine your thinking system, dissolve subconscious
                bottlenecks, and make courageous, aligned life choices.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
                <p>
                  Most coaching focuses on tactical symptom management—to-do lists, time tracking,
                  and surface accountability. AnneMie’s mentoring operates at the root level: the
                  underlying beliefs, emotional habits, and decision architectures that dictate your
                  daily behavior.
                </p>
                <p>
                  By marrying emotional intelligence with strategic precision, you step out of
                  reactive hesitation into deliberate agency.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Discovery Consultation</span>
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-white border border-[#D5CCC1] hover:border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Submit Inquiry Note</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B36544]" />
                </button>
              </div>
            </div>

            {/* Visual: Mentoring Space */}
            <div className="lg:col-span-5">
              <div className="relative group overflow-hidden rounded-sm border border-[#E0D8CE] shadow-xl bg-[#EFEBE4]">
                <img
                  src={IMAGES.mentoring}
                  alt="Minimalist Australian coastal interior overlooking the ocean"
                  className="w-full h-[450px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold uppercase tracking-widest text-[#E5EAE7]">
                    <Video className="w-3.5 h-3.5" />
                    <span>Virtual Zoom Sessions</span>
                  </div>
                  <p className="font-serif text-sm font-light">
                    Private strategic conversations conducted across global time zones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Mentoring Pillars */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              The Framework
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              How the Mentorship Unfolds
            </h2>
            <p className="text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
              Every partnership is structured to deliver immediate cognitive clarity followed by
              sustainable behavioral integration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MENTORING_PILLARS.map((pillar) => (
              <div
                key={pillar.step}
                className="bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm space-y-4 hover:border-[#1A3038] transition-all shadow-xs"
              >
                <span className="font-mono text-xs font-semibold text-[#B36544] tracking-widest">
                  STEP {pillar.step}
                </span>
                <h3 className="font-serif text-2xl text-[#1A3038] font-normal">
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

      {/* Who is this container designed for */}
      <section className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Client Profile
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Who Enters This Advisory Space
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whoItIsFor.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F7F4EE] border border-[#E0D8CE] p-8 rounded-sm space-y-4"
              >
                <div className="w-8 h-8 rounded-full bg-[#E5EDE8] text-[#3D5A56] flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <h3 className="font-serif text-xl text-[#1A3038]">{item.title}</h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial & Call to Action */}
      <section className="py-20 lg:py-24 bg-[#1A3038] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-8">
          <blockquote className="font-serif text-2xl sm:text-3xl font-light leading-relaxed">
            “{TESTIMONIALS[1].quote}”
          </blockquote>
          <div className="space-y-1">
            <strong className="text-base font-normal block">{TESTIMONIALS[1].author}</strong>
            <span className="text-xs text-[#A9BEB9] block font-light">{TESTIMONIALS[1].role}</span>
          </div>

          <div className="pt-6">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-[#FAF8F5] hover:bg-white rounded-sm transition-colors cursor-pointer"
            >
              Book Your 30-Minute Discovery Session
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

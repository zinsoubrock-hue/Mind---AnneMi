import { PageId } from '../../types';
import { IMAGES, SITE_METADATA } from '../../data/content';
import { Compass, BookOpen, Award, HeartHandshake, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export function AboutPage({ onNavigate, onOpenBooking }: AboutPageProps) {
  const credentials = [
    {
      title: 'Global Aviation & Sir Richard Branson',
      description:
        'Decades of high-pressure leadership in international aviation, including working closely alongside Sir Richard Branson in fast-moving, high-standard corporate environments.',
    },
    {
      title: 'Cross-Cultural Mastery in Japan',
      description:
        'Years designing and delivering corporate training on cultural awareness, non-verbal intelligence, and communication architecture for senior corporate personnel in Japan.',
    },
    {
      title: 'Certified Master NLP & Transformation Coach',
      description:
        'Formally trained in Neuro-Linguistic Programming, Hypnotherapy, and Transformation Therapy, providing deep psychological rigor behind every strategic framework.',
    },
    {
      title: 'Founder of Accountable ETHOS',
      description:
        'Creator of the Better Thinking System philosophy and founder of Accountable ETHOS, a self-development organisation dedicated to conscious human agency.',
    },
  ];

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* About Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Author Portrait */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group overflow-hidden rounded-sm border border-[#E0D8CE] shadow-xl bg-[#EFEBE4]">
                <img
                  src={IMAGES.author}
                  alt="AnneMie Decatte — Life Strategist, Writer, and Mentor"
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                  <span className="font-semibold uppercase tracking-widest text-[#E5EAE7]">
                    Byron Bay & Sydney, Australia
                  </span>
                  <p className="font-serif text-sm font-light">
                    Guiding deliberate choices through grounded strategy and emotional wisdom.
                  </p>
                </div>
              </div>
            </div>

            {/* Author Narrative */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                <span>Life Strategist, Writer & Mentor</span>
                <span aria-hidden="true">·</span>
                <span>The Story</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3038] font-light tracking-tight leading-[1.15]">
                AnneMie Decatte
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#3D5A56] font-light">
                “Your life is not defined by what happens to you, but by the conscious decisions you
                make in response.”
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
                <p>
                  Originally from Belgium, AnneMie’s journey began with a life-altering traffic
                  accident at age fifteen. Facing months of rehabilitation and critical questions of
                  identity, she discovered an enduring truth: physical circumstances may be outside
                  our control, but our internal thinking system and our subsequent choices belong
                  entirely to us.
                </p>
                <p>
                  Her professional trajectory took her into international aviation, collaborating with
                  Sir Richard Branson, and later to Japan, where she trained corporate executives on
                  cultural awareness and advanced interpersonal communication.
                </p>
                <p>
                  Today, based on the Australian coastline, AnneMie works with founders, executives,
                  and individuals ready to stop floating on autopilot. Through her book{' '}
                  <em>Making Powerful Choices</em>, private 1-on-1 mentoring, and mastermind cohorts,
                  she helps people build lives they are genuinely proud to lead.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Connect with AnneMie</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenBooking}
                  className="px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-white border border-[#D5CCC1] hover:border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Schedule Discovery Session</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background & Milestones Grid */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Experience & Foundations
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              A Multidisciplinary Journey
            </h2>
            <p className="text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
              Every principle taught in AnneMie’s work has been tested under real-world commercial and
              personal conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {credentials.map((cred, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm space-y-3 hover:border-[#1A3038] transition-all shadow-xs"
              >
                <span className="font-mono text-xs font-semibold text-[#B36544] tracking-widest">
                  0{idx + 1}. PILLAR
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1A3038] font-normal">
                  {cred.title}
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  {cred.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 lg:py-24 bg-[#1A3038] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C87A57]">
            Core Conviction
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl font-light leading-relaxed">
            “When we master conscious choice, our choices cease to be reactions to fear. They become
            declarations of who we are and what we stand for.”
          </blockquote>
          <div className="text-xs text-[#A9BEB9] tracking-widest uppercase">
            — AnneMie Decatte · The Life Strategist
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { IMAGES, BOOK_CHAPTERS, TESTIMONIALS } from '../../data/content';
import { BookOpen, Check, ArrowRight, ShieldCheck, Heart } from 'lucide-react';

interface BookPageProps {
  onOpenExcerpt: (chapterIndex?: number) => void;
  onOpenBooking: () => void;
}

export function BookPage({ onOpenExcerpt, onOpenBooking }: BookPageProps) {
  const [orderedEdition, setOrderedEdition] = useState<string | null>(null);

  const editions = [
    {
      name: 'Hardcover Collector Edition',
      description: 'Linen cloth-bound hardcover with debossed foil lettering. Designed for a lifetime on your desk.',
      format: 'Hardcover · 240 Pages',
      price: '$38 AUD',
      available: true,
    },
    {
      name: 'Paperback Edition',
      description: 'Lightweight trade paperback edition with premium archival cream stock. Perfect for traveling & annotation.',
      format: 'Paperback · 240 Pages',
      price: '$26 AUD',
      available: true,
    },
    {
      name: 'Digital eBook & Kindle',
      description: 'Immediate digital download in ePub, PDF, and Kindle formats for immediate reading on any device.',
      format: 'Instant Digital Download',
      price: '$14 AUD',
      available: true,
    },
  ];

  const handleOrder = (name: string) => {
    setOrderedEdition(name);
    setTimeout(() => {
      setOrderedEdition(null);
    }, 4000);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* Book Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Book Image Showcase */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative group overflow-hidden rounded-sm border border-[#E0D8CE] shadow-xl bg-[#EFEBE4]">
                <img
                  src={IMAGES.book}
                  alt="Making Powerful Choices book on raw coastal limestone"
                  className="w-full h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                  <span className="font-semibold uppercase tracking-widest text-[#E5EAE7]">
                    Official Publication
                  </span>
                  <p className="font-serif text-sm font-light">
                    A Guide on How to Think Differently, Stretch Your Mind, and Live an Epic and Meaningful Life!
                  </p>
                </div>
              </div>
            </div>

            {/* Book Details & Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                <span>By AnneMie Decatte</span>
                <span aria-hidden="true">·</span>
                <span>Self-Development & Life Strategy</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A3038] font-light tracking-tight leading-[1.15]">
                Making Powerful Choices
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#3D5A56] font-light">
                “A Guide on How to Think Differently, Stretch Your Mind, and Live an Epic and Meaningful Life!”
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
                <p>
                  This is not a quick-fix guide or a catalogue of shallow productivity hacks. It is a
                  deep dive into the architecture of your mind and habits.
                </p>
                <p>
                  Every day, we make thousands of choices—yet the overwhelming majority are automatic
                  reactions conditioned by past fears and inherited assumptions. Making Powerful
                  Choices provides you with a grounded framework to dismantle autopilot, align actions
                  with your core values, and reclaim your personal sovereignty.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onOpenExcerpt(0)}
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Read Chapter Excerpt</span>
                </button>
                <a
                  href="#editions"
                  className="px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] bg-white border border-[#D5CCC1] hover:border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select Edition</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B36544]" />
                </a>
              </div>

              {/* Guarantees */}
              <div className="pt-6 border-t border-[#E8E2D9] flex flex-wrap items-center gap-6 text-xs text-[#5E7370]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#3D5A56]" />
                  <span>Ships Across Australia & Globally</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#B36544]" />
                  <span>Genuine Reader Verified Reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Breakdown Section */}
      <section className="py-20 lg:py-28 bg-[#F5F1EB] border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Inside the Book
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Table of Contents & Core Chapters
            </h2>
            <p className="text-sm sm:text-base text-[#4A6064] font-light leading-relaxed">
              Explore the five foundational movements designed to guide your transition from passive
              autopilot to conscious, courageous agency.
            </p>
          </div>

          <div className="space-y-4">
            {BOOK_CHAPTERS.map((ch, idx) => (
              <div
                key={ch.number}
                className="bg-white border border-[#E0D8CE] p-6 sm:p-8 rounded-sm hover:border-[#1A3038] transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold text-[#B36544] tracking-widest">
                      CHAPTER {ch.number}
                    </span>
                    <span className="text-xs text-[#8BA49E] font-light">·</span>
                    <span className="text-xs text-[#5E7370] font-light">{ch.subtitle}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#1A3038] font-normal">
                    {ch.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A6064] font-light leading-relaxed pt-1">
                    {ch.excerpt.slice(0, 140)}...
                  </p>
                </div>

                <button
                  onClick={() => onOpenExcerpt(idx)}
                  className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#D5CCC1] hover:border-[#1A3038] hover:bg-[#FAF8F5] rounded-sm transition-colors whitespace-nowrap cursor-pointer shrink-0 self-start md:self-auto"
                >
                  Read Preview
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editions & Ordering Section */}
      <section id="editions" className="py-20 lg:py-28 border-b border-[#E8E2D9]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Available Formats
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1A3038] font-light">
              Choose Your Edition
            </h2>
            <p className="text-sm text-[#4A6064] font-light">
              Available in physical hardcover, trade paperback, and instant digital formats.
            </p>
          </div>

          {orderedEdition && (
            <div className="max-w-md mx-auto p-4 bg-[#E5EDE8] border border-[#B3D1C2] text-[#24453A] text-xs rounded-sm text-center font-medium animate-in fade-in">
              Order initiated for <strong>{orderedEdition}</strong>. You are being redirected to our
              secure checkout processor.
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editions.map((ed) => (
              <div
                key={ed.name}
                className="bg-[#F7F4EE] border border-[#E0D8CE] p-8 rounded-sm flex flex-col justify-between space-y-8 hover:border-[#1A3038] transition-all"
              >
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#5E7370]">{ed.format}</span>
                  <h3 className="font-serif text-2xl text-[#1A3038]">{ed.name}</h3>
                  <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                    {ed.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E8E2D9]">
                  <div className="font-serif text-2xl text-[#1A3038]">{ed.price}</div>
                  <button
                    onClick={() => handleOrder(ed.name)}
                    className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors cursor-pointer text-center"
                  >
                    Select & Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reader Review Highlight */}
      <section className="py-20 lg:py-24 bg-[#1A3038] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#C87A57]">
            Reader Praise
          </span>
          <blockquote className="font-serif text-2xl sm:text-3xl font-light leading-relaxed">
            “{TESTIMONIALS[0].quote}”
          </blockquote>
          <div className="space-y-1">
            <strong className="text-base font-normal block">{TESTIMONIALS[0].author}</strong>
            <span className="text-xs text-[#A9BEB9] block font-light">{TESTIMONIALS[0].role}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

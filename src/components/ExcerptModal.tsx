import { useState } from 'react';
import { X, BookOpen, ChevronRight, ChevronLeft } from 'lucide-react';
import { BOOK_CHAPTERS } from '../data/content';

interface ExcerptModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialChapterIndex?: number;
}

export function ExcerptModal({
  isOpen,
  onClose,
  initialChapterIndex = 0,
}: ExcerptModalProps) {
  const [activeChapter, setActiveChapter] = useState(initialChapterIndex);

  if (!isOpen) return null;

  const current = BOOK_CHAPTERS[activeChapter] || BOOK_CHAPTERS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] border border-[#E0D8CE] shadow-2xl rounded-sm overflow-hidden my-8 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#E8E2D9] flex items-center justify-between bg-[#F5F1EB] shrink-0">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-[#B36544]" />
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B36544]">
                Book Excerpt Preview
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-[#1A3038] font-normal">
                Making Powerful Choices · By AnneMie Decatte
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#4A6064] hover:text-[#1A3038] hover:bg-black/5 rounded-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chapter Tabs */}
        <div className="flex overflow-x-auto border-b border-[#E8E2D9] bg-[#EFEBE4] px-6 py-2 gap-2 shrink-0 scrollbar-none">
          {BOOK_CHAPTERS.map((ch, idx) => (
            <button
              key={ch.number}
              onClick={() => setActiveChapter(idx)}
              className={`px-3 py-1.5 text-xs whitespace-nowrap rounded-sm transition-colors cursor-pointer font-medium ${
                activeChapter === idx
                  ? 'bg-white text-[#1A3038] shadow-xs font-semibold'
                  : 'text-[#5E7370] hover:text-[#1A3038]'
              }`}
            >
              Chapter {ch.number}
            </button>
          ))}
        </div>

        {/* Modal Body: Book reading layout */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6">
          <div className="space-y-2 border-b border-[#E8E2D9] pb-6">
            <span className="font-mono text-xs text-[#B36544] tracking-widest font-semibold uppercase">
              Chapter {current.number}
            </span>
            <h4 className="font-serif text-2xl sm:text-3xl text-[#1A3038] font-light">
              {current.title}
            </h4>
            <p className="text-sm text-[#5E7370] italic">{current.subtitle}</p>
          </div>

          <div className="prose prose-slate max-w-none text-[#24393E] font-serif text-base sm:text-lg leading-relaxed space-y-4">
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-[#B36544]">
              {current.excerpt}
            </p>
            <p className="text-[#3E555A] font-sans text-sm sm:text-base leading-relaxed">
              When we observe our choices in daily life, the most critical shift is moving from
              re-acting to choosing with discernment. The brain defaults to past precedents because
              uncertainty consumes glucose and cognitive bandwidth. Intentionality is the deliberate
              willingness to pay the tax of awareness so that your future does not simply regurgitate
              your history.
            </p>
            <blockquote className="border-l-2 border-[#B36544] pl-4 italic text-[#1A3038] text-base my-4 bg-[#F2ECE4]/60 py-2 pr-4">
              “You do not rise to the level of your ambitions. You fall to the defaults of your
              uninspected thinking system.”
            </blockquote>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 sm:px-8 py-4 border-t border-[#E8E2D9] bg-[#F5F1EB] flex items-center justify-between shrink-0">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveChapter(Math.max(0, activeChapter - 1))}
              disabled={activeChapter === 0}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] disabled:opacity-30 border border-[#D5CCC1] rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
            <button
              onClick={() => setActiveChapter(Math.min(BOOK_CHAPTERS.length - 1, activeChapter + 1))}
              disabled={activeChapter === BOOK_CHAPTERS.length - 1}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] disabled:opacity-30 border border-[#D5CCC1] rounded-sm flex items-center gap-1 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors cursor-pointer"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
}

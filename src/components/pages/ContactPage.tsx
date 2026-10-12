import { useState } from 'react';
import { SITE_METADATA, FAQS } from '../../data/content';
import { Mail, Clock, MapPin, CheckCircle, Copy, Check, ChevronDown, Calendar, Send, Sparkles } from 'lucide-react';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export function ContactPage({ onOpenBooking }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: '1-on-1 Mentoring',
    timezone: 'Australia / Pacific',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const topics = [
    '1-on-1 Mentoring',
    'The Book: Making Powerful Choices',
    'Mastermind Program',
    'Keynote Speaking & Workshops',
    'Media / Press Inquiries',
    'General Inquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_METADATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  return (
    <div className="w-full bg-[#FAF8F5] text-[#1A3038]">
      {/* Editorial Header Section */}
      <section className="relative pt-16 pb-16 md:pt-24 md:pb-20 border-b border-[#E8E2D9] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              <span>Connect & Inquire</span>
              <span aria-hidden="true">·</span>
              <span>Direct Communication</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#1A3038] font-light tracking-tight leading-[1.15]">
              Begin the Conversation.
            </h1>
            <p className="text-base sm:text-lg text-[#4A6064] font-light leading-relaxed pt-2">
              Whether you are inquiring about the book, interested in private one-on-one mentoring,
              seeking placement in the Mastermind, or inviting AnneMie to speak, every message is
              received with intention.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct details, Response pledge & Booking Card (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact & Details */}
            <div className="bg-[#F5F1EB] border border-[#E0D8CE] p-8 rounded-sm space-y-6">
              <h2 className="font-serif text-2xl text-[#1A3038] font-light">
                Direct Communication
              </h2>

              <div className="space-y-5 text-sm">
                <div className="space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#738B86] block">
                    Direct Email
                  </span>
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <a
                      href={`mailto:${SITE_METADATA.email}`}
                      className="font-medium text-[#1A3038] hover:text-[#B36544] transition-colors break-all"
                    >
                      {SITE_METADATA.email}
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 text-[#5E7370] hover:text-[#1A3038] hover:bg-[#E8E2D9] rounded-sm transition-colors shrink-0 cursor-pointer"
                      title="Copy email to clipboard"
                    >
                      {copiedEmail ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="border-t border-[#E8E2D9] pt-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#738B86] block">
                    Location & Hub
                  </span>
                  <div className="flex items-center gap-2 pt-1 text-[#1A3038]">
                    <MapPin className="w-4 h-4 text-[#B36544] shrink-0" />
                    <span>Byron Bay & Sydney, Australia</span>
                  </div>
                  <p className="text-xs text-[#5E7370] font-light pt-0.5">
                    Sessions conducted worldwide via Zoom across all time zones.
                  </p>
                </div>

                <div className="border-t border-[#E8E2D9] pt-4 space-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#738B86] block">
                    Response Commitment
                  </span>
                  <div className="flex items-center gap-2 pt-1 text-[#1A3038]">
                    <Clock className="w-4 h-4 text-[#B36544] shrink-0" />
                    <span>24–48 Business Hours</span>
                  </div>
                  <p className="text-xs text-[#5E7370] font-light pt-0.5">
                    {SITE_METADATA.responseCommitment}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Calendar Card */}
            <div className="bg-white border border-[#E0D8CE] p-8 rounded-sm space-y-5 shadow-xs">
              <div className="w-10 h-10 rounded-sm bg-[#EBF2EE] text-[#3D5A56] flex items-center justify-center">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl text-[#1A3038]">
                  Prefer an immediate consultation?
                </h3>
                <p className="text-sm text-[#4A6064] font-light leading-relaxed">
                  Skip the email exchange and book an introductory 30-minute virtual discovery call
                  directly into AnneMie’s calendar.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="w-full py-3 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Select Calendar Time Slot</span>
                <Calendar className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quote Callout */}
            <div className="p-6 border-l-2 border-[#B36544] bg-[#F5F1EB]/70 space-y-2 text-sm">
              <p className="font-serif italic text-[#1A3038]">
                “Transformation begins with the courage to question the decisions you have made on
                autopilot.”
              </p>
              <span className="text-xs font-medium text-[#738B86] block">
                — AnneMie Decatte
              </span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#E0D8CE] p-8 sm:p-10 rounded-sm shadow-xs space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
                  Inquiry Form
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#1A3038] font-light mt-1">
                  Send a Direct Message
                </h2>
                <p className="text-sm text-[#4A6064] font-light mt-1">
                  Please share a few details so we can understand your context and prepare a tailored response.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 text-center space-y-6 bg-[#FAF8F5] border border-[#E0D8CE] rounded-sm animate-in fade-in">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#E5EDE8] text-[#3D5A56] flex items-center justify-center">
                    <CheckCircle className="w-9 h-9" />
                  </div>
                  <div className="space-y-2 max-w-md mx-auto">
                    <h3 className="font-serif text-2xl text-[#1A3038]">Message Received</h3>
                    <p className="text-sm text-[#4A6064] leading-relaxed font-light">
                      Thank you, <strong className="text-[#1A3038]">{formData.name}</strong>. Your
                      inquiry regarding <strong className="text-[#1A3038]">{formData.topic}</strong> has
                      been dispatched directly to AnneMie’s desk at{' '}
                      <span className="font-mono text-xs">{SITE_METADATA.email}</span>.
                    </p>
                    <p className="text-xs text-[#738B86] pt-1">
                      You will hear back within 24 to 48 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        topic: '1-on-1 Mentoring',
                        timezone: 'Australia / Pacific',
                        message: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#1A3038] border border-[#1A3038] hover:bg-[#F2ECE4] rounded-sm transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="First and last name"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] placeholder-[#9CA9A7] focus:outline-none focus:border-[#1A3038] focus:bg-white transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] placeholder-[#9CA9A7] focus:outline-none focus:border-[#1A3038] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Topic Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] block">
                      Topic / Reason for Inquiry *
                    </label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038] focus:bg-white transition-colors"
                    >
                      {topics.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timezone / Region */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] block">
                      Your Region / Time Zone
                    </label>
                    <select
                      value={formData.timezone}
                      onChange={(e) => setFormData({ ...formData, timezone: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] focus:outline-none focus:border-[#1A3038] focus:bg-white transition-colors"
                    >
                      <option value="Australia / Pacific">Australia / New Zealand / Pacific (AEST / NZST)</option>
                      <option value="Europe / UK">Europe & United Kingdom (CET / GMT)</option>
                      <option value="North America (East)">North America — Eastern (EST)</option>
                      <option value="North America (West)">North America — Pacific / Mountain (PST)</option>
                      <option value="Asia">Asia & Southeast Asia (SGT / JST)</option>
                      <option value="Other">Other Global Location</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] block">
                      Your Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share what brings you to Making Powerful Choices and any specific questions you have for AnneMie..."
                      className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D5CCC1] rounded-sm text-[#1A3038] placeholder-[#9CA9A7] focus:outline-none focus:border-[#1A3038] focus:bg-white transition-colors resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Your Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                    <p className="text-[11px] text-[#738B86] font-light mt-3">
                      Your information is kept strictly confidential. We never share your data.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section className="bg-[#F5F1EB] border-t border-[#E8E2D9] py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B36544]">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl text-[#1A3038] font-light">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#4A6064] font-light max-w-xl mx-auto">
              Clear answers regarding inquiries, session structures, and international availability.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E0D8CE] rounded-sm overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FAF8F5] transition-colors"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#1A3038]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#5E7370] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#B36544]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-[#4A6064] font-light leading-relaxed border-t border-[#F2ECE4]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

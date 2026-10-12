import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2, Video } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SESSION_TYPES = [
  {
    id: 'discovery',
    name: '30-Minute Discovery Consultation',
    duration: '30 min',
    description: 'An introductory alignment call to discuss your goals, current challenges, and fit for 1-on-1 mentoring.',
  },
  {
    id: 'intensive',
    name: '60-Minute Strategic Thinking Intensive',
    duration: '60 min',
    description: 'Deep-dive session diagnosing recurring decision bottlenecks and drafting an immediate action map.',
  },
  {
    id: 'mastermind',
    name: '45-Minute Mastermind Candidate Interview',
    duration: '45 min',
    description: 'Admissions interview to assess cohort alignment and strategic readiness for the upcoming cohort.',
  },
];

const AVAILABLE_TIMES = [
  '09:00 AM AEST',
  '11:30 AM AEST',
  '02:00 PM AEST',
  '04:30 PM AEST',
  '07:00 PM AEST (Evening)',
];

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [selectedSession, setSelectedSession] = useState(SESSION_TYPES[0].id);
  const [selectedDate, setSelectedDate] = useState('2026-10-15');
  const [selectedTime, setSelectedTime] = useState(AVAILABLE_TIMES[0]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [timeZone, setTimeZone] = useState('Australia/Sydney (AEST)');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setName('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#E0D8CE] shadow-2xl rounded-sm overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-[#E8E2D9] flex items-center justify-between bg-[#F5F1EB]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#B36544]">
              Direct Consultation Calendar
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A3038] font-normal">
              Schedule a Virtual Session with AnneMie
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#4A6064] hover:text-[#1A3038] hover:bg-black/5 rounded-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E5EDE8] text-[#3D5A56] flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-[#1A3038]">Session Reserved</h4>
                <p className="text-sm text-[#4A6064] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#1A3038]">{name}</strong>. A calendar invite
                  and private Zoom link have been prepared for{' '}
                  <strong className="text-[#1A3038]">{email}</strong> on{' '}
                  <strong className="text-[#1A3038]">{selectedDate}</strong> at{' '}
                  <strong className="text-[#1A3038]">{selectedTime}</strong>.
                </p>
              </div>

              <div className="p-4 bg-[#F2ECE4] border border-[#E0D8CE] text-xs text-[#4A6064] max-w-md mx-auto rounded-sm space-y-1 text-left">
                <div className="flex items-center gap-2 text-[#1A3038] font-medium">
                  <Video className="w-4 h-4 text-[#3D5A56]" />
                  <span>Conducted via Zoom Virtual Room</span>
                </div>
                <p>Preparation questions will be emailed 24 hours prior to our conversation.</p>
              </div>

              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Session Type */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                  1. Select Consultation Focus
                </label>
                <div className="grid grid-cols-1 gap-2.5">
                  {SESSION_TYPES.map((session) => (
                    <label
                      key={session.id}
                      className={`block p-3.5 border rounded-sm cursor-pointer transition-all ${
                        selectedSession === session.id
                          ? 'border-[#1A3038] bg-white shadow-sm ring-1 ring-[#1A3038]'
                          : 'border-[#E0D8CE] bg-[#FAF8F5] hover:bg-[#F2ECE4]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="sessionType"
                            checked={selectedSession === session.id}
                            onChange={() => setSelectedSession(session.id)}
                            className="text-[#1A3038] focus:ring-[#1A3038]"
                          />
                          <div>
                            <span className="text-sm font-semibold text-[#1A3038] block">
                              {session.name}
                            </span>
                            <span className="text-xs text-[#5E7370] block mt-0.5 font-light">
                              {session.description}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono text-[#B36544] shrink-0 font-medium">
                          {session.duration}
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 2: Date & Time Picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#B36544]" />
                    <span>2. Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5CCC1] rounded-sm focus:outline-none focus:border-[#1A3038]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#B36544]" />
                    <span>3. Available Time Window</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5CCC1] rounded-sm focus:outline-none focus:border-[#1A3038]"
                  >
                    {AVAILABLE_TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Time Zone selector */}
              <div className="space-y-1.5">
                <label className="text-xs text-[#5E7370]">Your Time Zone:</label>
                <select
                  value={timeZone}
                  onChange={(e) => setTimeZone(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#F2ECE4] border border-[#D5CCC1] rounded-sm text-[#4A6064] focus:outline-none"
                >
                  <option value="Australia/Sydney (AEST)">Australia/Sydney (AEST / AEDT)</option>
                  <option value="Australia/Perth (AWST)">Australia/Perth (AWST)</option>
                  <option value="Europe/Paris / Brussels (CET)">Europe/Paris / Brussels (CET)</option>
                  <option value="Europe/London (GMT/BST)">Europe/London (GMT/BST)</option>
                  <option value="America/New_York (EST)">America/New York (EST/EDT)</option>
                  <option value="America/Los_Angeles (PST)">America/Los Angeles (PST/PDT)</option>
                  <option value="Asia/Singapore (SGT)">Asia/Singapore (SGT)</option>
                </select>
              </div>

              {/* Step 3: Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5CCC1] rounded-sm focus:outline-none focus:border-[#1A3038]"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="sarah@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D5CCC1] rounded-sm focus:outline-none focus:border-[#1A3038]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#4A6064]">
                  What key question or decision would you like to explore? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any brief context about your current crossroad..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#D5CCC1] rounded-sm focus:outline-none focus:border-[#1A3038] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#E8E2D9]">
                <span className="text-xs text-[#6B7F7D] font-light">
                  Direct virtual session via Zoom
                </span>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#4A6064] hover:text-[#1A3038] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A3038] hover:bg-[#25424D] rounded-sm transition-colors cursor-pointer"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

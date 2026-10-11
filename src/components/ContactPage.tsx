import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Mail,
  Phone,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  MapPin,
  Clock,
  ShieldCheck,
  MessageSquare,
  Inbox,
  Trash2,
  FileText,
  AlertCircle,
  ExternalLink,
  ChevronDown,
} from 'lucide-react';
import { contactInfo, inquiryTopics, StoredInquiry } from '../data/contactData';
import { dispatchContactEnquiry, DispatchResult } from '../services/emailService';

interface ContactPageProps {
  onBack: () => void;
  onOpenResume?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack, onOpenResume }) => {
  // Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState(inquiryTopics[0]);
  const [message, setMessage] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [submittedInquiry, setSubmittedInquiry] = useState<StoredInquiry | null>(null);
  const [dispatchResult, setDispatchResult] = useState<DispatchResult | null>(null);

  // Clipboard Feedback States
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedLinkedIn, setCopiedLinkedIn] = useState(false);

  // Operator Ledger Modal
  const [isLedgerOpen, setIsLedgerOpen] = useState(false);
  const [storedInquiries, setStoredInquiries] = useState<StoredInquiry[]>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    loadStoredInquiries();
  }, []);

  const loadStoredInquiries = () => {
    try {
      const data = localStorage.getItem('portfolio_contact_enquiries');
      if (data) {
        setStoredInquiries(JSON.parse(data));
      }
    } catch {
      // Ignore storage read errors
    }
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else if (type === 'phone') {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } else {
      setCopiedLinkedIn(true);
      setTimeout(() => setCopiedLinkedIn(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim()) {
      setErrorMessage('Please provide your name.');
      setFormStatus('error');
      return;
    }
    if (!senderEmail.trim() || !senderEmail.includes('@') || !senderEmail.includes('.')) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      return;
    }
    if (!message.trim() || message.trim().length < 10) {
      setErrorMessage('Please enter a message of at least 10 characters.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setErrorMessage('');

    try {
      const result = await dispatchContactEnquiry({
        senderName: senderName.trim(),
        senderEmail: senderEmail.trim(),
        subject,
        message: message.trim(),
      });

      const now = new Date();
      const newInquiry: StoredInquiry = {
        id: result.messageId,
        timestamp: result.timestamp,
        formattedDate: now.toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        senderName: senderName.trim(),
        senderEmail: senderEmail.trim(),
        subject,
        message: message.trim(),
        status: result.status === 'dispatched_live' ? 'dispatched' : 'queued_for_email_dispatch',
      };

      loadStoredInquiries();
      setSubmittedInquiry(newInquiry);
      setDispatchResult(result);
      setFormStatus('submitted');
    } catch {
      setErrorMessage('Encountered an issue dispatching message. Please try again.');
      setFormStatus('error');
    }
  };

  const handleResetForm = () => {
    setSenderName('');
    setSenderEmail('');
    setSubject(inquiryTopics[0]);
    setMessage('');
    setFormStatus('idle');
    setErrorMessage('');
    setSubmittedInquiry(null);
    setDispatchResult(null);
  };

  const handleClearLedger = () => {
    if (window.confirm('Clear all stored inquiries from this browser session?')) {
      localStorage.removeItem('portfolio_contact_enquiries');
      setStoredInquiries([]);
    }
  };

  return (
    <div className="min-h-screen text-[#faf8f3] selection:bg-[#e6c280] selection:text-[#182713] relative select-none">
      {/* Sticky Top Header Navigation */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-[#121c0e]/92 border-b border-[#3e5630]/60 transition-all">
        <div className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between gap-4">
          {/* Back Button */}
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#142210]/90 hover:bg-[#1f3518] border border-[#3e5630]/70 hover:border-[#ffd700]/70 text-[#faf8f3] hover:text-[#fffff8] font-mono text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(10,18,8,0.6)] active:scale-95"
            aria-label="Back to Portfolio"
          >
            <ArrowLeft className="w-4 h-4 text-[#ffd700] transition-transform group-hover:-translate-x-1" />
            <span>Back to Portfolio</span>
          </button>

          {/* Breadcrumb Index */}
          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-[#e6c280]">
            <span className="text-[#a89060]">Curated Portfolio</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#ffd700] font-bold">Dialogue & Dispatch</span>
            <span className="text-[#5c3a25]">/</span>
            <span className="text-[#fffff8] font-medium">Let's Talk</span>
          </div>

          {/* Quick Resume Link */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1e2f18]/80 hover:bg-[#284020] border border-[#ffd700]/40 text-[#ffd700] hover:text-[#fffff8] font-mono text-xs transition-all duration-200 shadow-[0_2px_12px_rgba(10,18,8,0.5)] active:scale-95 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">View Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1480px] mx-auto px-6 sm:px-10 lg:px-16 py-12 md:py-16">
        {/* Editorial Page Title Section */}
        <section className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#182713]/80 border border-[#ffd700]/30 font-mono text-xs text-[#ffd700] uppercase tracking-[0.28em] mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            <span>Direct Dispatch & Dialogue</span>
          </div>

          <h1 className="font-editorial text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fffff8] drop-shadow-[0_8px_32px_rgba(230,194,128,0.25)] leading-[0.94] tracking-[-0.03em] mb-6">
            Let's Connect & Collaborate
          </h1>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#3e5630]/60 pb-8">
            <p className="max-w-2xl text-base sm:text-lg md:text-xl text-[#f0ebd8] font-sans font-light leading-relaxed">
              Whether you are exploring a Working Student or AI Engineering opportunity in Germany, discussing multi-agent architectures, or exchanging engineering insights—reach out via your preferred channel below.
            </p>

            {/* Availability Beacon Pill */}
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#162912]/90 to-[#101e0c]/90 border border-[#487337]/60 shadow-[0_4px_20px_rgba(10,18,8,0.6)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
              </span>
              <div className="font-mono text-xs text-[#f0ebd8]">
                <span className="text-emerald-400 font-semibold block">Available Immediately</span>
                <span className="text-[#a89060] text-[11px]">Working Student / Frankfurt am Main, Germany</span>
              </div>
            </div>
          </div>
        </section>

        {/* Two-Column Grid: Left (Direct Channels: Email, Phone, LinkedIn) | Right (Interactive Message Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* LEFT COLUMN: 3 Direct Channels (Email, Phone, LinkedIn) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#e6c280] flex items-center gap-2">
              <span>Direct Channels</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#e6c280]/40 to-transparent" />
            </div>

            {/* CHANNEL 1: DIRECT EMAIL */}
            <div className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#182713]/90 via-[#142010]/85 to-[#0e170b]/90 border border-[#3e5630]/70 hover:border-[#ffd700]/70 transition-all duration-300 shadow-[0_8px_30px_rgba(10,18,8,0.7)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 border border-[#ffd700]/40 flex items-center justify-center text-[#ffd700] shadow-[0_0_16px_rgba(255,215,0,0.2)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] text-[#e6c280] px-2.5 py-1 rounded-full bg-[#121c0e] border border-[#3e5630]">
                    Direct Mail
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#fffff8] mb-1">
                  Email Correspondence
                </h3>
                <p className="font-mono text-sm text-[#ffd700] font-medium mb-3 select-all break-all">
                  {contactInfo.email}
                </p>
                <p className="font-sans text-xs text-[#dcd4c5] font-light leading-relaxed mb-6">
                  Direct dispatch to primary mailbox. Opens your email client with ready context. Typically answered within 12–24 business hours.
                </p>
              </div>

              {/* Action Buttons for Email */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#3e5630]/50">
                <a
                  href={`mailto:${contactInfo.email}?subject=Inquiry%20via%20Portfolio%20-%20Abhimanyu%20Kanase&body=Hi%20Abhimanyu%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20connect%20regarding...`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ffd700] to-[#e6c280] hover:from-[#ffe033] hover:to-[#ffd700] text-[#1c0f08] font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#1c0f08]" />
                  <span>Start New Email</span>
                  <ArrowUpRight className="w-4 h-4 text-[#1c0f08]" />
                </a>

                <button
                  onClick={() => copyToClipboard(contactInfo.email, 'email')}
                  className="px-3.5 py-3 rounded-xl bg-[#142210] hover:bg-[#1f3518] border border-[#3e5630] hover:border-[#ffd700]/60 text-[#e6c280] hover:text-[#fffff8] font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CHANNEL 2: PHONE & CALL */}
            <div className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#182713]/90 via-[#142010]/85 to-[#0e170b]/90 border border-[#3e5630]/70 hover:border-[#ffd700]/70 transition-all duration-300 shadow-[0_8px_30px_rgba(10,18,8,0.7)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ffd700]/20 to-[#ffd700]/5 border border-[#ffd700]/40 flex items-center justify-center text-[#ffd700] shadow-[0_0_16px_rgba(255,215,0,0.2)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] text-[#e6c280] px-2.5 py-1 rounded-full bg-[#121c0e] border border-[#3e5630]">
                    Direct Phone
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#fffff8] mb-1">
                  Phone & WhatsApp
                </h3>
                <p className="font-mono text-sm text-[#ffd700] font-medium mb-3 select-all">
                  {contactInfo.phone}
                </p>
                <p className="font-sans text-xs text-[#dcd4c5] font-light leading-relaxed mb-6">
                  Direct telephone contact based in Frankfurt am Main, Germany (CET). Available for recruiter screenings, audio interviews, and voice coordination.
                </p>
              </div>

              {/* Action Buttons for Phone */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#3e5630]/50">
                <a
                  href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#142210] hover:bg-[#1f3518] border border-[#ffd700]/60 hover:border-[#ffd700] text-[#ffd700] hover:text-[#fffff8] font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(10,18,8,0.5)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#ffd700]" />
                  <span>Call Directly</span>
                  <ArrowUpRight className="w-4 h-4 text-[#ffd700]" />
                </a>

                <button
                  onClick={() => copyToClipboard(contactInfo.phone, 'phone')}
                  className="px-3.5 py-3 rounded-xl bg-[#142210] hover:bg-[#1f3518] border border-[#3e5630] hover:border-[#ffd700]/60 text-[#e6c280] hover:text-[#fffff8] font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Copy phone number to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* CHANNEL 3: LINKEDIN CHAT & PROFILE */}
            <div className="group relative p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#182713]/90 via-[#142010]/85 to-[#0e170b]/90 border border-[#3e5630]/70 hover:border-[#ffd700]/70 transition-all duration-300 shadow-[0_8px_30px_rgba(10,18,8,0.7)] hover:shadow-[0_12px_40px_rgba(255,215,0,0.15)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077b5]/30 to-[#0077b5]/10 border border-[#0077b5]/50 flex items-center justify-center text-[#70b5f9] shadow-[0_0_16px_rgba(0,119,181,0.25)]">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-[11px] text-[#70b5f9] px-2.5 py-1 rounded-full bg-[#121c0e] border border-[#0077b5]/40">
                    LinkedIn Network
                  </span>
                </div>

                <h3 className="font-editorial text-2xl text-[#fffff8] mb-1">
                  LinkedIn Profile & Chat
                </h3>
                <p className="font-mono text-sm text-[#70b5f9] font-medium mb-3 select-all break-all">
                  {contactInfo.linkedinDisplay}
                </p>
                <p className="font-sans text-xs text-[#dcd4c5] font-light leading-relaxed mb-6">
                  Visit my official profile to start a direct LinkedIn message or InMail, view verified credentials, and connect professionally.
                </p>
              </div>

              {/* Action Buttons for LinkedIn */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#3e5630]/50">
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#0077b5] to-[#005582] hover:from-[#0088d1] hover:to-[#006699] text-[#ffffff] font-sans font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-[0_4px_16px_rgba(0,119,181,0.35)] hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 text-white" />
                  <span>Start LinkedIn Chat</span>
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>

                <button
                  onClick={() => copyToClipboard(contactInfo.linkedin, 'linkedin')}
                  className="px-3.5 py-3 rounded-xl bg-[#142210] hover:bg-[#1f3518] border border-[#3e5630] hover:border-[#0077b5]/60 text-[#70b5f9] hover:text-[#fffff8] font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
                  title="Copy LinkedIn URL"
                >
                  {copiedLinkedIn ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Message Enquiry Form (Direct Card) */}
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-[0.25em] text-[#e6c280] flex items-center gap-2 mb-6">
              <span>Direct Message Enquiry Card</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#e6c280]/40 to-transparent" />
            </div>

            <div className="relative p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#1b120c]/90 via-[#182013]/90 to-[#0e160a]/95 border-2 border-[#852238]/60 hover:border-[#ffd700]/60 transition-all duration-300 shadow-[0_16px_45px_rgba(10,18,8,0.85),0_0_30px_rgba(133,34,56,0.2)]">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#3e5630]/60">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#380712]/80 border border-[#852238]/80 text-[#ffd700] font-mono text-[11px] mb-2">
                    <MessageSquare className="w-3 h-3 text-[#ffd700]" />
                    <span>Direct Operator Dispatch</span>
                  </div>
                  <h2 className="font-editorial text-3xl sm:text-4xl text-[#fffff8]">
                    Write a Message Here
                  </h2>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-mono text-[11px] text-[#a89060] block">Delivery Target</span>
                  <span className="font-mono text-xs text-[#ffd700] font-medium">kanaseabhimanyu@gmail.com</span>
                </div>
              </div>

              {formStatus === 'submitted' && submittedInquiry ? (
                /* SUCCESS STATE CARD */
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#122812]/95 to-[#0b1a0b]/95 border border-emerald-500/50 shadow-[0_8px_32px_rgba(16,185,129,0.15)] text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-[0_0_24px_rgba(16,185,129,0.35)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/60 font-mono text-xs text-emerald-300 uppercase tracking-widest mb-3">
                    {dispatchResult?.status === 'dispatched_live'
                      ? 'Email Dispatched via Serverless Gateway'
                      : 'Enquiry Recorded & Queued for Dispatch'}
                  </span>

                  <h3 className="font-editorial text-3xl text-[#fffff8] mb-2">
                    Thank You, {submittedInquiry.senderName}!
                  </h3>

                  <p className="font-sans text-sm text-[#f0ebd8] max-w-lg mx-auto mb-6 leading-relaxed">
                    {dispatchResult?.status === 'dispatched_live' ? (
                      <>
                        Your message was directly transmitted via <span className="font-mono text-[#ffd700] font-semibold">{dispatchResult.provider}</span> to the operator's inbox under reference <span className="font-mono text-[#ffd700] font-semibold">{submittedInquiry.id}</span>.
                      </>
                    ) : (
                      <>
                        Your message has been securely recorded in our dispatch ledger under reference <span className="font-mono text-[#ffd700] font-semibold">{submittedInquiry.id}</span>. It is queued for email delivery to <span className="font-mono text-[#ffd700]">kanaseabhimanyu@gmail.com</span>.
                      </>
                    )}
                  </p>

                  {/* Summary Box */}
                  <div className="p-4 sm:p-5 rounded-xl bg-[#0a140a]/80 border border-emerald-800/40 text-left font-mono text-xs text-[#dcd4c5] mb-6 max-w-xl mx-auto space-y-2">
                    <div className="flex justify-between border-b border-emerald-900/40 pb-2">
                      <span className="text-[#a89060]">Reference ID:</span>
                      <span className="text-[#ffd700] font-semibold">{submittedInquiry.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-900/40 pb-2">
                      <span className="text-[#a89060]">Sender:</span>
                      <span className="text-[#fffff8]">{submittedInquiry.senderName} ({submittedInquiry.senderEmail})</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-900/40 pb-2">
                      <span className="text-[#a89060]">Topic:</span>
                      <span className="text-[#e6c280]">{submittedInquiry.subject}</span>
                    </div>
                    <div className="flex justify-between border-b border-emerald-900/40 pb-2">
                      <span className="text-[#a89060]">Timestamp:</span>
                      <span>{submittedInquiry.formattedDate}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-[#a89060] block mb-1">Message Preview:</span>
                      <p className="font-sans text-xs italic text-[#fffff8] bg-[#050b05]/60 p-2.5 rounded border border-emerald-950">
                        "{submittedInquiry.message}"
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <button
                      onClick={handleResetForm}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-[#ffd700] to-[#e6c280] hover:from-[#ffe033] hover:to-[#ffd700] text-[#1c0f08] font-sans font-semibold text-xs sm:text-sm transition-all shadow-[0_4px_16px_rgba(255,215,0,0.3)] hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                    <button
                      onClick={onBack}
                      className="px-6 py-3 rounded-full bg-[#142210] hover:bg-[#1f3518] border border-[#3e5630] text-[#faf8f3] font-sans font-medium text-xs sm:text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      Return to Portfolio
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUT STATE */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="font-sans text-xs sm:text-sm text-[#dcd4c5] font-light leading-relaxed">
                    Leave your enquiry below. Once submitted, your message is stored in the dispatch queue and will trigger an automated email notification to the operator.
                  </p>

                  {formStatus === 'error' && errorMessage && (
                    <div className="p-3.5 rounded-xl bg-[#380712]/90 border border-red-500/60 text-red-200 font-sans text-xs flex items-center gap-2.5">
                      <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email in Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-xs text-[#e6c280] mb-2 uppercase tracking-wider">
                        Your Full Name <span className="text-[#ffd700]">*</span>
                      </label>
                      <input
                        type="text"
                        value={senderName}
                        onChange={(e) => setSenderName(e.target.value)}
                        placeholder="e.g. Dr. Elena Schmidt"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0f170c]/90 border border-[#3e5630]/70 focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] text-[#fffff8] font-sans text-sm placeholder-[#7c7262] transition-all outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-xs text-[#e6c280] mb-2 uppercase tracking-wider">
                        Your Email Address <span className="text-[#ffd700]">*</span>
                      </label>
                      <input
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        placeholder="e.g. elena@company.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-[#0f170c]/90 border border-[#3e5630]/70 focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] text-[#fffff8] font-sans text-sm placeholder-[#7c7262] transition-all outline-none"
                      />
                    </div>
                  </div>

                  {/* Enquiry Subject / Topic */}
                  <div>
                    <label className="block font-mono text-xs text-[#e6c280] mb-2 uppercase tracking-wider">
                      Enquiry Topic / Focus <span className="text-[#ffd700]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-[#0f170c]/90 border border-[#3e5630]/70 focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] text-[#fffff8] font-sans text-sm appearance-none outline-none cursor-pointer pr-10"
                      >
                        {inquiryTopics.map((topic) => (
                          <option key={topic} value={topic} className="bg-[#121c0e] text-[#fffff8]">
                            {topic}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-[#ffd700] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message Body */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block font-mono text-xs text-[#e6c280] uppercase tracking-wider">
                        Your Message & Scope <span className="text-[#ffd700]">*</span>
                      </label>
                      <span className="font-mono text-[11px] text-[#a89060]">
                        {message.length} characters
                      </span>
                    </div>
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Detail your inquiry, project scope, team overview, or question for Abhimanyu..."
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-[#0f170c]/90 border border-[#3e5630]/70 focus:border-[#ffd700] focus:ring-1 focus:ring-[#ffd700] text-[#fffff8] font-sans text-sm placeholder-[#7c7262] transition-all outline-none resize-none"
                    />
                  </div>

                  {/* Submission Row */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="group px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#380712]/95 via-[#4a0a18]/92 to-[#2a1a10]/95 hover:from-[#5a1020] hover:to-[#380712] border border-[#852238]/90 hover:border-[#ffd700] hover:shadow-[0_0_32px_rgba(133,34,56,0.65),0_0_16px_rgba(255,215,0,0.35)] text-[#fffff8] transition-all duration-200 font-sans font-semibold text-sm sm:text-base flex items-center justify-center gap-3 hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_8px_28px_rgba(56,7,18,0.55)]"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Queueing Dispatch...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#ffd700] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          <span>Dispatch Enquiry to Operator</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-[11px] font-mono text-[#a89060]">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Stored safely & encrypted in transit</span>
                    </div>
                  </div>
                </form>
              )}

              {/* OPERATOR STORAGE LEDGER FOOTER */}
              <div className="mt-8 pt-6 border-t border-[#3e5630]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-[#a89060]">
                <div className="flex items-center gap-2">
                  <Inbox className="w-3.5 h-3.5 text-[#ffd700]" />
                  <span>
                    Local Dispatch Ledger: <strong className="text-[#ffd700]">{storedInquiries.length}</strong> message(s) stored
                  </span>
                </div>

                <button
                  onClick={() => setIsLedgerOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[#e6c280] hover:text-[#ffd700] underline underline-offset-4 cursor-pointer transition-colors"
                >
                  <span>Inspect Stored Ledger</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM METRICS & GEOGRAPHY STRIP */}
        <section className="mt-16 pt-8 border-t border-[#3e5630]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
          <div className="p-5 rounded-2xl bg-[#121c0e]/80 border border-[#3e5630]/50">
            <div className="flex items-center gap-2 text-[#e6c280] mb-1">
              <MapPin className="w-4 h-4 text-[#ffd700]" />
              <span className="uppercase tracking-wider">Location</span>
            </div>
            <p className="font-sans text-sm text-[#fffff8] font-medium">Frankfurt am Main, Germany</p>
            <p className="text-[11px] text-[#a89060] mt-0.5">Hessen / Central European Hub</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121c0e]/80 border border-[#3e5630]/50">
            <div className="flex items-center gap-2 text-[#e6c280] mb-1">
              <Clock className="w-4 h-4 text-[#ffd700]" />
              <span className="uppercase tracking-wider">Timezone</span>
            </div>
            <p className="font-sans text-sm text-[#fffff8] font-medium">CET / CEST (UTC+1 / UTC+2)</p>
            <p className="text-[11px] text-[#a89060] mt-0.5">Flexible for European & US East overlap</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121c0e]/80 border border-[#3e5630]/50">
            <div className="flex items-center gap-2 text-[#e6c280] mb-1">
              <Sparkles className="w-4 h-4 text-[#ffd700]" />
              <span className="uppercase tracking-wider">Commitment</span>
            </div>
            <p className="font-sans text-sm text-[#fffff8] font-medium">12–24h Response Rate</p>
            <p className="text-[11px] text-[#a89060] mt-0.5">Guaranteed review for all inquiries</p>
          </div>

          <div className="p-5 rounded-2xl bg-[#121c0e]/80 border border-[#3e5630]/50">
            <div className="flex items-center gap-2 text-[#e6c280] mb-1">
              <ShieldCheck className="w-4 h-4 text-[#ffd700]" />
              <span className="uppercase tracking-wider">Verification</span>
            </div>
            <p className="font-sans text-sm text-[#fffff8] font-medium">Verified Identity</p>
            <p className="text-[11px] text-[#a89060] mt-0.5">M.Sc. Data Science, Hochschule Fulda</p>
          </div>
        </section>
      </main>

      {/* OPERATOR STORAGE LEDGER MODAL / DRAWER */}
      {isLedgerOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-3xl max-h-[85vh] rounded-3xl bg-[#121c0e] border border-[#852238]/70 shadow-[0_20px_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 border-b border-[#3e5630]/60 flex items-center justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono text-[#ffd700] uppercase tracking-wider mb-1">
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Local Dispatch Storage</span>
                </div>
                <h3 className="font-editorial text-2xl text-[#fffff8]">
                  Stored Inquiries Ledger
                </h3>
              </div>
              <button
                onClick={() => setIsLedgerOpen(false)}
                className="w-9 h-9 rounded-full bg-[#1b2b16] hover:bg-[#284020] border border-[#3e5630] text-[#faf8f3] flex items-center justify-center transition-all cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: List of messages */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              <div className="p-4 rounded-xl bg-[#1a2814]/70 border border-[#3e5630] font-sans text-xs text-[#dcd4c5]">
                <p>
                  <strong>How storage works:</strong> Messages submitted on this page are stored locally in the browser's persistent <code className="font-mono text-[#ffd700]">localStorage</code> under the key <code className="font-mono text-[#ffd700]">portfolio_contact_enquiries</code>.
                </p>
                <p className="mt-2 text-[#a89060]">
                  Once the live email integration (e.g. EmailJS / Formspree / Serverless webhook) is connected to your email address, these messages will automatically dispatch directly to your inbox.
                </p>
              </div>

              {storedInquiries.length === 0 ? (
                <div className="py-12 text-center text-sm font-mono text-[#a89060]">
                  No inquiries recorded yet. Submit a message from the form to see it here!
                </div>
              ) : (
                storedInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className="p-5 rounded-2xl bg-[#0a1208]/90 border border-[#3e5630]/70 space-y-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#3e5630]/40 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#ffd700] font-bold">
                          {inq.id}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-[10px] font-mono text-emerald-400">
                          {inq.status}
                        </span>
                      </div>
                      <span className="font-mono text-[11px] text-[#a89060]">
                        {inq.formattedDate}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                      <div>
                        <span className="text-[#a89060]">Sender: </span>
                        <strong className="text-[#fffff8]">{inq.senderName}</strong>
                      </div>
                      <div>
                        <span className="text-[#a89060]">Email: </span>
                        <a
                          href={`mailto:${inq.senderEmail}`}
                          className="text-[#ffd700] underline"
                        >
                          {inq.senderEmail}
                        </a>
                      </div>
                      <div className="sm:col-span-2">
                        <span className="text-[#a89060]">Topic: </span>
                        <span className="text-[#e6c280]">{inq.subject}</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#121c0e] border border-[#3e5630]/50 font-sans text-xs text-[#faf8f3] whitespace-pre-wrap">
                      {inq.message}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 border-t border-[#3e5630]/60 flex items-center justify-between gap-4 bg-[#0d160a]">
              {storedInquiries.length > 0 && (
                <button
                  onClick={handleClearLedger}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-950/60 hover:bg-red-900/60 border border-red-800/60 text-red-300 font-mono text-xs transition-all cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Clear Ledger</span>
                </button>
              )}
              <button
                onClick={() => setIsLedgerOpen(false)}
                className="ml-auto px-6 py-2.5 rounded-full bg-[#1b2b16] hover:bg-[#284020] border border-[#3e5630] text-[#faf8f3] font-mono text-xs transition-all cursor-pointer"
              >
                Close Inspector
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

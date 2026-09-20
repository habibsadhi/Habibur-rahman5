import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface QuickAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAuditModal: React.FC<QuickAuditModalProps> = ({ isOpen, onClose }) => {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [focusArea, setFocusArea] = useState('Both SEO & Paid Ads');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`Free Audit Request for ${website}`);
    const body = encodeURIComponent(
      `Hi Habibur,\n\nI would like to request a free audit.\n\nWebsite: ${website}\nEmail: ${email}\nAudit Focus: ${focusArea}\n\nPlease let me know your findings and growth recommendations!`
    );

    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div
      id="quick-audit-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold w-fit mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Complimentary Service</span>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
          Request a Free SEO & Paid Ad Audit
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          I will manually review your website's technical indexing, keyword ranking gaps, and ad tracking to show you quick wins you can implement immediately.
        </p>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-1">Audit Request Received!</h4>
            <p className="text-xs text-slate-600 leading-relaxed mb-5">
              I'm reviewing {website} and will email the diagnostic teardown to {email} within 24 hours.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition-colors"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Your Website URL *
              </label>
              <input
                type="text"
                required
                placeholder="https://example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Where should I send the audit findings? *
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                What is your primary priority?
              </label>
              <select
                value={focusArea}
                onChange={(e) => setFocusArea(e.target.value)}
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
              >
                <option value="Both SEO & Paid Ads">Both Organic SEO & Paid Ads</option>
                <option value="Organic SEO & Google Rankings">Organic SEO & Google Rankings</option>
                <option value="Meta & Google Paid Ads ROAS">Meta & Google Paid Ads ROAS</option>
                <option value="Graphic Branding & Landing Page CRO">Graphic Branding & Landing Page CRO</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Generate Free Audit Teardown</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
              <span>No spam. 100% confidential manual audit.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

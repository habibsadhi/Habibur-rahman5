import React, { useState } from 'react';
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle2,
  Copy,
  Clock,
  Sparkles,
  Phone,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [service, setService] = useState(initialService || 'Digital Marketing & Paid Ads');
  const [budget, setBudget] = useState('$1,000 - $3,000/mo');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare mailto link for direct sending
    const subject = encodeURIComponent(`Project Inquiry: ${service} - from ${name}`);
    const body = encodeURIComponent(
      `Hi Habibur,\n\nName: ${name}\nEmail: ${email}\nWebsite/Company: ${website || 'N/A'}\nService Needed: ${service}\nTarget Budget: ${budget}\n\nProject Details:\n${message}\n\nLooking forward to hearing from you!`
    );

    // Open mail client
    window.open(`mailto:${personalInfo.email}?subject=${subject}&body=${body}`, '_blank');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Contact Details & Value Points */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Collaborate</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                Ready to Accelerate Your Organic Traffic & ROAS?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Whether you need a full technical SEO audit, a profit-driven Meta ad campaign, or a complete visual rebrand, let's discuss how we can achieve your target metrics.
              </p>

              {/* Direct Reach-Out Cards */}
              <div className="space-y-3 mb-8">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">Direct Email</span>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-emerald-600 shadow-xs">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">WhatsApp Chat</span>
                      <span className="text-sm font-bold text-slate-900">Direct Messaging</span>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${personalInfo.whatsappNumber.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    Chat Now
                  </a>
                </div>
              </div>
            </div>

            {/* Response Time & Guarantee Note */}
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-100">
              <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 mb-1">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Fast Response Policy</span>
              </div>
              <p className="text-xs text-indigo-700/90 leading-relaxed">
                I personally reply to all qualified project inquiries within 24 hours with initial thoughts or an audit proposal.
              </p>
            </div>
          </div>

          {/* Right Column - Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200/90 p-6 sm:p-10 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send a Project Brief</h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below. We can start with an initial audit or jump directly into strategy.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">Thank You, {name}!</h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto mb-6">
                    Your project details have been formulated. If your email application did not launch automatically, you can send an email directly to{' '}
                    <strong className="text-slate-900">{personalInfo.email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Sarah Jenkins"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Website or Brand URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., https://yourbrand.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Primary Service Needed *
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                      >
                        <option value="Digital Marketing & Paid Ads">Digital Marketing & Paid Ads</option>
                        <option value="SEO Strategy & Google Ranking">SEO Strategy & Google Ranking</option>
                        <option value="Graphic Design & Brand Identity">Graphic Design & Brand Identity</option>
                        <option value="Full Growth Retainer (All-in-One)">Full Growth Retainer (All-in-One)</option>
                        <option value="Free Site Audit Request">Free Site Audit Request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Estimated Monthly Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['<$1,000', '$1,000 - $3,000', '$3,000 - $7,000', '$7,000+'].map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setBudget(b)}
                          className={`py-2 px-2 text-center text-xs font-bold rounded-lg border transition-all ${
                            budget === b
                              ? 'bg-slate-900 text-white border-slate-900'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Project Goals & Context *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your current revenue bottlenecks, target audience, or design preferences..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-white border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

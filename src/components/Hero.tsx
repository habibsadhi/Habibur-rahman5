import React from 'react';
import {
  ArrowRight,
  TrendingUp,
  Sparkles,
  Award,
  CheckCircle2,
  Search,
  Megaphone,
  Palette,
  ExternalLink,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { personalInfo, heroStats } from '../data/portfolioData';

interface HeroProps {
  onOpenAuditModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAuditModal }) => {
  return (
    <section
      id="hero-section"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60"
    >
      {/* Subtle geometric light-theme decorative elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-100/60 via-blue-50/40 to-violet-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Availability Pill */}
            <div
              id="hero-availability-badge"
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold mb-6 shadow-xs"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Driving revenue with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-800">
                Digital Marketing, SEO
              </span>{' '}
              & Modern Graphic Design.
            </h1>

            {/* Bio & Value Proposition */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              Hi, I'm <strong className="text-slate-900 font-semibold">{personalInfo.name}</strong>. I scale brands by combining algorithmic Google SEO rankings, high-converting paid ad funnels, and striking visual brand identities that turn visitors into paying customers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#case-studies"
                id="hero-view-work-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-indigo-600 shadow-md hover:shadow-indigo-500/20 transition-all"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="hero-free-audit-btn"
                onClick={onOpenAuditModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-indigo-700 font-semibold text-sm border border-slate-300 hover:border-indigo-300 hover:bg-indigo-50/50 shadow-xs transition-all"
              >
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span>Free SEO & Ad Audit</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-pill"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200 transition-colors"
              >
                <span>Let's Talk</span>
              </a>
            </div>

            {/* Key Skill Pillars Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-6 border-t border-slate-200/80 w-full">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-2">
                Core Pillars:
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-blue-800 text-xs font-semibold border border-blue-200">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>SEO & Google Ranking</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 text-indigo-800 text-xs font-semibold border border-indigo-200">
                <Megaphone className="w-3.5 h-3.5" />
                <span>Meta & Google Ads</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 text-xs font-semibold border border-amber-200">
                <Palette className="w-3.5 h-3.5" />
                <span>Brand Identity & Graphics</span>
              </div>
            </div>
          </div>

          {/* Right Visual Card - Interactive Showcase of Growth & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Card */}
              <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-6 md:p-7 relative z-10">
                {/* Header of Visual Card */}
                <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                      HR
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-base leading-tight">
                        {personalInfo.name}
                      </h3>
                      <p className="text-xs font-medium text-indigo-600">
                        Senior Growth & Creative Partner
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                    Top Rated
                  </span>
                </div>

                {/* Simulated Performance Dashboard Metric */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/70 mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Client Organic Traffic Growth
                    </span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" /> +340% YoY
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-3xl font-extrabold text-slate-900">42,800</span>
                    <span className="text-xs text-slate-500 font-medium">monthly organic clicks</span>
                  </div>

                  {/* Visual Bar chart representation */}
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[22, 30, 42, 38, 55, 68, 72, 85, 92, 100].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                        <div
                          className={`w-full rounded-t transition-all ${
                            idx >= 7 ? 'bg-indigo-600' : 'bg-indigo-200'
                          }`}
                          style={{ height: `${val}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-[10px] font-medium text-slate-400 mt-1.5">
                    <span>Month 1</span>
                    <span>Month 3</span>
                    <span>Month 6 (Scaled)</span>
                  </div>
                </div>

                {/* 3 Metric Highlight Grid */}
                <div className="grid grid-cols-2 gap-3 mb-5">
                  <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-200/70">
                    <span className="text-xs text-slate-500 font-medium block">Average ROAS</span>
                    <span className="text-xl font-bold text-slate-900 block mt-0.5">4.2x Returns</span>
                    <span className="text-[11px] text-emerald-600 font-medium">Meta & Google Ads</span>
                  </div>
                  <div className="bg-slate-50/80 p-3 rounded-xl border border-slate-200/70">
                    <span className="text-xs text-slate-500 font-medium block">Design Output</span>
                    <span className="text-xl font-bold text-slate-900 block mt-0.5">250+ Assets</span>
                    <span className="text-[11px] text-indigo-600 font-medium">High-converting graphics</span>
                  </div>
                </div>

                {/* Verified Checklist */}
                <div className="space-y-2 text-xs font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Google Search Console & GA4 Certified Strategist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Meta Certified Media Buying & Full-Funnel Architect</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Custom Vector Branding & Packaging in Illustrator/Figma</span>
                  </div>
                </div>
              </div>

              {/* Decorative Floating Card: Ad ROAS */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 bg-white p-3.5 rounded-xl border border-slate-200 shadow-lg items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">$350,000+</div>
                  <div className="text-[11px] text-slate-500">Ad Spend Managed Safely</div>
                </div>
              </div>

              {/* Decorative Floating Card: Design Excellence */}
              <div className="hidden sm:flex absolute -top-5 -right-5 z-20 bg-white p-3 rounded-xl border border-slate-200 shadow-lg items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Palette className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold text-slate-800">100% Custom Design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Counter Bar */}
        <div className="mt-16 pt-10 border-t border-slate-200/90 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-slate-800 mt-1">{stat.label}</span>
              <span className="text-xs text-slate-500 font-medium">{stat.subtext}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

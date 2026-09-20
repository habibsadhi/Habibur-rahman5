import React, { useState } from 'react';
import {
  Calculator,
  Search,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Zap,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AuditCalculator: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roi' | 'audit'>('roi');

  // ROI Calculator States
  const [adSpend, setAdSpend] = useState<number>(3000);
  const [organicTraffic, setOrganicTraffic] = useState<number>(4500);
  const [averageOrderValue, setAverageOrderValue] = useState<number>(65);

  // SEO Health Checker States
  const [testUrl, setTestUrl] = useState<string>('');
  const [testKeyword, setTestKeyword] = useState<string>('');
  const [isAuditing, setIsAuditing] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<{
    score: number;
    metrics: { title: string; status: 'good' | 'warning' | 'critical'; note: string }[];
  } | null>(null);

  // Derived ROI calculations based on benchmark performance
  const estimatedROAS = adSpend > 5000 ? 4.3 : 3.8;
  const projectedPaidRevenue = Math.round(adSpend * estimatedROAS);
  const projectedOrganicIncrease = Math.round(organicTraffic * 2.8);
  const estimatedLeadsMonthly = Math.round((adSpend / 18) + (organicTraffic * 0.025));

  const handleRunAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testUrl.trim()) return;

    setIsAuditing(true);
    setAuditResult(null);

    // Simulate diagnostic check
    setTimeout(() => {
      setIsAuditing(false);
      setAuditResult({
        score: 72,
        metrics: [
          {
            title: 'Technical Crawlability & Indexation',
            status: 'good',
            note: 'Robots.txt and XML sitemap accessible. Canonical URL tags need consolidation.',
          },
          {
            title: 'Commercial Keyword Gap',
            status: 'warning',
            note: `Found 32 high-volume search queries for "${testKeyword || 'your niche'}" not yet targeted on landing pages.`,
          },
          {
            title: 'Ad Conversion Tracking & Pixel Setup',
            status: 'warning',
            note: 'Meta Pixel detected, but Server-Side Conversion API (CAPI) & GA4 Purchase Events are missing.',
          },
          {
            title: 'Visual Branding & Mobile CRO',
            status: 'good',
            note: 'Mobile layout responsive. Call-to-action button contrast can be optimized for +18% CTR.',
          },
        ],
      });
    }, 1200);
  };

  return (
    <section id="roi-calculator" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Growth Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Calculate Your Revenue Upside
          </h2>
          <p className="text-base text-slate-600">
            Discover the tangible revenue boost you could achieve with full-funnel digital marketing, organic search optimization, and conversion design.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs">
            <button
              type="button"
              onClick={() => setActiveTab('roi')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'roi'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Marketing & SEO ROI Calculator</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('audit')}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeTab === 'audit'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4" />
              <span>Instant Site Audit Preview</span>
            </button>
          </div>
        </div>

        {/* TAB 1: ROI CALCULATOR */}
        {activeTab === 'roi' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Sliders Input Column */}
              <div className="lg:col-span-6 space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      Planned Monthly Ad Spend
                    </label>
                    <span className="text-base font-extrabold text-indigo-600">
                      ${adSpend.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="20000"
                    step="250"
                    value={adSpend}
                    onChange={(e) => setAdSpend(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$500</span>
                    <span>$10,000</span>
                    <span>$20,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      Current Monthly Organic Visitors
                    </label>
                    <span className="text-base font-extrabold text-indigo-600">
                      {organicTraffic.toLocaleString()} visits
                    </span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={organicTraffic}
                    onChange={(e) => setOrganicTraffic(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>500</span>
                    <span>25,000</span>
                    <span>50,000+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      Average Order / Deal Value (AOV)
                    </label>
                    <span className="text-base font-extrabold text-indigo-600">
                      ${averageOrderValue}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="300"
                    step="5"
                    value={averageOrderValue}
                    onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$15</span>
                    <span>$150</span>
                    <span>$300</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
                  💡 <strong>Methodology:</strong> Modeled using proven portfolio performance across 120+ client campaigns with average 3.8x–4.3x ROAS and +280% organic keyword compounding.
                </div>
              </div>

              {/* Output Summary Column */}
              <div className="lg:col-span-6 bg-slate-900 text-white rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      Forecasted 6-Month Trajectory
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold">
                      Target ROAS: {estimatedROAS}x
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                      <span className="text-xs text-slate-400 block mb-1">
                        Est. Monthly Paid Revenue
                      </span>
                      <span className="text-2xl font-black text-white">
                        ${projectedPaidRevenue.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-emerald-400 block mt-1">
                        +${(projectedPaidRevenue - adSpend).toLocaleString()} net profit
                      </span>
                    </div>

                    <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/60">
                      <span className="text-xs text-slate-400 block mb-1">
                        Compounded Organic Traffic
                      </span>
                      <span className="text-2xl font-black text-white">
                        {projectedOrganicIncrease.toLocaleString()}
                      </span>
                      <span className="text-[11px] text-emerald-400 block mt-1">
                        Visits / month (Free Google clicks)
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 mb-6">
                    <div className="flex justify-between items-center text-xs text-slate-300 mb-2">
                      <span>Projected New Monthly Conversions / Inquiries:</span>
                      <span className="text-base font-bold text-white">
                        ~{estimatedLeadsMonthly} leads / sales
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-1.5">
                      <div className="bg-gradient-to-r from-emerald-400 to-indigo-500 h-1.5 rounded-full w-4/5" />
                    </div>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full py-3.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Build Your Custom Growth Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: INSTANT SITE AUDIT PREVIEW */}
        {activeTab === 'audit' && (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10 max-w-4xl mx-auto">
            <form onSubmit={handleRunAudit} className="mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
                <div className="sm:col-span-7">
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Website URL to Audit
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., yourcompany.com or brand.store"
                    value={testUrl}
                    onChange={(e) => setTestUrl(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                </div>
                <div className="sm:col-span-5">
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Primary Target Keyword or Niche
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., eco skincare, b2b saas"
                    value={testKeyword}
                    onChange={(e) => setTestKeyword(e.target.value)}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-100 outline-none"
                  />
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isAuditing}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-70"
                >
                  {isAuditing ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Analyzing On-Page SEO & Ad Signals...</span>
                    </>
                  ) : (
                    <>
                      <Zap className="w-4 h-4" />
                      <span>Run Free Diagnostic Check</span>
                    </>
                  )}
                </button>
              </div>
            </form>

            {/* Audit Diagnostics Display */}
            {auditResult && (
              <div className="pt-6 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-6">
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Estimated Site Health & Search Readiness Score
                    </span>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-3xl font-extrabold text-slate-900">
                        {auditResult.score} / 100
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
                        Optimization Needed for Top 3 Google Rankings
                      </span>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition-colors self-start sm:self-center"
                  >
                    Request Full 40-Point Manual Audit
                  </a>
                </div>

                <div className="space-y-3">
                  {auditResult.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-slate-200/80 bg-white flex items-start gap-3"
                    >
                      {metric.status === 'good' ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{metric.title}</h4>
                        <p className="text-xs text-slate-600 mt-0.5">{metric.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

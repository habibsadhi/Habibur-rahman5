import React, { useState } from 'react';
import {
  Briefcase,
  TrendingUp,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  Quote,
  Calendar,
  Building,
} from 'lucide-react';
import { caseStudiesData } from '../data/portfolioData';
import { CaseStudy } from '../types';

export const CaseStudiesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'marketing' | 'seo' | 'graphics'>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredStudies =
    activeFilter === 'all'
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.category === activeFilter);

  return (
    <section id="case-studies" className="py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Proven Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Case Studies & Results
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              Real commercial outcomes delivered through rigorous keyword architecture, paid creative split testing, and authoritative brand visuals.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-white rounded-xl border border-slate-200 self-start md:self-auto shadow-xs">
            {(
              [
                { key: 'all', label: 'All Projects' },
                { key: 'seo', label: 'SEO & Search' },
                { key: 'marketing', label: 'Paid Marketing' },
                { key: 'graphics', label: 'Graphic Design' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveFilter(tab.key)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-all ${
                  activeFilter === tab.key
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              id={`case-study-${study.id}`}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Image Banner */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-slate-100">
                <img
                  src={study.coverImage}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-slate-900 text-xs font-bold shadow-xs">
                    {study.industry}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-indigo-600 text-white text-xs font-bold shadow-xs">
                    {study.category.toUpperCase()}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="text-xs font-medium text-slate-200 flex items-center gap-2 mb-1">
                    <span>{study.client}</span>
                    <span>•</span>
                    <span>{study.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    {study.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {study.summary}
                  </p>

                  {/* Quantitative Results Strip */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-6">
                    {study.results.map((res, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-lg font-extrabold text-slate-900 tracking-tight">
                          {res.metric}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium leading-tight mt-0.5">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Trigger Action */}
                <button
                  type="button"
                  onClick={() => setSelectedCaseStudy(study)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs transition-all shadow-xs"
                >
                  <span>View Full Strategy Breakdown</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Modal Breakdown */}
        {selectedCaseStudy && (
          <div
            id="case-study-modal-backdrop"
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedCaseStudy(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Modal Header */}
              <div className="mb-6 pr-8">
                <div className="flex items-center gap-2.5 text-xs font-bold text-indigo-600 mb-2">
                  <span>{selectedCaseStudy.client}</span>
                  <span>•</span>
                  <span>{selectedCaseStudy.industry}</span>
                  <span>•</span>
                  <span>{selectedCaseStudy.year}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {selectedCaseStudy.title}
                </h3>
              </div>

              {/* Metrics Highlights Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-indigo-50/60 border border-indigo-100 mb-8">
                {selectedCaseStudy.results.map((res, i) => (
                  <div key={i}>
                    <div className="text-2xl font-black text-indigo-700">{res.metric}</div>
                    <div className="text-xs font-medium text-slate-600">{res.label}</div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="space-y-6 mb-8 text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    The Business Challenge
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    {selectedCaseStudy.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Strategic Execution & Methodology
                  </h4>
                  <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80">
                    {selectedCaseStudy.strategy}
                  </p>
                </div>
              </div>

              {/* Deliverables List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Specific Deliverables Provided
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedCaseStudy.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 p-2.5 bg-slate-50 rounded-lg border border-slate-200/60"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote if exists */}
              {selectedCaseStudy.testimonial && (
                <div className="p-5 rounded-xl bg-slate-900 text-white mb-8">
                  <div className="flex items-start gap-3">
                    <Quote className="w-6 h-6 text-indigo-400 shrink-0 mt-1" />
                    <div>
                      <p className="italic text-sm text-slate-200 mb-3">
                        "{selectedCaseStudy.testimonial.quote}"
                      </p>
                      <div className="text-xs font-bold text-white">
                        {selectedCaseStudy.testimonial.author}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {selectedCaseStudy.testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                <span className="text-xs text-slate-500 font-medium">
                  Want similar results for your business?
                </span>
                <a
                  href="#contact"
                  onClick={() => setSelectedCaseStudy(null)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors shadow-xs"
                >
                  Book Free Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

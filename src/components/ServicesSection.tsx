import React, { useState } from 'react';
import {
  TrendingUp,
  Megaphone,
  Palette,
  Check,
  Wrench,
  Sparkles,
  ArrowRight,
  Layers,
  BarChart3,
  Search,
} from 'lucide-react';
import { servicesData, skillsData } from '../data/portfolioData';

interface ServicesSectionProps {
  onSelectServiceForInquiry?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForInquiry }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'marketing' | 'seo' | 'graphics'>('all');

  const filteredSkills =
    activeSkillCategory === 'all'
      ? skillsData
      : skillsData.filter((s) => s.category === activeSkillCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-indigo-600" />;
      case 'Megaphone':
        return <Megaphone className="w-6 h-6 text-blue-600" />;
      case 'Palette':
        return <Palette className="w-6 h-6 text-amber-600" />;
      default:
        return <Sparkles className="w-6 h-6 text-indigo-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Specialized Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Services Engineered for Measurable Business Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            I don't just "run ads" or "make logos." I connect technical search optimization, data-guided paid acquisition, and custom visual design into a cohesive revenue engine.
          </p>
        </div>

        {/* 3 Core Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {servicesData.map((service) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-slate-50/70 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-lg hover:border-indigo-300 transition-all group"
            >
              <div>
                {/* Header with Icon & Metric Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold shadow-xs">
                    {service.highlightMetric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs font-semibold text-indigo-600 mb-3 tracking-wide">
                  {service.tagline}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/70">
                  <span className="text-xs font-bold text-slate-700 block uppercase tracking-wider">
                    Core Deliverables:
                  </span>
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tools Tags */}
                <div className="pt-4 border-t border-slate-200/70 mb-5">
                  <span className="text-[11px] font-semibold text-slate-500 block mb-2">
                    Industry Tools Used:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[11px] font-medium text-slate-700"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Inquiry CTA */}
                <a
                  href="#contact"
                  onClick={() => onSelectServiceForInquiry?.(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-indigo-600 hover:text-white text-slate-800 font-semibold text-xs border border-slate-200 hover:border-indigo-600 transition-all shadow-xs"
                >
                  <span>Inquire About {service.title.split('&')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Skills & Tool Mastery Sub-Section */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200/80 p-8 sm:p-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Technical Proficiency & Toolkit
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Battle-tested skills across performance media, search algorithms, and visual production.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1 bg-white rounded-xl border border-slate-200">
              {(
                [
                  { key: 'all', label: 'All Skills' },
                  { key: 'marketing', label: 'Paid Marketing' },
                  { key: 'seo', label: 'SEO & Search' },
                  { key: 'graphics', label: 'Graphic Design' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveSkillCategory(tab.key)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeSkillCategory === tab.key
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Skill Bars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSkills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-200 transition-all"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-800">{skill.name}</span>
                  {skill.badge && (
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100">
                      {skill.badge}
                    </span>
                  )}
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-indigo-500 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-[10px] text-slate-400 font-medium mt-1.5">
                  <span>Advanced Mastery</span>
                  <span className="font-bold text-slate-600">{skill.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Palette, Eye, Sparkles, X, Check, ExternalLink } from 'lucide-react';
import { graphicDesignShowcase } from '../data/portfolioData';
import { GraphicDesignItem } from '../types';

export const GraphicShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GraphicDesignItem | null>(null);

  const categories = [
    'All',
    'Branding & Logo',
    'Social Media Creatives',
    'Packaging & Print',
    'Ad Banners',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? graphicDesignShowcase
      : graphicDesignShowcase.filter((item) => item.category === selectedCategory);

  return (
    <section id="graphics" className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold mb-3">
              <Palette className="w-3.5 h-3.5" />
              <span>Visual Design & Brand Identity</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Graphic Design & Creative Production
            </h2>
            <p className="text-base text-slate-600 mt-2 max-w-xl">
              High-impact visual systems crafted in Adobe Illustrator, Photoshop, and Figma to elevate brand perception and increase ad click-through rates.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-slate-50 rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-lg hover:border-indigo-300 transition-all cursor-pointer flex flex-col"
              onClick={() => setActiveItem(item)}
            >
              {/* Image with zoom on hover */}
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white/95 text-slate-900 text-xs font-bold shadow-lg flex items-center gap-2">
                    <Eye className="w-4 h-4 text-indigo-600" />
                    <span>View Project Details</span>
                  </span>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-xs text-slate-900 text-[11px] font-bold shadow-xs">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 mb-1">{item.client}</div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200/70">
                  <div className="flex flex-wrap gap-1">
                    {item.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2 py-0.5 rounded bg-white text-[10px] font-semibold text-slate-600 border border-slate-200"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-indigo-600 flex items-center gap-1">
                    Preview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox / Item Detail Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200 relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/90 text-slate-700 hover:bg-white shadow-md transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="max-h-[500px] overflow-hidden bg-slate-100 relative">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover max-h-[500px]"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-800 text-xs font-bold border border-amber-200">
                    {activeItem.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    Client: <strong className="text-slate-800">{activeItem.client}</strong>
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Software:</span>
                    {activeItem.software.map((sw) => (
                      <span
                        key={sw}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-bold border border-slate-200"
                      >
                        {sw}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    onClick={() => setActiveItem(null)}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-colors shadow-xs"
                  >
                    Request Similar Design Work
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

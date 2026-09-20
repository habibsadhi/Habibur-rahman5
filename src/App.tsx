/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GraphicShowcase } from './components/GraphicShowcase';
import { AuditCalculator } from './components/AuditCalculator';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GitHubGuideModal } from './components/GitHubGuideModal';
import { QuickAuditModal } from './components/QuickAuditModal';

export default function App() {
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 2. Core Services & Skills */}
        <ServicesSection onSelectServiceForInquiry={handleSelectService} />

        {/* 3. Featured Case Studies & Quantifiable Metrics */}
        <CaseStudiesSection />

        {/* 4. Visual Graphic Design & Branding Gallery */}
        <GraphicShowcase />

        {/* 5. Interactive ROI & Site Audit Diagnostics Tool */}
        <AuditCalculator />

        {/* 6. Strategic Workflow Process */}
        <ProcessSection />

        {/* 7. Client Testimonials & FAQ */}
        <TestimonialsSection />

        {/* 8. Contact & Project Inquiry */}
        <ContactSection initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer onOpenGithubGuide={() => setIsGithubGuideOpen(true)} />

      {/* GitHub Sharing & Deployment Guide Modal */}
      <GitHubGuideModal
        isOpen={isGithubGuideOpen}
        onClose={() => setIsGithubGuideOpen(false)}
      />

      {/* Complimentary SEO & Paid Ad Audit Teardown Modal */}
      <QuickAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}

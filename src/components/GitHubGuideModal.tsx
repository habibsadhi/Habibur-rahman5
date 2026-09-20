import React, { useState } from 'react';
import {
  Github,
  X,
  Copy,
  CheckCircle2,
  Terminal,
  ExternalLink,
  Code2,
  FileCode,
  Globe,
  Share2,
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface GitHubGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GitHubGuideModal: React.FC<GitHubGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const gitDeployScript = `# Step 1: Clone or export your repository from AI Studio
# In AI Studio, click Settings -> Export to GitHub or Download ZIP

# Step 2: Install dependencies
npm install

# Step 3: Run locally
npm run dev

# Step 4: Build for production (GitHub Pages, Vercel, or Netlify)
npm run build`;

  return (
    <div
      id="github-guide-modal-backdrop"
      className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-md">
            <Github className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
              GitHub Ready & Share Guide
            </span>
            <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Export & Host Your Portfolio
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed mb-6">
          This portfolio is structured specifically for GitHub sharing, clean version control, and effortless deployment to GitHub Pages, Vercel, or Cloud Run.
        </p>

        {/* 3 Step Deployment Cards */}
        <div className="space-y-4 mb-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                1
              </span>
              <span>Export to GitHub from AI Studio</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-7">
              Click the <strong>Settings</strong> gear menu in AI Studio and select <strong>"Export to GitHub"</strong>. This pushes your entire clean codebase directly to your personal GitHub account in seconds.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                2
              </span>
              <span>Single-File Data Customization</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-7">
              All your text, links, email, projects, and case study metrics are consolidated in one easy-to-edit file: <code className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 font-mono text-[11px]">src/data/portfolioData.ts</code>. You can change everything there anytime!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1">
              <span className="w-5 h-5 rounded-full bg-indigo-600 text-white text-[11px] flex items-center justify-center">
                3
              </span>
              <span>Deploy for Free (GitHub Pages / Vercel)</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed pl-7">
              Build static assets with <code className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 font-mono text-[11px]">npm run build</code> (outputs to <code className="px-1.5 py-0.5 rounded bg-slate-200 text-slate-900 font-mono text-[11px]">dist/</code>). Connect your repo to Vercel or GitHub Pages for instant free custom-domain hosting!
            </p>
          </div>
        </div>

        {/* Copyable Terminal Snippet */}
        <div className="mb-6">
          <div className="flex items-center justify-between pb-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-600" />
              <span>Standard Terminal Commands</span>
            </span>
            <button
              type="button"
              onClick={() => copyToClipboard(gitDeployScript, 'commands')}
              className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              {copiedCode === 'commands' ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Commands</span>
                </>
              )}
            </button>
          </div>
          <pre className="p-4 rounded-xl bg-slate-900 text-slate-200 text-xs font-mono overflow-x-auto leading-relaxed">
            {gitDeployScript}
          </pre>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-3 pt-4 border-t border-slate-200">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
          >
            Got it, Let's Explore!
          </button>
        </div>
      </div>
    </div>
  );
};

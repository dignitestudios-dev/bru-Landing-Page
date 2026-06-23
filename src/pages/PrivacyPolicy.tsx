import { Link } from "wouter";
import { ArrowLeft, Clock, Shield } from "lucide-react";
import { privacyData } from "./policyData";
import { Footer } from "./sections/Footer";
import { useEffect } from "react";
import Navbar from "./sections/Navbar";

export default function PrivacyPolicy() {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col selection:bg-orange-200 selection:text-orange-900">
      {/* Header */}
      <Navbar />

      {/* Main content container */}
      <main className="flex-grow px-24 relative overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[300px] h-[300px] bg-[#FF8331]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 right-1/4 translate-x-1/2 w-[400px] h-[400px] bg-[#994F1D]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className=" mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          {/* Breadcrumb & Intro */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Trust & Safety
            </div>
            <h1 className="[font-family:'ClashDisplay',sans-serif] text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              {privacyData.title}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Last updated: {privacyData.updatedAt}</span>
            </div>
          </div>

          {/* Policy Document Body */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-10 md:p-12">
            {/* Intro text if present */}
            {privacyData.introParagraphs && privacyData.introParagraphs.length > 0 && (
              <div className="prose prose-slate max-w-none mb-8 pb-8 border-b border-slate-100">
                {privacyData.introParagraphs.map((para, index) => (
                  <p key={index} className="text-slate-600 leading-relaxed text-base mb-4 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Sections */}
            <div className="space-y-10">
              {privacyData.sections.map((section, secIdx) => (
                <div key={secIdx} className="group">
                  <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-100 group-hover:border-orange-200 transition-colors">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((para, paraIdx) => {
                      // Check if paragraph starts with item lists/definitions (e.g. "Cookie:", "Location (GPS):", "Name / Username")
                      const isListItem = para.includes(":\n") || para.startsWith("·");

                      if (isListItem) {
                        // Let's format lists or key/value definitions beautifully
                        const lines = para.split("\n");
                        return (
                          <div key={paraIdx} className="space-y-3 bg-slate-50/50 rounded-xl p-4 sm:p-5 border border-slate-100 mt-2">
                            {lines.map((line, lineIdx) => {
                              const colonIdx = line.indexOf(":");
                              if (colonIdx > 0 && colonIdx < 30) {
                                const key = line.substring(0, colonIdx).trim();
                                const val = line.substring(colonIdx + 1).trim();
                                return (
                                  <div key={lineIdx} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 text-sm">
                                    <span className="font-semibold text-slate-800 sm:w-1/4 shrink-0">{key}</span>
                                    <span className="text-slate-600 sm:w-3/4">{val}</span>
                                  </div>
                                );
                              }
                              return (
                                <p key={lineIdx} className="text-slate-600 text-sm leading-relaxed">
                                  {line.trim()}
                                </p>
                              );
                            })}
                          </div>
                        );
                      }

                      return (
                        <p key={paraIdx} className="text-slate-600 leading-relaxed text-sm sm:text-base ">
                          {para}
                        </p>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

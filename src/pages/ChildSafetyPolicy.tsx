import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ShieldAlert,
  Clock,
  ArrowLeft,
  Mail,
  Globe,
  AlertTriangle,
  UserX,
  FileCheck2,
  CheckCircle2,
  Scale,
  Users2,
  ExternalLink,
  Lock,
} from "lucide-react";
import Navbar from "./sections/Navbar";
import { Footer } from "./sections/Footer";
import { childSafetyData } from "./policyData";

export default function ChildSafetyPolicy() {
  // Use Date.now() for dynamically updated year
  const currentYear = new Date(Date.now()).getFullYear();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 flex flex-col selection:bg-orange-200 selection:text-orange-900">
      {/* Header */}
      <Navbar />

      {/* Main content container */}
      <main className="flex-grow md:px-24 relative overflow-hidden">
        {/* Soft background glow circles */}
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-[320px] h-[320px] bg-[#FF8331]/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-40 right-1/4 translate-x-1/2 w-[420px] h-[420px] bg-[#994F1D]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10 max-w-5xl">
          {/* Breadcrumb & Navigation */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>

          {/* Title Header */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/60 text-orange-700 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <ShieldAlert className="w-4 h-4 text-orange-600" />
              Safety & Protection
            </div>
            <h1 className="[font-family:'ClashDisplay',sans-serif] text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              {childSafetyData.title}
            </h1>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>Last updated: {childSafetyData.lastUpdated}</span>
            </div>
          </div>

          {/* Policy Document Body */}
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 sm:p-10 md:p-12 space-y-12">
            {/* Intro Alert Box */}
            <div className="bg-gradient-to-r from-orange-50/70 via-amber-50/40 to-slate-50 border-l-4 border-[#FF8331] rounded-2xl p-5 sm:p-6">
              <p className="text-slate-700 leading-relaxed text-base sm:text-lg font-medium">
                {childSafetyData.intro}
              </p>
            </div>

            {/* Section 1: Purpose */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  1
                </span>
                Purpose
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Bru is a dating and meetup app for adults. We are committed to protecting children and to keeping our platform free from child sexual abuse and exploitation (CSAE). This policy explains our standards, how we prevent and detect violations, and how we respond to them.
              </p>
            </section>

            {/* Section 2: Age Requirement */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  2
                </span>
                Age Requirement
              </h2>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-semibold uppercase tracking-wider mb-2">
                <UserX className="w-4 h-4" /> Strictly 18+
              </div>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
                Bru is strictly for people aged 18 and over. Anyone under 18 is not permitted to create an account or use the app.
              </p>
              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Users must confirm they are 18 or older when signing up and provide an accurate date of birth.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Accounts found to belong to a person under 18 are immediately suspended and removed.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 text-slate-700 text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <span>Bru is not directed at children and does not knowingly collect personal information from anyone under 18.</span>
                </li>
              </ul>
            </section>

            {/* Section 3: Zero Tolerance for CSAE */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  3
                </span>
                Zero Tolerance for Child Sexual Abuse and Exploitation
              </h2>
              <div className="bg-red-50/60 border border-red-100 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 text-red-800 font-semibold text-sm sm:text-base">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>Bru prohibits all content and behavior that sexualizes, exploits, or endangers children, including:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {[
                    "Child sexual abuse material (CSAM) of any kind, including AI-generated or altered imagery",
                    "Sexualized conversation or imagery involving minors",
                    "Grooming, solicitation, or attempts to contact minors",
                    "Sextortion or coercion involving minors",
                    "Trafficking or any form of child exploitation",
                    "Profiles, photos, bios, or messages that suggest a user is a minor"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-red-100 text-slate-700 text-sm">
                      <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-red-900 text-xs sm:text-sm font-medium pt-2">
                  Violations result in permanent removal from Bru and, where required, a report to the relevant authorities.
                </p>
              </div>
            </section>

            {/* Section 4: Prevention */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  4
                </span>
                Prevention
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We take proactive steps to keep minors off the platform and to reduce risk:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Age confirmation at sign-up and review of accounts flagged as possibly underage",
                  "Profile and photo review for signs a user is under 18",
                  "Automated and manual moderation of profiles, photos, and messages",
                  "Restrictions on sharing sensitive content in chat",
                  "Safety guidance for users on how to spot and report suspicious behavior"
                ].map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <FileCheck2 className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Reporting */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  5
                </span>
                Reporting
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Anyone can report a concern at any time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-semibold mb-2">
                      In-App Report
                    </span>
                    <h3 className="text-slate-900 font-semibold text-base mb-1">Within the Bru App</h3>
                    <p className="text-slate-600 text-sm">
                      Use the <strong>Report</strong> option directly on any user profile, photo, or message thread.
                    </p>
                  </div>
                </div>

                <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="inline-block px-2.5 py-1 rounded-md bg-orange-100 text-orange-800 text-xs font-semibold mb-2">
                      Direct Email
                    </span>
                    <h3 className="text-slate-900 font-semibold text-base mb-1">Email Safety Team</h3>
                    <a
                      href="mailto:support@brudating.com"
                      className="text-orange-600 hover:text-orange-700 font-medium text-sm inline-flex items-center gap-1.5 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      support@brudating.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">Priority Review: </span>
                Reports can be made anonymously. Reports involving possible harm to a child are treated as the highest priority and reviewed as quickly as possible, <strong>within 24 hours</strong>.
              </div>
            </section>

            {/* Section 6: Our Response */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  6
                </span>
                Our Response
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                When we identify or receive a report of CSAE content or conduct, we will:
              </p>
              <ol className="space-y-3 pt-2">
                {[
                  "Remove the content and suspend or permanently ban the account",
                  "Preserve relevant records as required by law",
                  "Report confirmed CSAM and related abuse to the appropriate authorities, including the National Center for Missing & Exploited Children (NCMEC) where applicable, and to local law enforcement in the relevant jurisdiction",
                  "Cooperate with valid law enforcement requests",
                  "Review the case to improve our safeguards"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-slate-50/70 rounded-xl p-3.5 border border-slate-100 text-slate-700 text-sm sm:text-base">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-500 text-white text-xs font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section 7: Compliance with the Law */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  7
                </span>
                Compliance with the Law
              </h2>
              <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
                <Scale className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Bru complies with applicable child safety and child protection laws and regulations in the countries where it operates, as well as the requirements of the Apple App Store and Google Play.
                </p>
              </div>
            </section>

            {/* Section 8: Moderation Team and Training */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  8
                </span>
                Moderation Team and Training
              </h2>
              <div className="flex items-start gap-3 bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100">
                <Users2 className="w-5 h-5 text-orange-600 shrink-0 mt-1" />
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  Our moderation and support team is trained to recognize signs of CSAE, handle reports sensitively, and escalate urgent cases. Access to sensitive reports is limited to authorized personnel.
                </p>
              </div>
            </section>

            {/* Section 9: Child Safety Contact */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  9
                </span>
                Child Safety Contact
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                For questions about this policy or to raise a child safety concern:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <a
                  href="mailto:support@brudating.com"
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Email</span>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors">
                      support@brudating.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.brudating.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-orange-50/50 hover:border-orange-200 transition-all group"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-medium">Website</span>
                    <span className="text-sm font-semibold text-slate-800 group-hover:text-orange-600 transition-colors inline-flex items-center gap-1">
                      https://www.brudating.com
                      <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                    </span>
                  </div>
                </a>
              </div>
            </section>

            {/* Section 10: Updates to This Policy */}
            <section className="space-y-4">
              <h2 className="[font-family:'ClashDisplay',sans-serif] text-xl sm:text-2xl font-semibold text-slate-900 flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm font-bold">
                  10
                </span>
                Updates to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We review this policy regularly and update it as laws, technology, and best practices change. The latest version is always available at{" "}
                <a
                  href="https://www.brudating.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:underline font-medium"
                >
                  https://www.brudating.com
                </a>
                .
              </p>
              <div className="pt-2 text-slate-600 text-sm sm:text-base">
                How we handle personal information is described in our{" "}
                <Link
                  to="/privacy-policy"
                  className="text-orange-600 hover:text-orange-700 font-semibold underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </div>
            </section>

            {/* Policy Footer Copyright */}
            <div className="pt-8 border-t border-slate-100 text-center sm:text-left text-slate-500 text-sm font-medium">
              © {currentYear} Bru App.
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

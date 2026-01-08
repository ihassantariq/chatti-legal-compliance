"use client";

import { useEffect } from "react";
import {
  FaFileContract,
  FaUserShield,
  FaMoneyBillWave,
  FaBan,
  FaChild,
  FaCopyright,
  FaExclamationTriangle,
  FaGavel,
  FaUserSecret,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function TermsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-[#F1F4F8] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FaFileContract size={56} className="mx-auto mb-4 text-black" />
          <h1 className="text-4xl font-bold text-black mb-3">
            Terms of Service
          </h1>
          <p className="text-black">
            Welcome to <strong>Chatti — My Personal AI Companion</strong>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-black">

          {/* Intro */}
          <section>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of
              Chatti, including our website, mobile applications, software, and
              related services (the “Services”).
            </p>
            <p className="mt-3">
              By creating an account or using Chatti, you agree to these Terms.
              If you do not agree, please do not use the Services.
            </p>
            <p className="mt-3">
              📩 Contact: <a href="mailto:devhouseco@gmail.com" className="underline font-medium">devhouseco@gmail.com</a>
            </p>
          </section>

          {/* 1 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserShield /> 1. About Chatti
            </h2>
            <p className="mt-3">
              Chatti provides a personal AI chatbot offering conversations,
              companionship features, wellness prompts, and general support
              tools.
            </p>

            
            <p>
              Chatti is not a medical, psychological, crisis, or professional
              service. We do not provide therapy, diagnosis, or emergency support.
            </p>

            <p className="mt-3 font-semibold">1.2 Emergencies</p>
            <p>
              Do NOT use Chatti in emergencies. Contact local emergency services
              immedi<p className="mt-3 font-semibold">1.1 Not Medical or Professional Advice</p>ately if you are at risk.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserShield /> 2. Accounts & Membership
            </h2>
            <p className="mt-3 font-semibold">2.1 Registration</p>
            <p className="mt-3">
              Some features require creating an account. You agree to provide accurate information and keep your login secure.
            </p>
            <p className="mt-3 font-semibold">2.2 Responsibility</p>
            <p className="mt-2">
              You are responsible for all activity under your account. Notify us
              immediately of unauthorized access.
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaMoneyBillWave /> 3. Subscriptions & Payments
            </h2>
            <p className="mt-3">
              Chatti may offer:
              </p>
              <ul>
                <li>Free features</li>
                <li>Paid subscription plans</li>
              </ul>
              <p>
               Payments are billed through app stores and auto-renew unless canceled.
            </p>
            <p className="mt-2">
              Refunds follow app-store policies and applicable law.
            </p>
          </section>

          {/* 4 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaBan /> 4. Cancellation & Termination
            </h2>
            <p className="mt-3">
              You may cancel at any time through your app-store account.
              We may suspend or terminate accounts for violations, abuse, or
              safety risks.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaExclamationTriangle /> 5. Acceptable Use
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Do not violate laws or rights</li>
              <li>No abusive, explicit, hateful, or harmful content</li>
              <li>No harassment or impersonation</li>
              <li>No malware, scraping, bots, or exploitation</li>
              <li>No unauthorized commercial resale</li>
            </ul>
          </section>

          {/* 6 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaChild /> 6. Age Requirement
            </h2>
            <p className="mt-3">
              Chatti is not intended for users under 18 years of age.
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaCopyright /> 7. Intellectual Property
            </h2>
            <p className="mt-3">
              All Chatti content, logos, and software belong to <strong>DevhouseSLR</strong>.
              You may not copy, sell, reverse-engineer, or modify the Services.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 8. Disclaimer & Liability
            </h2>
            <p className="mt-3">
              Chatti is provided “AS IS” and “AS AVAILABLE.” We do not guarantee
              accuracy, reliability, or emotional outcomes.
            </p>
            <p className="mt-2">
              Liability is limited to the greater of $100 USD or the amount paid
              in the last 6 months.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserSecret /> 9. Privacy
            </h2>
            <p className="mt-3">
              Please review the Chatti Privacy Policy to understand how your data
              is handled.
            </p>
          </section>

          {/* 10 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaSyncAlt /> 10. Changes to Terms
            </h2>
            <p className="mt-3">
              We may update these Terms at any time. Continued use means you
              accept the updated Terms.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <FaEnvelope size={36} className="mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2">
              📩 <a href="mailto:devhouseco@gmail.com" className="underline font-medium">
                devhouseco@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

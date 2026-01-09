"use client";

import { useEffect } from "react";
import {
  FaFileContract,
  FaUserShield,
  FaMoneyBillWave,
  FaBan,
  FaExclamationTriangle,
  FaChild,
  FaCopyright,
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
            TERMS OF SERVICE
          </h1>
          <h2 className="text-2xl font-bold text-black mb-3" >CHATTI: PERSONAL AI COMPANION</h2>
          <p className="text-sm text-gray-700">
            Last Updated: 8/1/2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-black">

          {/* Intro */}
          <section>
            <p>Welcome to Chatti — Personal AI Companion (“Chatti”).</p>
            <p className="mt-3">
              These Terms of Service (“Terms”) govern your access to and use of
              Chatti, including our website, mobile applications, software, and
              any related services (collectively, the “Services”).
            </p>
            <p className="mt-3">
              By creating an account, accessing, or using the Services, you agree
              to be bound by these Terms and all applicable laws and regulations.
              If you do not agree, please do not use Chatti.
            </p>
            <p className="mt-3">
              The terms “Chatti,” “we,” “us,” or “our” refer to [Your Company Name
              + Legal Entity + Jurisdiction].
            </p>
            <p className="mt-3">
              “You” refers to the user accessing or using the Services.
            </p>
            <p className="mt-3">
              “Device” refers to any device you use to access the Services,
              including smartphones, tablets, or computers.
            </p>
            <p className="mt-3">
              📩 Our contact email is:{" "}
              <a
                href="mailto:devhouseco@gmail.com"
                className="underline font-medium"
              >
                devhouseco@gmail.com
              </a>
            </p>
          </section>

          {/* 1 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserShield /> 1. ABOUT CHATTI
            </h2>
            <p className="mt-3">
              Chatti provides a personal AI chatbot designed to offer
              conversations, companionship features, wellness prompts, and
              general support tools.
            </p>

            <p className="mt-3 font-semibold">
              1.1 Not Medical or Professional Advice
            </p>
            <p>
              Chatti is not a medical, psychological, crisis, or professional
              service.
            </p>
            <p>
              We do not provide therapy, diagnosis, treatment, or emergency
              support. Always seek professional help when needed.
            </p>

            <p className="mt-3 font-semibold">1.2 Emergencies</p>
            <p>Do NOT use Chatti in emergencies.</p>
            <p>
              Contact local emergency services immediately if you feel unsafe or
              at risk.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserShield /> 2. ACCOUNTS & MEMBERSHIP
            </h2>

            <p className="mt-3 font-semibold">2.1 Registration</p>
            <p>
              Some features require creating an account. You agree to provide
              accurate information and keep your login secure.
            </p>

            <p className="mt-3 font-semibold">2.2 Responsibility</p>
            <p>
              You are responsible for all activity under your account. Notify us
              immediately of unauthorized use.
            </p>

            <p className="mt-3">
              📩 support:{" "}
              <a
                href="mailto:devhouseco@gmail.com"
                className="underline font-medium"
              >
                devhouseco@gmail.com
              </a>
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaMoneyBillWave /> 3. SUBSCRIPTIONS & PAYMENTS
            </h2>
            <p className="mt-3">Chatti may offer:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Free features</li>
              <li>Paid subscription plans</li>
            </ul>
            <p className="mt-2">
              Subscriptions are billed through the App Store/Google Play and
              auto-renew unless cancelled.
            </p>
            <p className="mt-2">
              Refunds follow app-store policies and applicable law.
            </p>
          </section>

          {/* 4 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaBan /> 4. CANCELLATION & TERMINATION
            </h2>
            <p className="mt-3">
              You may cancel anytime via your app-store account.
            </p>
            <p>
              We may suspend or terminate accounts for abuse, fraud, safety
              risks, or Terms violations.
            </p>
            <p>
              Deleting your account permanently removes stored data unless
              retention is legally required.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaExclamationTriangle /> 5. ACCEPTABLE USE
            </h2>
            <p className="mt-3">You agree not to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>break the law or violate rights</li>
              <li>
                upload harmful, abusive, offensive, explicit, or hateful content
              </li>
              <li>harass or impersonate others</li>
              <li>upload malware or hacking tools</li>
              <li>use automated scraping/bots</li>
              <li>attempt to disrupt or exploit the Services</li>
              <li>commercially resell Chatti without authorization</li>
            </ul>
            <p className="mt-2">
              We may remove content or suspend accounts violating these Terms.
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaChild /> 6. AGE REQUIREMENT
            </h2>
            <p className="mt-3">Chatti is not for users under 18.</p>
          </section>

          {/* 7 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaCopyright /> 7. INTELLECTUAL PROPERTY
            </h2>
            <p className="mt-3">
              All Chatti content, logos, and software belong to [DevhouseSLR].
            </p>
            <p>
              You may not copy, reverse-engineer, sell, or modify Chatti.
            </p>
            <p>
              Content you submit remains yours — but you grant Chatti permission
              to use it to operate and improve the Services.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 8. THIRD-PARTY SERVICES
            </h2>
            <p className="mt-3">
              Chatti may integrate third-party tools (e.g., app stores, hosting,
              analytics). We are not responsible for their policies or actions.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 9. DISCLAIMER & LIMITATION OF LIABILITY
            </h2>
            <p className="mt-3">
              Chatti is provided “AS IS” and “AS AVAILABLE.”
            </p>
            <p>We do not guarantee:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>uninterrupted service</li>
              <li>accuracy</li>
              <li>reliability</li>
              <li>suitability for a purpose</li>
              <li>emotional-wellbeing results</li>
            </ul>
            <p className="mt-2">
              To the maximum extent permitted by law:
            </p>
            <p>
              We are not liable for indirect, incidental, or consequential
              damages
            </p>
            <p>Total liability shall not exceed the greater of:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>the amount paid in the last 6 months, or</li>
              <li>$100 USD</li>
            </ul>
            <p className="mt-2">
              Your sole remedy if dissatisfied is to stop using Chatti.
            </p>
          </section>

          {/* 10 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 10. DISPUTES & GOVERNING LAW
            </h2>
            <p className="mt-3">
              These Terms are governed by the laws of [Your Country/Region].
            </p>
            <p>
              Where legally allowed, disputes will be resolved by binding
              arbitration or local courts (select local law during publication).
            </p>
          </section>

          {/* 11 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserSecret /> 11. PRIVACY
            </h2>
            <p className="mt-3">
              Your privacy matters.
            </p>
            <p>
              See the Chatti Privacy Policy to understand how your data is
              collected and used.
            </p>
            <p className="mt-2">
              📩 privacy contact:{" "}
              <a
                href="mailto:devhousco@gmail.com"
                className="underline font-medium"
              >
                devhousco@gmail.com
              </a>
            </p>
          </section>

          {/* 12 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaSyncAlt /> 12. CHANGES TO THESE TERMS
            </h2>
            <p className="mt-3">
              We may update these Terms at any time. Continued use means you
              agree to the updated Terms.
            </p>
          </section>

          {/* 13 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform text-center">
            <FaEnvelope size={36} className="mx-auto mb-3" />
            <h3 className="text-xl font-semibold">13. CONTACT US</h3>
            <p className="mt-2">Questions or concerns?</p>
            <p className="mt-2">
              📩{" "}
              <a
                href="mailto:devhousco@gmail.com"
                className="underline font-medium"
              >
                devhousco@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

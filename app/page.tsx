"use client";

import { useEffect } from "react";
import {
  FaUserSecret,
  FaDatabase,
  FaShieldAlt,
  FaShareAlt,
  FaGlobe,
  FaUserCheck,
  FaTrash,
  FaBell,
  FaGavel,
  FaEnvelope,
} from "react-icons/fa";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-[#F1F4F8] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FaUserSecret size={56} className="mx-auto mb-4 text-black" />
          <h1 className="text-4xl font-bold text-black mb-3">
            Privacy Policy
          </h1>
          <p className="text-black">
            Chatti — My Personal AI Companion
          </p>
          <p className="text-sm mt-2 text-gray-700">
            Last Updated: 8/1/2026
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="bg-gray-200 py-12">
        <div className="max-w-5xl mx-auto px-4 space-y-10 text-black">

          {/* Intro */}
          <section>
            <p>
              Your privacy matters to us. This Privacy Policy explains how
              <strong> Chatti — My Personal AI Companion</strong> collects, uses, stores, and protects your
              personal data when you use our Services.
            </p>
            <p className="mt-3">
              By using Chatti, you agree to the practices described in this
              Privacy Policy.
            </p>
            <p className="mt-3">
              📩 Privacy Contact:{" "}
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
              <FaDatabase /> 1. Data We Collect
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Account and profile information</li>
              <li>Chat content and interactions</li>
              <li>Device and usage data</li>
              <li>Subscription and payment status (handled by app stores)</li>
            </ul>
            <p className="mt-2">
              Chatti does not knowingly collect data from users under 18.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaShieldAlt /> 2. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Operate and maintain the Services</li>
              <li>Improve AI responses and user experience</li>
              <li>Ensure safety, security, and fraud prevention</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaShareAlt /> 3. Data Sharing
            </h2>
            <p className="mt-3">
              We may share data with trusted third-party providers for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Hosting and infrastructure</li>
              <li>Analytics and performance monitoring</li>
              <li>Payments and subscriptions</li>
            </ul>
            <p className="mt-2">
              These providers are required to follow strict privacy and security
              standards.
            </p>
          </section>

          {/* 4 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGlobe /> 4. International Data Transfers
            </h2>
            <p className="mt-3">
              Where personal data is transferred internationally, we apply
              legally approved safeguards to protect your information.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserCheck /> 5. Your Rights
            </h2>
            <p className="mt-3">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Access your data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion</li>
              <li>Restrict or object to processing</li>
              <li>Request a copy of your data</li>
            </ul>
            <p className="mt-2">
              📩 Requests:{" "}
              <a
                href="mailto:devhouseco@gmail.com"
                className="underline font-medium"
              >
                devhouseco@gmail.com
              </a>
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaTrash /> 6. Data Retention
            </h2>
            <p className="mt-3">
              We retain personal data only as long as necessary for service
              delivery, security, and legal compliance.
            </p>
            <p className="mt-2">
              Deleting your account results in data deletion or anonymization,
              unless retention is legally required.
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaBell /> 7. Data Breach Notification
            </h2>
            <p className="mt-3">
              In the event of a confirmed personal-data breach, affected users
              will be notified where required by law.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 8. Governing Law
            </h2>
            <p className="mt-3">
              This Privacy Policy is governed by applicable data-protection laws
              in your jurisdiction.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform text-center">
            <FaEnvelope size={36} className="mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-2">
              📩{" "}
              <a
                href="mailto:devhouseco@gmail.com"
                className="underline font-medium"
              >
                devhouseco@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </>
  );
}

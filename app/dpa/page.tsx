"use client";

import { useEffect } from "react";
import {
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

export default function DpaPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Header */}
      <div className="bg-[#F1F4F8] py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <FaDatabase size={56} className="mx-auto mb-4 text-black" />
          <h1 className="text-4xl font-bold text-black mb-3">
            Data Processing Agreement (DPA)
          </h1>
          <p className="text-black">
            Chatti — Personal AI Companion
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
              This DPA governs how <strong>Chatti</strong> (“Processor”) processes
              personal data on behalf of the user or customer (“Controller”)
              when providing the Chatti Services.
            </p>
            <p className="mt-3">
              📩 privacy & data protection contact:{" "}
              <a
                href="mailto:devhousco@gmail.com"
                className="underline font-medium"
              >
                devhousco@gmail.com
              </a>
            </p>
          </section>

          {/* 1 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaDatabase /> 1. PURPOSE
            </h2>
            <p className="mt-3">
              Personal data is processed only to operate, secure, maintain,
              and improve Chatti.
            </p>
          </section>

          {/* 2 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserCheck /> 2. TYPES OF PERSONAL DATA
            </h2>
            <p className="mt-3">This may include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>account/profile details</li>
              <li>chat content</li>
              <li>device & usage data</li>
              <li>subscription/payment records (handled by app stores)</li>
            </ul>
            <p className="mt-2">
              Chatti does not knowingly process children’s data.
            </p>
          </section>

          {/* 3 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaShieldAlt /> 3. SECURITY MEASURES
            </h2>
            <p className="mt-3">
              We apply appropriate technical and organizational safeguards
              including:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>encryption where applicable</li>
              <li>access controls</li>
              <li>monitoring and fraud-prevention systems</li>
              <li>confidentiality obligations</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaShareAlt /> 4. DATA SHARING & SUB-PROCESSORS
            </h2>
            <p className="mt-3">
              Trusted third-party providers may assist with hosting, analytics,
              messaging, or payments.
            </p>
            <p className="mt-2">
              They must follow privacy and security standards.
            </p>
          </section>

          {/* 5 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGlobe /> 5. INTERNATIONAL TRANSFERS
            </h2>
            <p className="mt-3">
              Where data is transferred internationally, legally-approved
              safeguards are applied.
            </p>
          </section>

          {/* 6 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaUserCheck /> 6. DATA RIGHTS
            </h2>
            <p className="mt-3">
              Depending on your location, you may have rights to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>access your data</li>
              <li>request correction</li>
              <li>request deletion</li>
              <li>restrict processing</li>
              <li>object to processing</li>
              <li>request a copy of your data</li>
            </ul>
            <p className="mt-2">
              To submit a request, email:
              <br />
              📩{" "}
              <a
                href="mailto:devhousco@gmail.com"
                className="underline font-medium"
              >
                devhousco@gmail.com
              </a>
            </p>
          </section>

          {/* 7 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaTrash /> 7. DATA RETENTION
            </h2>
            <p className="mt-3">
              Data is retained only as long as needed for:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>service delivery</li>
              <li>security</li>
              <li>legal compliance</li>
            </ul>
            <p className="mt-2">
              Account deletion results in data deletion or anonymization unless
              otherwise required by law.
            </p>
          </section>

          {/* 8 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaBell /> 8. INCIDENT NOTIFICATION
            </h2>
            <p className="mt-3">
              In the event of a confirmed personal-data breach, affected users
              will be notified where legally required.
            </p>
          </section>

          {/* 9 */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform">
            <h2 className="text-2xl font-semibold flex items-center gap-3">
              <FaGavel /> 9. GOVERNING LAW
            </h2>
            <p className="mt-3">
              This DPA is governed by applicable data-protection laws in
              [Your Region/Jurisdiction].
            </p>
          </section>

          {/* Contact */}
          <section className="bg-white shadow-2xl rounded-xl p-6 hover:translate-y-[-4px] transition-transform text-center">
            <FaEnvelope size={36} className="mx-auto mb-3" />
            <h3 className="text-xl font-semibold">Contact</h3>
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

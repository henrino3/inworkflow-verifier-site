import React from 'react';

export default function Security() {
  return (
    <div>
      {/* Hero Section */}
      <section className="security-hero" style={{ background: '#2563eb', color: 'white', padding: '0', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', padding: '4rem 0', gap: 48 }}>
          <div style={{ maxWidth: 600 }}>
            <div style={{ fontWeight: 600, fontSize: 18, opacity: 0.85, marginBottom: 16, color: 'white' }}>Security & Compliance</div>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: 'white' }}>Enterprise-grade security for every workflow</h1>
            <p style={{ fontSize: 20, color: 'white', marginBottom: 0, maxWidth: 520 }}>
              InWorkflow Verifier is built for the most demanding compliance and security requirements, with robust controls and transparent auditability.
            </p>
          </div>
        </div>
      </section>

      {/* Centered White Section */}
      <section style={{ background: 'white', padding: '4rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Compliance, auditability, and peace of mind</h2>
          <p style={{ fontSize: 20, color: '#4b5563', maxWidth: 700, margin: '0 auto' }}>
            We go beyond checkboxes—our platform is designed for real-world regulatory needs, with end-to-end encryption, role-based access, and continuous monitoring.
          </p>
        </div>
      </section>

      {/* Feature Card Section */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 32 }}>
          <div className="product-feature-card" style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: '2.5rem 2rem', maxWidth: 600, width: '100%' }}>
            <div style={{ marginBottom: 18 }}>
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M10 16.5l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1f2937', marginBottom: 12 }}>Security Features</h3>
            <ul style={{ fontSize: 17, color: '#4b5563', marginBottom: 0, paddingLeft: 20, listStyle: 'disc' }}>
              <li>Compliance with NIST 800-171 and FedRAMP Moderate standards</li>
              <li>Runs in Azure / AWS GovCloud</li>
              <li>All employees based in the United States</li>
              <li>FedRAMP-compliant infrastructure</li>
              <li>Transparent audit trail of all verification decisions</li>
              <li>End-to-end encryption for all data</li>
              <li>Role-based access controls</li>
              <li>Regular security audits and penetration testing</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
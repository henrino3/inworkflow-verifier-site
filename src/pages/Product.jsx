import React from 'react';

export default function Product() {
  return (
    <div>
      {/* Hero Section */}
      <section className="product-hero" style={{ background: '#2563eb', color: 'white', padding: '0', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4rem 0', gap: 48 }}>
          {/* Left: Text */}
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontWeight: 600, fontSize: 18, opacity: 0.85, marginBottom: 16, color: 'white' }}>AI for Verification</div>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: 'white' }}>Your platform determines your team's speed</h1>
            <p style={{ fontSize: 20, color: 'white', marginBottom: 36, maxWidth: 480 }}>
              InWorkflow connects your verification workflows to reduce friction, increase quality, and improve compliance.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="/get-access" className="btn btn-white" style={{ fontWeight: 700, fontSize: 18 }}>Get access</a>
              <a href="#" className="btn btn-primary" style={{ background: '#1e40af', color: 'white', fontWeight: 700, fontSize: 18 }}>Watch video</a>
            </div>
          </div>
          {/* Right: Product Screenshot Placeholder */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minWidth: 320 }}>
            <div style={{ width: 480, height: 320, background: 'white', borderRadius: 18, boxShadow: '0 8px 32px rgba(37,99,235,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 22 }}>Product Screenshot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Centered White Section */}
      <section style={{ background: 'white', padding: '4rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Increase verification quality while saving time and money</h2>
          <p style={{ fontSize: 20, color: '#4b5563', maxWidth: 700, margin: '0 auto' }}>
            Replace multiple broken tools with InWorkflow. The platform is designed to make your verification team more effective—and happier.
          </p>
        </div>
      </section>

      {/* Feature Card Section */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: 48, flexWrap: 'wrap' }}>
          {/* Left: Feature Card */}
          <div className="product-feature-card" style={{ background: 'white', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.07)', padding: '2.5rem 2rem', maxWidth: 480, flex: 1 }}>
            <div style={{ marginBottom: 18 }}>
              <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#2563eb"/><path d="M10 16.5l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, color: '#1f2937', marginBottom: 12 }}>Streamline Verification Development</h3>
            <p style={{ fontSize: 17, color: '#4b5563', marginBottom: 0 }}>
              InWorkflow automates compliance checks, document retrieval, and verification task creation—making them easy to review and refine.
            </p>
          </div>
          {/* Right: Product Screenshot Placeholder */}
          <div style={{ flex: 1, minWidth: 320, display: 'flex', justifyContent: 'center' }}>
            <div style={{ width: 520, height: 260, background: 'white', borderRadius: 18, boxShadow: '0 8px 32px rgba(37,99,235,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <span style={{ color: '#2563eb', fontWeight: 700, fontSize: 20 }}>Workflow Screenshot</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
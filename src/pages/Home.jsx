import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        minHeight: '600px',
        background: 'linear-gradient(180deg, #2563eb 0%, #3b82f6 40%, #f9fafb 100%)',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '64px 0', minHeight: 500 }}>
          {/* Left: Text */}
          <div style={{ maxWidth: 540, zIndex: 2 }}>
            <div style={{ fontWeight: 600, fontSize: 18, opacity: 0.85, marginBottom: 16 }}>AI for Verification</div>
            <h1 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: 'white' }}>
              The AI platform for winning verification workflows
            </h1>
            <p style={{ fontSize: 20, color: 'rgba(255,255,255,0.92)', marginBottom: 36, maxWidth: 480 }}>
              Produce high-quality verifications, run capture, organize your data, and a whole lot more. All in one place.
            </p>
            <form style={{ display: 'flex', gap: 0, alignItems: 'center', marginBottom: 40 }}>
              <input type="email" placeholder="Enter your email" style={{
                padding: '18px 20px',
                borderRadius: '8px 0 0 8px',
                border: 'none',
                fontSize: 18,
                outline: 'none',
                width: 260,
                background: 'rgba(255,255,255,0.18)',
                color: '#fff',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                borderRight: '1px solid #e5e7eb',
              }} />
              <button type="submit" style={{
                background: '#111827',
                color: 'white',
                fontWeight: 700,
                fontSize: 18,
                border: 'none',
                borderRadius: '0 8px 8px 0',
                padding: '18px 32px',
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              }}>See InWorkflow</button>
            </form>
          </div>
          {/* Right: Image placeholder */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', minWidth: 320 }}>
            <div style={{ width: 480, height: 320, background: 'white', borderRadius: 18, boxShadow: '0 8px 32px rgba(37,99,235,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <div style={{ width: 90, height: 90, background: '#2563eb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(37,99,235,0.10)' }}>
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="22" fill="none" />
                  <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="industries">
        <h2>Trusted by top capture & proposal teams</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, flexWrap: 'wrap' }}>
          {[1,2,3,4,5].map(i => (
            <div key={i} style={{ width: 120, height: 48, background: '#d1d5db', borderRadius: 8, opacity: 0.7 }} />
          ))}
        </div>
      </section>

      {/* Value Props Section */}
      <section className="features">
        <div className="features-grid">
          <div className="feature-card">
            <h3>Identify Opportunities</h3>
            <p>Opportunities recommended to you based on your company capabilities.</p>
          </div>
          <div className="feature-card">
            <h3>Accelerate Capture</h3>
            <p>Task area identification and comparison against your company capabilities.</p>
          </div>
          <div className="feature-card">
            <h3>Produce Proposals</h3>
            <p>Assign reviewers and check capture answers at each gate stage.</p>
          </div>
          <div className="feature-card">
            <h3>Manage Contracts</h3>
            <p>Fully annotated outlines with instructions, task areas, and evaluation criteria.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Less prompting, more results</h2>
        <p>
          InWorkflow Verifier is an employee that runs full workflows with your team, allowing you to spend more time on strategy and less on tasks.
        </p>
        <Link to="/get-access" className="btn btn-white">Get access</Link>
      </section>
    </div>
  );
}
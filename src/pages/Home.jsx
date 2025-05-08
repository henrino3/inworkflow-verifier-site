import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1>The AI platform for winning verification workflows</h1>
        <p>
          Produce high-quality verifications, run capture, organize your data, and a whole lot more. All in one place.
        </p>
        <form style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 32 }}>
          <input type="email" placeholder="Enter your email" style={{ padding: '0.75rem 1rem', borderRadius: 6, border: '1px solid #e5e7eb', fontSize: 16 }} />
          <Link to="/get-access" className="btn btn-primary">See InWorkflow</Link>
        </form>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
          <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', width: 480, height: 270, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 80, height: 80, background: '#1d4ed8', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
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
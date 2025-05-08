import React from 'react';

export default function Documentation() {
  return (
    <div className="features" style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Documentation</h1>
      <p>Access comprehensive resources to implement and optimize the In Workflow Verifier platform:</p>
      <ul className="features-grid">
        <li className="feature-card">API reference and integration guides</li>
        <li className="feature-card">Workflow configuration instructions</li>
        <li className="feature-card">Onboarding and implementation resources</li>
        <li className="feature-card">Best practices for workflow design</li>
        <li className="feature-card">Security and compliance guides</li>
        <li className="feature-card">Troubleshooting and support documentation</li>
      </ul>
      <p style={{ color: '#4b5563', marginTop: 24 }}>For detailed technical documentation, please contact our support team.</p>
    </div>
  );
}
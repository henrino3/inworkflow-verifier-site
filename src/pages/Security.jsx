import React from 'react';

export default function Security() {
  return (
    <div className="features" style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Security & Compliance</h1>
      <p>The In Workflow Verifier prioritizes security and compliance across all operations:</p>
      <ul className="features-grid">
        <li className="feature-card">Compliance with NIST 800-171 and FedRAMP Moderate standards</li>
        <li className="feature-card">Runs in Azure / AWS GovCloud</li>
        <li className="feature-card">All employees based in the United States</li>
        <li className="feature-card">FedRAMP-compliant infrastructure</li>
        <li className="feature-card">Transparent audit trail of all verification decisions</li>
        <li className="feature-card">End-to-end encryption for all data</li>
        <li className="feature-card">Role-based access controls</li>
        <li className="feature-card">Regular security audits and penetration testing</li>
      </ul>
    </div>
  );
}
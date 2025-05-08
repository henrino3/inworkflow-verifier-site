import React from 'react';

export default function Careers() {
  return (
    <div className="features" style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Careers</h1>
      <p>Join our team to help build the future of AI-powered human-in-the-loop verification. We're looking for talented individuals to join our mission:</p>
      <ul className="features-grid">
        <li className="feature-card">AI Engineer</li>
        <li className="feature-card">Frontend Developer</li>
        <li className="feature-card">Backend Developer</li>
        <li className="feature-card">Product Manager</li>
        <li className="feature-card">UX/UI Designer</li>
        <li className="feature-card">Sales Executive</li>
        <li className="feature-card">Customer Success Manager</li>
      </ul>
      <p style={{ color: '#4b5563', marginTop: 24 }}>We offer competitive compensation, flexible work arrangements, and the opportunity to work on cutting-edge AI technology that makes a real impact.</p>
      <p style={{ color: '#4b5563' }}>To apply, please send your resume to careers@inworkflowverifier.com</p>
    </div>
  );
}
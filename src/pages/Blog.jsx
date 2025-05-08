import React from 'react';

export default function Blog() {
  return (
    <div className="features" style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Blog</h1>
      <p style={{ color: '#4b5563', marginBottom: 32 }}>Insights, updates, and thought leadership on AI-powered verification and workflow automation.</p>
      <div className="feature-card" style={{ marginBottom: 32, borderBottom: '1px solid #e5e7eb', paddingBottom: 24 }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: 8 }}>The Future of Human-in-the-Loop Verification</h2>
        <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 8 }}>May 7, 2023 • 5 min read</div>
        <p style={{ color: '#4b5563' }}>Learn how AI and human expertise combine to create verification workflows that are both efficient and reliable...</p>
      </div>
      <div className="feature-card" style={{ marginBottom: 32, borderBottom: '1px solid #e5e7eb', paddingBottom: 24 }}>
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: 8 }}>Case Study: Insurance Claims Processing with HITL Verification</h2>
        <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 8 }}>April 23, 2023 • 8 min read</div>
        <p style={{ color: '#4b5563' }}>See how a leading insurance provider reduced claims processing time by 80% while maintaining accuracy...</p>
      </div>
      <div className="feature-card">
        <h2 style={{ fontSize: '1.5rem', color: '#1f2937', marginBottom: 8 }}>Regulatory Compliance in AI-Driven Workflows</h2>
        <div style={{ fontSize: 14, color: '#6b7280', marginBottom: 8 }}>April 10, 2023 • 6 min read</div>
        <p style={{ color: '#4b5563' }}>Explore best practices for maintaining regulatory compliance when implementing AI verification systems...</p>
      </div>
    </div>
  );
}
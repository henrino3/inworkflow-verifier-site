import React from 'react';

export default function Product() {
  return (
    <div className="features" style={{ maxWidth: 900, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Product Overview</h1>
      <h2>Problem Statement</h2>
      <p>AI solutions are increasingly adopted across industries, but their immaturity leads to challenges: incomplete automation, inefficient verification, scalability issues, regulatory risks, and integration barriers.</p>
      <h2>Solution Overview</h2>
      <p>The In Workflow Verifier enhances HITL processes by automating data pre-filling, contextual document retrieval, and providing a human verification interface, all with scalable infrastructure and auditability.</p>
      <h2>Key Features</h2>
      <ul className="features-grid">
        <li className="feature-card">AI Agent for Pre-filling</li>
        <li className="feature-card">AI Agent for Document Retrieval</li>
        <li className="feature-card">Verification Interface</li>
        <li className="feature-card">Configurable Workflows</li>
        <li className="feature-card">API Integration</li>
        <li className="feature-card">Audit Trail</li>
        <li className="feature-card">Scalable Architecture</li>
      </ul>
      <h2>Technical Architecture</h2>
      <ul className="features-grid">
        <li className="feature-card">Frontend: React + Custom CSS</li>
        <li className="feature-card">Backend: Node.js or Python</li>
        <li className="feature-card">AI Agents: OCR, NLP, RAG</li>
        <li className="feature-card">Storage: S3-compatible buckets</li>
        <li className="feature-card">API: RESTful, JSON payloads</li>
        <li className="feature-card">Database: PostgreSQL</li>
        <li className="feature-card">Deployment: Cloud-native, Kubernetes</li>
      </ul>
    </div>
  );
}
import React from 'react';

export default function Product() {
  return (
    <div>
      {/* Hero Section */}
      <section className="product-hero" style={{ background: '#2563eb', color: 'white', padding: '0', minHeight: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '4rem 0', gap: 48 }}>
          {/* Left: Text */}
          <div style={{ maxWidth: 520 }}>
            <div style={{ fontWeight: 600, fontSize: 18, opacity: 0.85, marginBottom: 16, color: 'white' }}>AI for Human-in-the-Loop Verification</div>
            <h1 style={{ fontSize: 44, fontWeight: 800, lineHeight: 1.1, marginBottom: 24, color: 'white' }}>The AI platform for reliable, scalable verification workflows</h1>
            <p style={{ fontSize: 20, color: 'white', marginBottom: 36, maxWidth: 480 }}>
              Automate document review, data pre-filling, and compliance checks—while keeping a human in the loop for near-100% accuracy. Built for insurance, real estate, pharma, and government.
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

      {/* What It Solves */}
      <section style={{ background: 'white', padding: '3rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1d4ed8', marginBottom: 18 }}>What It Solves</h2>
          <p style={{ fontSize: 20, color: '#374151', marginBottom: 0 }}>
            Most AI tools can't guarantee accuracy or compliance. InWorkflow Verifier combines AI automation with human review, so you can process claims, mortgages, and regulatory documents faster—without sacrificing trust or auditability.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1d4ed8', marginBottom: 24, textAlign: 'center' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 32 }}>
            <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <h3 style={{ color: '#2563eb', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>AI Pre-filling</h3>
              <p style={{ color: '#374151', fontSize: 16 }}>Extracts and pre-fills data from documents or databases, reducing manual entry.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <h3 style={{ color: '#2563eb', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Smart Document Retrieval</h3>
              <p style={{ color: '#374151', fontSize: 16 }}>Finds and links relevant source snippets for every field, so reviewers see context instantly.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <h3 style={{ color: '#2563eb', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Human-in-the-Loop Review</h3>
              <p style={{ color: '#374151', fontSize: 16 }}>Easy interface for humans to confirm, edit, or deep-dive into source docs—ensuring reliability.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <h3 style={{ color: '#2563eb', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Audit & Compliance</h3>
              <p style={{ color: '#374151', fontSize: 16 }}>Tracks every decision and document for full auditability and regulatory compliance.</p>
            </div>
            <div style={{ background: 'white', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: '2rem' }}>
              <h3 style={{ color: '#2563eb', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Configurable Workflows</h3>
              <p style={{ color: '#374151', fontSize: 16 }}>Adapt the platform to your industry and process—no need to replace your existing systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section style={{ background: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1d4ed8', marginBottom: 24, textAlign: 'center' }}>Industry Use Cases</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            <div style={{ background: '#f3f4f6', borderRadius: 10, padding: '1.5rem' }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Insurance</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Verify claims in seconds, not days. Instantly match pre-authorizations to submitted claims with AI and human QA.</p>
            </div>
            <div style={{ background: '#f3f4f6', borderRadius: 10, padding: '1.5rem' }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Real Estate</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Accelerate mortgage processing by extracting and verifying data from hundreds of documents in minutes.</p>
            </div>
            <div style={{ background: '#f3f4f6', borderRadius: 10, padding: '1.5rem' }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Pharma</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Speed up FDA dossier reviews with pre-filled fields and instant access to supporting documents.</p>
            </div>
            <div style={{ background: '#f3f4f6', borderRadius: 10, padding: '1.5rem' }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Government & BPO</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Modernize legacy workflows and enable fast, auditable document processing for high-volume teams.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1d4ed8', marginBottom: 24 }}>How It Works</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
            <div style={{ minWidth: 220, flex: 1 }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>AI + Human Review</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>AI pre-fills and retrieves data; humans confirm or edit for reliability.</p>
            </div>
            <div style={{ minWidth: 220, flex: 1 }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>API-First Integration</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Plug into your existing systems with a simple, secure API.</p>
            </div>
            <div style={{ minWidth: 220, flex: 1 }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Audit & Compliance</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Every action is logged for full transparency and regulatory peace of mind.</p>
            </div>
            <div style={{ minWidth: 220, flex: 1 }}>
              <h4 style={{ color: '#2563eb', fontWeight: 700, fontSize: 17, marginBottom: 6 }}>Cloud-Native Scale</h4>
              <p style={{ color: '#374151', fontSize: 15 }}>Built for high-volume, low-latency workflows—no matter your industry.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
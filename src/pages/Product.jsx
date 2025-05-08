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
              In Workflow Verifier is a horizontal AI-powered platform that streamlines human-in-the-loop (HITL) verification for industries like insurance, real estate, pharma, and government. It automates data pre-filling, retrieves source documents, and presents context for human review—reducing processing time and improving accuracy, while ensuring compliance and auditability.
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

      {/* Executive Summary & Problem Statement */}
      <section style={{ background: 'white', padding: '4rem 0 2rem 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1f2937', marginBottom: 16 }}>Executive Summary</h2>
          <p style={{ fontSize: 20, color: '#4b5563', marginBottom: 32 }}>
            The In Workflow Verifier is a plug-and-play, API-first platform for HITL verification. It integrates AI agents with configurable workflows to automate data pre-filling, retrieve relevant documents, and present context for human review—enabling near-100% accuracy and rapid processing for enterprise clients.
          </p>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Problem Statement</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700, marginBottom: 32 }}>
            <li>AI systems rarely deliver 100% accuracy, requiring human intervention for reliability in high-stakes workflows.</li>
            <li>Manual verification is slow, costly, and hard to scale—especially in regulated industries.</li>
            <li>Enterprises need auditable, transparent processes to meet compliance standards.</li>
            <li>Integrating AI into legacy workflows is complex and disruptive.</li>
          </ul>
        </div>
      </section>

      {/* Solution Overview & Value Proposition */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Solution Overview</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700, marginBottom: 32 }}>
            <li>AI agent extracts and pre-fills data from documents or databases.</li>
            <li>Contextual document retrieval surfaces relevant snippets and links for human verification.</li>
            <li>User-friendly interface presents pre-filled fields, source info, and reasoning for quick review.</li>
            <li>API and agentic workflow integrate with existing systems, supporting both BPO and regulatory use cases.</li>
            <li>Transparent audit trail ensures compliance and accountability.</li>
          </ul>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Value Proposition</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700, marginBottom: 32 }}>
            <li>Reduces verification time by up to 80% (e.g., 3 hours to minutes in mortgage processing).</li>
            <li>Combines AI automation with human oversight for near-100% accuracy.</li>
            <li>Scales from low-cost BPOs to high-skill regulatory experts.</li>
            <li>Provides auditable, compliant workflows for enterprise needs.</li>
            <li>Plug-and-play API and configurable workflows minimize disruption to existing systems.</li>
          </ul>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ background: 'white', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Industry Use Cases</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700, marginBottom: 32 }}>
            <li><b>Insurance:</b> OCRs and digitizes claim forms, pre-fills fields, and presents source snippets for human QA—reducing claim verification from 5-10 minutes to 1 minute.</li>
            <li><b>Real Estate:</b> Extracts data from mortgage documents, pre-fills forms, and provides contextual snippets—cutting processing from 3 hours to minutes.</li>
            <li><b>Pharma:</b> Organizes FDA dossier fields, pre-fills data, and presents relevant snippets to reviewers—accelerating submission and compliance.</li>
            <li><b>Government/BPO:</b> Integrates with legacy systems, pre-fills forms, and provides audit trails—enabling faster, more accurate document processing.</li>
          </ul>
        </div>
      </section>

      {/* Product Features & Technical Architecture */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Product Features</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700, marginBottom: 32 }}>
            <li><b>AI Agent for Pre-filling:</b> Extracts data from structured/unstructured documents or databases using OCR, NLP, or RAG.</li>
            <li><b>AI Agent for Document Retrieval:</b> Identifies relevant documents/snippets and provides links for verification.</li>
            <li><b>Verification Interface:</b> Displays pre-filled fields, source snippets, and AI reasoning; supports batch verification.</li>
            <li><b>Configurable Workflows:</b> Customers define field-document mappings; agentic workflows adapt to industry needs.</li>
            <li><b>API Integration:</b> RESTful API delivers pre-filled data, snippets, and prompts to existing systems.</li>
            <li><b>Audit Trail:</b> Logs all verification decisions, sources, and reasoning for compliance.</li>
            <li><b>Scalable Architecture:</b> Cloud-based, supports both low-cost and high-skill verifiers, handles high-volume workflows.</li>
          </ul>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1d4ed8', marginBottom: 12 }}>Technical Architecture</h2>
          <ul style={{ textAlign: 'left', color: '#4b5563', fontSize: 18, margin: '0 auto', maxWidth: 700 }}>
            <li><b>Frontend:</b> React-based UI for responsive, clickable verification.</li>
            <li><b>Backend:</b> Node.js or Python server for API, agent coordination, and workflow management.</li>
            <li><b>AI Agents:</b> OCR (Tesseract), NLP (BERT), RAG for data extraction and document retrieval.</li>
            <li><b>Storage:</b> S3-compatible buckets for documents, with metadata indexing.</li>
            <li><b>API:</b> RESTful, delivers JSON payloads with pre-filled data and prompts.</li>
            <li><b>Database:</b> PostgreSQL for workflow configs and audit logs.</li>
            <li><b>Deployment:</b> Cloud-native (AWS/GCP), Kubernetes for scalability.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
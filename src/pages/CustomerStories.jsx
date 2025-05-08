import React from 'react';

export default function CustomerStories() {
  return (
    <div className="features" style={{ maxWidth: 700, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Customer Stories</h1>
      <div className="feature-card" style={{ fontStyle: 'italic', marginBottom: 24 }}>
        <p>"The ability to complete verification in record time is phenomenal."</p>
        <div style={{ fontWeight: 600, color: '#1f2937', marginTop: 8 }}>Bethany Clark, Verification Coordinator</div>
      </div>
      <div className="feature-card" style={{ fontStyle: 'italic', marginBottom: 24 }}>
        <p>"Transforms a week of work into a few hours – cornerstone to any firm looking to create a cost-conscious, time saving approach."</p>
        <div style={{ fontWeight: 600, color: '#1f2937', marginTop: 8 }}>Carlos Rivera, Executive Vice President</div>
      </div>
      <div className="feature-card" style={{ fontStyle: 'italic' }}>
        <p>"Provides us with accurate verifications and compliant audit trails."</p>
        <div style={{ fontWeight: 600, color: '#1f2937', marginTop: 8 }}>Kerry Gray, President & CEO</div>
      </div>
    </div>
  );
}
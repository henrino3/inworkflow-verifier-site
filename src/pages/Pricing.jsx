import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  return (
    <div className="cta" style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', padding: '4rem 1rem' }}>
      <h1>Pricing</h1>
      <p style={{ fontSize: '1.125rem', marginBottom: 32 }}>Contact us for a custom quote tailored to your workflow and scale.</p>
      <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
    </div>
  );
}
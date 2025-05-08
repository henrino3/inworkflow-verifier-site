import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{ background: '#2563eb', color: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Left: Logo + Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: 26, color: 'white', textDecoration: 'none', letterSpacing: '-1px', marginRight: 24 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 10 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="white" />
                <circle cx="16" cy="16" r="10" fill="#2563eb" />
              </svg>
            </span>
            InWorkflow Verifier
          </Link>
          <nav style={{ display: 'flex', gap: 32, fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>
            <Link to="/product" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Product</Link>
            <Link to="/blog" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Blog</Link>
            <Link to="/pricing" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Pricing</Link>
            <Link to="/customer-stories" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Customer stories</Link>
            <Link to="/security" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Security</Link>
            <Link to="/documentation" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Documentation</Link>
            <Link to="/careers" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Careers</Link>
          </nav>
        </div>
        {/* Right: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginLeft: 'auto' }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15 }}>Log In</Link>
          <Link to="/get-access" style={{ background: 'white', color: '#2563eb', fontWeight: 600, fontSize: 15, borderRadius: 8, padding: '10px 24px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)', textDecoration: 'none', marginLeft: 4, fontFamily: 'Open Sans, sans-serif' }}>Get access</Link>
        </div>
      </div>
    </header>
  );
}
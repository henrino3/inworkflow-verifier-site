import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navLinks = [
    { to: '/product', label: 'Product' },
    { to: '/blog', label: 'Blog' },
    { to: '/pricing', label: 'Pricing' },
    { to: '/customer-stories', label: 'Customer stories' },
    { to: '/security', label: 'Security' },
  ];
  return (
    <header style={{ background: '#2563eb', color: 'white', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderBottom: '1px solid #2563eb', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', height: 72, padding: 0, overflow: 'hidden', position: 'relative' }}>
        {/* Left: Logo + Divider + Nav */}
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0, flexShrink: 1 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', fontWeight: 800, fontSize: 26, color: 'white', textDecoration: 'none', letterSpacing: '-1px', marginRight: 24, whiteSpace: 'nowrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: 10 }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="14" fill="white" />
                <circle cx="16" cy="16" r="10" fill="#2563eb" />
              </svg>
            </span>
            InWorkflow Verifier
          </Link>
          {/* Divider (hide on mobile) */}
          <div className="desktop-only" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.18)', margin: '0 24px' }} />
          {/* Nav (desktop) */}
          <nav className="desktop-only" style={{ display: 'flex', gap: 20, fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15, whiteSpace: 'nowrap', minWidth: 0, flexShrink: 1 }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'Open Sans, sans-serif',
                  fontWeight: 400,
                  fontSize: 15,
                  padding: '8px 10px',
                  borderRadius: 8,
                  border: location.pathname === link.to ? '1.5px solid white' : 'none',
                  boxSizing: 'border-box',
                  transition: 'background 0.15s, color 0.15s',
                  outline: 'none',
                  position: 'relative',
                  whiteSpace: 'nowrap',
                }}
                onMouseOver={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseOut={e => (e.currentTarget.style.background = 'transparent')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        {/* Hamburger (mobile only) */}
        <button
          className="mobile-hamburger"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(m => !m)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            marginLeft: 16,
            cursor: 'pointer',
            padding: 8,
            zIndex: 200,
          }}
        >
          <span style={{ display: 'block', width: 28, height: 3, background: 'white', borderRadius: 2, marginBottom: 6 }} />
          <span style={{ display: 'block', width: 28, height: 3, background: 'white', borderRadius: 2, marginBottom: 6 }} />
          <span style={{ display: 'block', width: 28, height: 3, background: 'white', borderRadius: 2 }} />
        </button>
        {/* Right: Actions (desktop) */}
        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: 24, marginLeft: 'auto', whiteSpace: 'nowrap' }}>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', fontWeight: 400, fontSize: 15, marginRight: 8, whiteSpace: 'nowrap' }}>Log In</Link>
          <Link to="/get-access" style={{ background: 'white', color: '#2563eb', fontWeight: 700, fontSize: 15, borderRadius: 10, padding: '10px 28px', boxShadow: '0 1px 6px rgba(0,0,0,0.08)', textDecoration: 'none', fontFamily: 'Open Sans, sans-serif', border: 'none', outline: 'none', transition: 'box-shadow 0.15s, background 0.15s', whiteSpace: 'nowrap' }}>Get access</Link>
        </div>
        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="mobile-nav" style={{ position: 'absolute', top: 72, left: 0, width: '100vw', background: '#2563eb', zIndex: 100, padding: '1rem 0' }}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  display: 'block',
                  color: 'white',
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  borderBottom: '1px solid rgba(255,255,255,0.08)',
                  fontWeight: location.pathname === link.to ? 700 : 400,
                  background: location.pathname === link.to ? 'rgba(255,255,255,0.08)' : 'transparent',
                }}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 8 }} />
            <Link to="/login" style={{ display: 'block', color: 'white', padding: '1rem 2rem', fontSize: '1.1rem', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>Log In</Link>
            <Link to="/get-access" style={{ display: 'block', background: 'white', color: '#2563eb', fontWeight: 700, fontSize: '1.1rem', borderRadius: 10, margin: '1rem 2rem', padding: '1rem 0', textAlign: 'center', textDecoration: 'none' }} onClick={() => setMobileOpen(false)}>Get access</Link>
          </div>
        )}
      </div>
      <style>{`
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
          .mobile-hamburger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
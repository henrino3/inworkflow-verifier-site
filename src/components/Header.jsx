import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="brand">
          <span style={{ marginRight: 8 }}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="14" fill="#1d4ed8" />
              <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24Z" fill="white" />
            </svg>
          </span>
          InWorkflow Verifier
        </Link>
        <nav>
          <Link to="/product">Product</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/customer-stories">Customer stories</Link>
          <Link to="/security">Security</Link>
          <Link to="/documentation">Documentation</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/login">Log In</Link>
          <Link to="/get-access" className="btn btn-primary">Get access</Link>
        </nav>
      </div>
    </header>
  );
}
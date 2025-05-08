import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>Product</h3>
            <ul>
              <li><Link to="/product/overview">Overview</Link></li>
              <li><Link to="/product/features">Features</Link></li>
              <li><Link to="/product/integrations">Integrations</Link></li>
              <li><Link to="/product/pricing">Pricing</Link></li>
              <li><Link to="/product/security">Security</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Solutions</h3>
            <ul>
              <li><Link to="/solutions/insurance">Insurance</Link></li>
              <li><Link to="/solutions/real-estate">Real Estate</Link></li>
              <li><Link to="/solutions/pharmaceuticals">Pharmaceuticals</Link></li>
              <li><Link to="/solutions/government">Government</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/customer-stories">Customer Stories</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/documentation">Documentation</Link></li>
              <li><Link to="/webinars">Webinars</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', fontWeight: 700, fontSize: 20, color: '#1d4ed8', textDecoration: 'none' }}>
              <span style={{ marginRight: 8 }}>
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#2563EB" />
                  <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24Z" fill="white" />
                  <path d="M16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11Z" fill="white" />
                </svg>
              </span>
              InWorkflow Verifier
            </Link>
          </div>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">Twitter</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <span className="sr-only">LinkedIn</span>
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center" style={{ marginTop: '2rem', textAlign: 'center', color: '#6b7280', fontSize: 14 }}>
          <p>&copy; {new Date().getFullYear()} InWorkflow Verifier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
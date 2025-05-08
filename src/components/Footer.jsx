import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/product/overview" className="text-gray-500 hover:text-blue-600 text-sm">Overview</Link></li>
              <li><Link to="/product/features" className="text-gray-500 hover:text-blue-600 text-sm">Features</Link></li>
              <li><Link to="/product/integrations" className="text-gray-500 hover:text-blue-600 text-sm">Integrations</Link></li>
              <li><Link to="/product/pricing" className="text-gray-500 hover:text-blue-600 text-sm">Pricing</Link></li>
              <li><Link to="/product/security" className="text-gray-500 hover:text-blue-600 text-sm">Security</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/solutions/insurance" className="text-gray-500 hover:text-blue-600 text-sm">Insurance</Link></li>
              <li><Link to="/solutions/real-estate" className="text-gray-500 hover:text-blue-600 text-sm">Real Estate</Link></li>
              <li><Link to="/solutions/pharmaceuticals" className="text-gray-500 hover:text-blue-600 text-sm">Pharmaceuticals</Link></li>
              <li><Link to="/solutions/government" className="text-gray-500 hover:text-blue-600 text-sm">Government</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/customer-stories" className="text-gray-500 hover:text-blue-600 text-sm">Customer Stories</Link></li>
              <li><Link to="/blog" className="text-gray-500 hover:text-blue-600 text-sm">Blog</Link></li>
              <li><Link to="/documentation" className="text-gray-500 hover:text-blue-600 text-sm">Documentation</Link></li>
              <li><Link to="/webinars" className="text-gray-500 hover:text-blue-600 text-sm">Webinars</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-500 hover:text-blue-600 text-sm">About</Link></li>
              <li><Link to="/careers" className="text-gray-500 hover:text-blue-600 text-sm">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-blue-600 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-600 font-semibold text-sm uppercase mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-500 hover:text-blue-600 text-sm">Terms of Service</Link></li>
              <li><Link to="/cookies" className="text-gray-500 hover:text-blue-600 text-sm">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-blue-600 flex items-center">
              <span className="mr-2">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="16" cy="16" r="14" fill="#2563EB" />
                  <path d="M16 6C10.48 6 6 10.48 6 16C6 21.52 10.48 26 16 26C21.52 26 26 21.52 26 16C26 10.48 21.52 6 16 6ZM16 24C11.59 24 8 20.41 8 16C8 11.59 11.59 8 16 8C20.41 8 24 11.59 24 16C24 20.41 20.41 24 16 24Z" fill="white" />
                  <path d="M16 11C13.24 11 11 13.24 11 16C11 18.76 13.24 21 16 21C18.76 21 21 18.76 21 16C21 13.24 18.76 11 16 11Z" fill="white" />
                </svg>
              </span>
              InWorkflow
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} InWorkflow Verifier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
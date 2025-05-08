import React from 'react';

export default function Contact() {
  return (
    <div className="features" style={{ maxWidth: 500, margin: '0 auto', padding: '4rem 1rem' }}>
      <h1>Get Access</h1>
      <form className="feature-card" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Name</label>
          <input type="text" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.75rem 1rem', fontSize: 16 }} required />
        </div>
        <div>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Email</label>
          <input type="email" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.75rem 1rem', fontSize: 16 }} required />
        </div>
        <div>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Company</label>
          <input type="text" style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.75rem 1rem', fontSize: 16 }} />
        </div>
        <div>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Industry</label>
          <select style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.75rem 1rem', fontSize: 16 }}>
            <option>Insurance</option>
            <option>Real Estate</option>
            <option>Pharmaceuticals</option>
            <option>Government</option>
            <option>BPO</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 500, marginBottom: 4, display: 'block' }}>Message</label>
          <textarea style={{ width: '100%', border: '1px solid #e5e7eb', borderRadius: 6, padding: '0.75rem 1rem', fontSize: 16 }} rows="4"></textarea>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Submit</button>
      </form>
    </div>
  );
}
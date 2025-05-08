import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import CustomerStories from './pages/CustomerStories'
import Security from './pages/Security'
import Documentation from './pages/Documentation'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import './style.css'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/customer-stories" element={<CustomerStories />} />
            <Route path="/security" element={<Security />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import AffiliateProducts from './pages/AffiliateProducts';
import Collaboration from './pages/Collaboration';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliate" element={<AffiliateProducts />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white text-center py-4 mt-8">
          <p>&copy; 2025 My YouTube Channel. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

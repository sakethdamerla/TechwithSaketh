import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white border-b border-gray-800 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-lg flex items-center justify-center mr-2 md:mr-3">
              <svg className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-white">Tech with Saketh Telugu</h1>
              <p className="text-xs text-gray-400 hidden sm:block">Saketh Damerla</p>
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 lg:space-x-8">
            <li><Link to="/" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">Home</Link></li>
            <li><Link to="/about" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">About</Link></li>
            <li><Link to="/affiliate" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">Products</Link></li>
            <li><Link to="/collaboration" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">Collaboration</Link></li>
            <li><Link to="/suggestions" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">Suggestions</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium">Contact</Link></li>
          </ul>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-red-600 transition-colors duration-300 p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <ul className="flex flex-col space-y-4 pt-4">
              <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">Home</Link></li>
              <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">About</Link></li>
              <li><Link to="/affiliate" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">Products</Link></li>
              <li><Link to="/collaboration" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">Collaboration</Link></li>
              <li><Link to="/suggestions" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">Suggestions</Link></li>
              <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium py-2">Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

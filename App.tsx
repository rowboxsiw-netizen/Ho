
import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';

const Navbar: React.FC = () => (
  <nav className="bg-white border-b sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-indigo-600 tracking-tight">
            Authorize.qzz.io
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
          <Link to="/admin" className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition">Admin</Link>
        </div>
      </div>
    </div>
  </nav>
);

const Footer: React.FC = () => (
  <footer className="bg-white border-t py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Authorize.qzz.io. All rights reserved.
      </p>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;

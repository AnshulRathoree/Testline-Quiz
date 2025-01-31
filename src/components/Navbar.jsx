// components/Navbar.jsx
import './styles/Navbar.css'
import { useState } from 'react';
import { FiHome, FiAward, FiUser, FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">GeneticsQuiz</div>
        
        <button 
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#home" className="nav-item">
            <FiHome className="nav-icon" />
            <span>Home</span>
          </a>
          <a href="#leaderboard" className="nav-item">
            <FiAward className="nav-icon" />
            <span>Leaderboard</span>
          </a>
          <a href="#profile" className="nav-item">
            <FiUser className="nav-icon" />
            <span>Profile</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
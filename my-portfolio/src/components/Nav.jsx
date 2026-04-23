import "./Nav.css";
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="nav">
      <div className="brand">
        Akash<span className="accent">.</span>
      </div>

      {/* Desktop + Mobile Nav */}
      <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

        {/* Resume Download Button */}
        <a 
          href="https://drive.google.com/uc?export=download&id=1hJfGy_UKNZsu0kcdQVtfVwzR2FpwvTSK"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          onClick={() => setMenuOpen(false)}
        >
          <FaDownload className="icon" /> Resume
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('nav') && !e.target.closest('#mobileMenu')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <nav>
        <a href="#" className="logo">
          <div className="logo-mark">🎬</div>
          <div className="logo-text">ContentCreator<br /><em>Templates</em></div>
        </a>

        <div className="nav-links">
          <a href="#" className="active">Video Assets</a>
          <a href="#">LUTs</a>
          <a href="#">Sound Effects</a>
          <a href="#">Prompts</a>
          <a href="#">Contributor <span className="arr">▾</span></a>
          <a href="#">Learn <span className="arr">▾</span></a>
          <a href="#">Pricing</a>
        </div>

        <div className="nav-right">
          <button className="btn btn-ghost">Sign In</button>
          <button className="btn btn-primary">Get Started Free</button>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'open' : ''}`}
          id="hamburger"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a href="#" className="active">Video Assets</a>
        <a href="#">LUTs</a>
        <a href="#">Sound Effects</a>
        <a href="#">Prompts</a>
        <a href="#">Contributor</a>
        <a href="#">Learn</a>
        <a href="#">Pricing</a>
        <div className="mobile-menu-ctas">
          <button className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}>Sign In</button>
          <button className="btn btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Get Started Free</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

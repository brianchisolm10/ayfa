import React from 'react';
import './TopNav.css';

function TopNav() {
  return (
    <nav className="top-nav">
      <div className="nav-left">
        <a href="/" className="logo">The AFYA</a>
      </div>
      <div className="nav-right">
        <a href="/hub" className="nav-link">THE HUB</a>
        <a href="/education" className="nav-link">EDUCATION</a>
        <a href="/resources" className="nav-link">RESOURCES</a>
        <a href="/why-afya" className="nav-link">ABOUT US</a>
        <a href="/contact" className="nav-link">CONTACT</a>
      </div>
    </nav>
  );
}

export default TopNav;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {FaHamburger} from 'react-icons/fa';
import {MdClose} from 'react-icons/md';
import './navbar.css';
function Navbar() {
  const [hamburger, setHamburger] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleScroll=()=>{ 
    if (window.scrollY > 20) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  }

  window.addEventListener('scroll', handleScroll)
  return (
    <div className={`${fixed && 'scroll' }`}>
    <navbar className="navbar">
      <div className="brand">
        <h2>
          <Link to="/" className="brand-link">
          &lt;/Mayur\&gt;
          </Link>
        </h2>
      </div>
      <div className={`${hamburger ? 'nav-menu mobile-nav-menu' : 'nav-menu'}`}>
        <ul>
          <li>
            <Link to="/" className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="nav-link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
        </ul>
      </div>
        <div className="hamburger-menu">
          <div
            onClick={() => setHamburger(!hamburger)}
            >
            {hamburger ? <MdClose /> : <FaHamburger />}
            </div>
        </div>
    </navbar>
            </div>
  );
}

export default Navbar;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({ setLanguage, setCountry }) => {
  const location = useLocation();

  const getLinkClass = (path) => {
    const isActive = location.pathname === path;
    return `nav-link px-3 py-2 position-relative ${isActive ? 'active' : ''}`;
  };

  const handleLanguageChange = (language) => {
    setLanguage(language);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };
  const closeNavbar = () => {
    const navbarCollapse = document.getElementById('navbarContent');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, {
        toggle: true
      });
    }
  };


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm border-bottom border-info">
      <div className="container-fluid px-4">
        <Link onClick={closeNavbar} className="navbar-brand fs-4 fw-bold d-flex align-items-center" to="/">
          <span className="text-info">News</span>
          <span className="text-warning">Fox</span>
          <span className="badge bg-info ms-2 fs-6">Live</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link onClick={closeNavbar} className={getLinkClass('/')} to="/" >
                <i className="bi bi-house-door me-1"></i> Home
                <span className={`nav-underline ${location.pathname === '/' ? 'active' : ''}`}></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={closeNavbar} className={getLinkClass('/news')} to="/news" >
                <i className="bi bi-newspaper me-1"></i> News
                <span className={`nav-underline ${location.pathname === '/news' ? 'active' : ''}`}></span>
              </Link>
            </li>


            {/* Categories Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle px-3 py-2" href="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-grid me-1"></i> Categories
                <span className="nav-underline"></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="categoriesDropdown">
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/business' ? 'active' : ''}`} to="/business" >
                    <i className="bi bi-briefcase me-2"></i> Business
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">
                    <i className="bi bi-film me-2"></i> Entertainment
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/top' ? 'active' : ''}`} to="/top">
                    <i className="bi bi-newspaper me-2"></i> General
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/health' ? 'active' : ''}`} to="/health">
                    <i className="bi bi-heart-pulse me-2"></i> Health
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/science' ? 'active' : ''}`} to="/science">
                    <i className="bi bi-eyeglasses me-2"></i> Science
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports">
                    <i className="bi bi-trophy me-2"></i> Sports
                  </Link>
                </li>
                <li>
                  <Link onClick={closeNavbar} className={`dropdown-item ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">
                    <i className="bi bi-cpu me-2"></i> Technology
                  </Link>
                </li>
              </ul>
            </li>

            {/* Country Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle px-3 py-2" href="#" id="countryDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-globe me-1"></i> Country
                <span className="nav-underline"></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="countryDropdown">
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('us'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> United States</span>
                    <span className="badge bg-secondary">en</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('in'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> India</span>
                    <span className="badge bg-secondary">en, hi</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('gb'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> United Kingdom</span>
                    <span className="badge bg-secondary">en</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('ca'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> Canada</span>
                    <span className="badge bg-secondary">en, fr</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('au'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> Australia</span>
                    <span className="badge bg-secondary">en</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('fr'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> France</span>
                    <span className="badge bg-secondary">fr</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('de'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> Germany</span>
                    <span className="badge bg-secondary">de</span>
                  </button>
                </li>
                <li>
                  <button className="dropdown-item d-flex justify-content-between align-items-center"
                    onClick={() => { handleCountryChange('jp'); closeNavbar(); }}>
                    <span><i className="bi bi-flag me-2"></i> Japan</span>
                    <span className="badge bg-secondary">ja</span>
                  </button>
                </li>
              </ul>
            </li>

            {/* Language Dropdown */}
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle px-3 py-2" href="#" id="languageDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-translate me-1"></i> Language
                <span className="nav-underline"></span>
              </Link>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="languageDropdown">
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('en'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> English
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('hi'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> Hindi
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('fr'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> French
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('es'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> Spanish
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('de'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> German
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" onClick={() => { handleLanguageChange('ja'); closeNavbar(); }}>
                    <i className="bi bi-translate me-2"></i> Japanese
                  </button>
                </li>
              </ul>
            </li>
          <li className="nav-item">
            <Link onClick={closeNavbar} className={getLinkClass('/about')} to="/about" >
              <i className="bi bi-info-circle me-1"></i> About
              <span className={`nav-underline ${location.pathname === '/about' ? 'active' : ''}`}></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={closeNavbar} className={getLinkClass('/contact')} to="/contact" >
              <i className="bi bi-envelope me-1"></i> Contact
              <span className={`nav-underline ${location.pathname === '/contact' ? 'active' : ''}`}></span>
            </Link>
          </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          color: rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          margin: 0 2px;
          position: relative;
          padding-bottom: 8px !important;
        }
        
        .nav-link:hover {
          color: white;
        }
        
        .nav-link.active {
          color: white !important;
          font-weight: 500;
        }
        
        .nav-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #0dcaf0;
          transition: width 0.3s ease, left 0.3s ease;
        }
        
        .nav-link:hover .nav-underline:not(.active),
        .dropdown-toggle:hover .nav-underline:not(.active) {
          width: 100%;
          left: 0;
        }
        
        .nav-underline.active {
          width: 100% !important;
          background: #0dcaf0;
        }
        
        .dropdown-item.active, .dropdown-item:active {
          background-color: rgba(13, 202, 240, 0.2);
        }
        
        .navbar-brand {
          transition: transform 0.2s ease;
        }
        
        .navbar-brand:hover {
          transform: scale(1.02);
        }
        
        .dropdown-item {
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .dropdown-menu {
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          max-height: 300px;
          overflow-y: auto;
        }
        
        @media (max-width: 992px) {
          .nav-underline {
            display: none;
          }
          
          .nav-link {
            padding-bottom: 0.5rem !important;
          }
          
          .dropdown-menu {
            max-height: 200px;
          }
        }
          @media (min-width: 992px) {
          .navbar-nav .dropdown:hover .dropdown-menu {
            display: block;
          }
          
          .dropdown-menu {
            margin-top: 0; /* Remove the gap on hover */
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
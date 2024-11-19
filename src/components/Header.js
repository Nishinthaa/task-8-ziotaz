import React from 'react';

const Header = ({ showModal }) => (
  <header className="header">
    <h1>My Portfolio</h1>
    <nav className="nav-horizontal">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li className="dropdown">
          <a href="#">More</a>
          <ul className="dropdown-menu">
            <li><a href="#" onClick={() => showModal('Resume')}>Resume</a></li>
            <li><a href="#" onClick={() => showModal('Testimonials')}>Testimonials</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

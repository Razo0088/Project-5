
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './header.scss';
import { NavLink} from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const menuItems = ["Shirt", "Dress", "Jeans", "Jackets", "Gumwear", "Blazers", "Shoes"];
  const menuContact = ["Contact", "Subscribe"];

  return (
   
      <header>
        <div className="header-top">
        <h2 className="logo">STYLECORE</h2>
          <button className="menu_btn" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            {menuItems.map((item, i) => (
              <li key={i}> <NavLink to={`/${item.toLowerCase() }`}>{item}</NavLink></li>
            ))}
            
          </ul>
          <ul>
          <li> <NavLink to="/">Home</NavLink></li>
          {menuContact.map((elem, index) => {
            if (elem === "Subscribe") {
              return (
                <li key={index}>
                  <NavLink
                    to="/"
                    onClick={(e) => {
                      e.preventDefault(); 
                      const section = document.getElementById("subscribe-section");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      setMenuOpen(false);
                    }}
                  >
                    {elem}
                  </NavLink>
                </li>
              );
            } else if (elem === "Contact") {
              return (
                <li key={index}>
                  <NavLink
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      const section = document.getElementById("contact-section");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      setMenuOpen(false);
                    }}
                  >
                    {elem}
                  </NavLink>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <NavLink to={`/${elem.toLowerCase()}`}>{elem}</NavLink>
                </li>
              );
            }
          })}
            
          </ul>
        </nav>
      </header>
   
  );
}

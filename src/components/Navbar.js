// 1. Importera React
import React from "react";

import "./navbar.css";

// 2. Skapa komponenten
const Navbar = () => {
  return (
    <header>
      <div className="navbar" id="navbar">
        <h1 className="logo">
          <span className="text-primary">Westcoast</span> Cars
        </h1>
        <ul>
          <li>
            <a href="index.html" className="active">
              Start
            </a>
          </li>
          <li>
            <a href="gallery.html">Galleri</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

// 3. Exportera komponenten
export default Navbar;

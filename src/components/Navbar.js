// 1. Importera React
import { React, Component } from "react";

import "./navbar.css";

// 2. Skapa komponenten
class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      title: "West coast ",
    };
  }

  render() {
    return (
      <header>
        <div className="navbar" id="navbar">
          <h1 className="logo">
            <span className="text-primary">{this.state.title}</span> Cars
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
  }
}

// 3. Exportera komponenten
export default Navbar;

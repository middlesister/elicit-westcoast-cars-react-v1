// 1. Importera React ...
import React from "react";

import Vehicles from "./components/Vehicles";
import "./app.css";

// 2. Skapa komponenten
const App = () => {
  return (
    <section>
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
      <main className="content">
        <Vehicles />
      </main>
    </section>
  ); // JSX
};

// 3. Exportera
export default App;

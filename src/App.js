// 1. Importera React ...
import React from "react";

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
        <section className="card">
          <div className="vehicle-item">
            <img 
              src="https://i.postimg.cc/N09fbtKZ/car1.jpg"
              alt=""
              className="thumbnail" 
            />
            <div>ABC123</div>
            <div>Chevrolet</div>
            <div>Corvette</div>
            <div>2019</div>
            <div>150000</div>
          </div>
        </section>
        <section className="card">
          <div className="vehicle-item">
            <img 
              src="https://i.postimg.cc/N09fbtKZ/car1.jpg"
              alt=""
              className="thumbnail" 
            />
            <div>ABC123</div>
            <div>Chevrolet</div>
            <div>Corvette</div>
            <div>2019</div>
            <div>150000</div>
          </div>
        </section>
        <section className="card">
          <div className="vehicle-item">
            <img 
              src="https://i.postimg.cc/N09fbtKZ/car1.jpg"
              alt=""
              className="thumbnail" 
            />
            <div>ABC123</div>
            <div>Chevrolet</div>
            <div>Corvette</div>
            <div>2019</div>
            <div>150000</div>
          </div>
        </section>
      </main>
    </section>
  ); // JSX
};

// 3. Exportera
export default App;

// 1. Importera React ...
import React from "react";

import Vehicles from "./components/Vehicles";
import Navbar from "./components/Navbar";
import "./app.css";

// 2. Skapa komponenten
const App = () => {
  return (
    <section>
      <Navbar />
      <main className="content">
        <Vehicles />
      </main>
    </section>
  ); // JSX
};

// 3. Exportera
export default App;

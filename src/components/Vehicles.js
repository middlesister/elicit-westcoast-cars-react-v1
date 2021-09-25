// 1. Importera React
import React from "react";

import VehicleDetail from "./VehicleDetail";

// 2. Skapa komponenten
const Vehicles = () => {
  return (
    <section>
      <VehicleDetail />
      <VehicleDetail />
      <VehicleDetail />
      <VehicleDetail />
      <VehicleDetail />
    </section>
  );
};

// 3. Exportera komponenten
export default Vehicles;

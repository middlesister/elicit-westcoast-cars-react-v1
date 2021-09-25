// 1. Importera React
import React from "react";

import VehicleDetail from "./VehicleDetail";
import Card from "./shared/Card";

// 2. Skapa komponenten
const Vehicles = () => {
  return (
    <section>
      <Card>
        <VehicleDetail />
      </Card>
    </section>
  );
};

// 3. Exportera komponenten
export default Vehicles;

// 1. Importera React
import React from "react";

import VehicleDetail from "./VehicleDetail";
import Card from "./shared/Card";

// 2. Skapa komponenten
const Vehicles = () => {
  return (
    <section>
      <Card>
        <VehicleDetail
          registrationNo="CER345"
          imageUrl="https://i.postimg.cc/N09fbtKZ/car1.jpg"
          make="Chevreolet"
          model="Corvette"
          modelYear="2019"
          mileage="12000"
        />
      </Card>
      <Card>
        <VehicleDetail
          registrationNo="ABC123"
          imageUrl="https://i.postimg.cc/Fsy2yyh8/car2.jpg"
          make="Ford"
          model="Mustang"
          modelYear="1978"
          mileage="28900"
        />
      </Card>
    </section>
  );
};

// 3. Exportera komponenten
export default Vehicles;

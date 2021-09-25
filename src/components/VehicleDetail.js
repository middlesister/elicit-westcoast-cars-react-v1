// 1. Importera React
import React from "react";

// 2. Skapa komponenten
const VehicleDetail = () => {
  return (
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
  );
};

// 3. Exportera komponenten
export default VehicleDetail;

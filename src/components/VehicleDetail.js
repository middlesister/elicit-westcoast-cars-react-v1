// 1. Importera React
import React, { useState } from "react";

import "./vehicledetail.css";

// 2. Skapa komponenten
const VehicleDetail = (props) => {
  const [displayMileage, setDisplayMileage] = useState(false);

  const onClick = () => {
    setDisplayMileage(!displayMileage);
  };

  let mileage;
  if (displayMileage) {
    mileage = <div>{props.mileage}</div>;
  }

  return (
    <div className="vehicle-item">
      <img src={props.imageUrl} alt={props.make} className="thumbnail" />
      <div>{props.registrationNo}</div>
      <div>{props.make}</div>
      <div>{props.model}</div>
      <div>{props.modelYear}</div>
      <button onClick={onClick} className="btn btn-outline-rounded">
        {displayMileage ? "Göm" : "Visa"} antal km
      </button>
      {mileage}
    </div>
  );
};

// 3. Exportera komponenten
export default VehicleDetail;

// 1. Importera React
import React from "react";

import "./vehicledetail.css";

// 2. Skapa komponenten
const VehicleDetail = (props) => {
  let displayMileage = false;

  const onClick = () => {
    displayMileage = !displayMileage;
  };

  return (
    <div className="vehicle-item">
      <img src={props.imageUrl} alt={props.make} className="thumbnail" />
      <div>{props.registrationNo}</div>
      <div>{props.make}</div>
      <div>{props.model}</div>
      <div>{props.modelYear}</div>
      <button onClick={onClick} className="btn btn-outline-rounded">
        {{ displayMileage } ? "Visa" : "Göm"} antal km{" "}
      </button>
      <div>{props.mileage}</div>
    </div>
  );
};

// 3. Exportera komponenten
export default VehicleDetail;

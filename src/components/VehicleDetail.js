// 1. Importera React
import React from "react";

import './vehicledetail.css';

// 2. Skapa komponenten
const VehicleDetail = (props) => {
	console.log(props);
  return (
    <div className="vehicle-item">
      <img
        src={props.imageUrl}
        alt={props.make}
        className="thumbnail"
      />
      <div>{props.registrationNo}</div>
      <div>{props.make}</div>
      <div>{props.model}</div>
      <div>{props.modelYear}</div>
      <div>{props.mileage}</div>
    </div>
  );
};

// 3. Exportera komponenten
export default VehicleDetail;

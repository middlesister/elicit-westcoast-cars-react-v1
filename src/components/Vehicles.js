// 1. Importera React
import React, { useState, useEffect } from "react";

import VehicleDetail from "./VehicleDetail";
import Card from "./shared/Card";

// 2. Skapa komponenten
const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);

  const [userInput, setUserInput] = useState({
    regNo: "",
    make: "",
  });

  const registrationNumberChangeHandler = (event) => {
    console.log(event.target.value);
    setUserInput({
      ...userInput,
      regNo: event.target.value,
    });
  };

  const makeChangeHandler = (event) => {
    console.log(event.target.value);
    setUserInput({
      ...userInput,
      make: event.target.value,
    });
  };

  const loadAllVehicles = async () => {
    const response = await fetch("/data/vehicles.json");
    if (!response.ok) throw new Error(response.statusText);

    const data = await response.json();

    const currentVehicles = data.map((vehicle) => {
      return vehicle;
    });

    setVehicles(currentVehicles);
  };

  useEffect(() => {
    loadAllVehicles();
  }, []);

  return (
    <div>
      <section className="vehicle-form mb-6">
        <form>
          <div className="mb-3">
            <input
              type="text"
              onChange={registrationNumberChangeHandler}
              value={userInput.regNo}
              placeholder="Registreringsnummer"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              onChange={makeChangeHandler}
              value={userInput.make}
              placeholder="Tillverkare"
            />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Modell" />
          </div>
        </form>
      </section>
      <section>
        {/* Create a new Card and VehicleDetail for each item in our list */}
        {vehicles.map((vehicle) => {
          return (
            <Card key={vehicle.id}>
              <VehicleDetail
                registrationNo={vehicle.registrationNo}
                imageUrl={vehicle.imageUrl}
                make={vehicle.make}
                model={vehicle.model}
                modelYear={vehicle.modelYear}
                mileage={vehicle.mileage}
              />
            </Card>
          );
        })}
      </section>
    </div>
  );
};

// 3. Exportera komponenten
export default Vehicles;

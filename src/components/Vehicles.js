// 1. Importera React
import React from "react";

import VehicleDetail from "./VehicleDetail";
import Card from "./shared/Card";

// 2. Skapa komponenten
const Vehicles = () => {
  let regNo = "";

  function onRegNoChange(event) {
    this.regNo = event.target.value;
  }

  return (
    <div>
      <section className="vehicle-form mb-6">
        <form>
          <div className="mb-3">
            <input
              onChange={onRegNoChange}
              type="text"
              placeholder="Registreringsnummer"
            />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Tillverkare" />
          </div>
          <div className="mb-3">
            <input type="text" placeholder="Modell" />
          </div>
          <div className="vehicle-form-two-button">
            <button type="submit" className="btn btn-outline-rounded">
              Spara
            </button>
            <button className="btn btn-outline-rounded">Avbryt</button>
          </div>
        </form>
      </section>
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
    </div>
  );
};

// 3. Exportera komponenten
export default Vehicles;

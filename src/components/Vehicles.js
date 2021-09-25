// 1. Importera React
import React, { useState } from "react";

import VehicleDetail from "./VehicleDetail";
import Card from "./shared/Card";

// 2. Skapa komponenten
const Vehicles = () => {
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

  let vehicles = [
    {
      id: 1,
      registrationNo: "ABC123",
      make: "Chevrolet",
      model: "Corvette",
      modelYear: "2015",
      imageUrl: "https://i.postimg.cc/N09fbtKZ/car1.jpg",
      mileage: 25000,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.",
    },
    {
      id: 2,
      registrationNo: "AAA123",
      make: "Ford",
      model: "Mustang",
      modelYear: "2017",
      imageUrl: "https://i.postimg.cc/Fsy2yyh8/car2.jpg",
      mileage: 48500,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.",
    },
    {
      id: 3,
      registrationNo: "BBB123",
      make: "Porsche",
      model: "Alpine",
      modelYear: "1967",
      imageUrl: "https://i.postimg.cc/85xqHwJQ/car3.jpg",
      mileage: 89000,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.",
    },
    {
      id: 4,
      registrationNo: "CCC123",
      make: "Mercedes",
      model: "S500",
      modelYear: "2019",
      imageUrl: "https://i.postimg.cc/MHRgrRVc/car4.jpg",
      mileage: 25000,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.",
    },
    {
      id: 5,
      registrationNo: "XYZ123",
      make: "Mercedes",
      model: "AMG",
      modelYear: "2014",
      imageUrl: "https://i.postimg.cc/wj9n01vv/car5.jpg",
      mileage: 25000,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam commodo venenatis rhoncus. Vivamus id lacus id elit tristique vulputate. Donec ut diam vitae ligula mollis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras tempor sed elit nec pretium. In accumsan odio id est vehicula tincidunt. Aliquam tincidunt risus nec tellus auctor, eget gravida purus efficitur. Morbi rhoncus erat ac leo gravida, id varius ex rhoncus. Donec a ultricies est. Phasellus congue tincidunt vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pretium vel odio et tincidunt.Ut dignissim mi ac elit facilisis feugiat. Etiam velit ligula, interdum id nisi sed, auctor tristique felis. Pellentesque laoreet eleifend nibh eu consequat. Aenean ex odio, interdum id purus quis, vulputate consectetur leo. Vestibulum vitae commodo mauris. Vestibulum blandit, tortor vitae aliquam euismod, urna orci condimentum quam, in dapibus urna tortor quis nibh. Maecenas tempus elit nibh, in luctus ipsum dignissim vel. Ut volutpat enim et est aliquam rhoncus.",
    },
  ];

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

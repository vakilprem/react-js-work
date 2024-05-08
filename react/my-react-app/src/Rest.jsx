import React, { useState } from "react";

function Rest() {
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });

  function handleCarYear(e) {
    setCar((c) => ({ ...car, year: parseInt(e.target.value) })); // Update year with parsed integer value
  }

  function handleCarMake(e) {
    setCar((c) => ({ ...car, make: e.target.value })); // Update make
  }

  function handleCarModel(e) {
    setCar({ ...car, model: e.target.value }); // Update model
  }

  return (
    <div>
      <p>
        {car.make}
        {car.year}
        {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleCarYear} />
      <br />
      <input type="text" value={car.make} onChange={handleCarMake} />
      <br />
      <input type="text" value={car.model} onChange={handleCarModel} />
      <br />
    </div>
  );
}

export default Rest;

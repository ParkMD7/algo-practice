import React, { useState } from "react";

const TemperatureConverter = () => {
  const [fahrenheit, setFahrenheit] = useState(0);
  const [celcius, setCelcius] = useState(0);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    if (name === "fahrenheit") {
      setFahrenheit(value);
      setCelcius(parseFloat((5 / 9) * (value - 32)).toFixed(4));
    } else {
      setCelcius(value);
      setFahrenheit(parseFloat(value * (9 / 5) + 32).toFixed(4));
    }
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <div>
        <label>Fahrenheit</label>
        <input
          value={fahrenheit}
          onChange={handleOnChange}
          type="number"
          name="fahrenheit"
        />
        <span style={{ margin: "20px" }}>=====</span>
        <label>Celcius</label>
        <input
          value={celcius}
          onChange={handleOnChange}
          type="number"
          name="celcius"
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;

import React, { useState } from "react";

function Ceviri() {
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');
  const celvinConverter = (celsius) => {
    return parseFloat(celsius) + 273.15;
  };
  const fahreneitConverter = (celsius) => {
    return (parseFloat(celsius) * 1.8) + 32;
  };
  return <div>Ceviri</div>;
}

export default Ceviri;

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "@picocss/pico"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  {/*import React, { useState } from 'react';
import './style.css';

const App = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');
  const [kelvin, setKelvin] = useState('');

  const handleCelsiusChange = (e) => {
    const celsiusValue = e.target.value;
    setCelsius(celsiusValue);
  };

  const convertToFarhenheit = () => {
    setFahrenheit(celsiusToFarhenheit(celsius));
    setKelvin(''); 
  };

  const convertToKelvin = () => {
    setKelvin(celsiusToKelvin(celsius));
    setFahrenheit(''); 
  };

  const celsiusToFarhenheit = (celsius) => {
    return (celsius * 9/5) + 32;
  };

  const celsiusToKelvin = (celsius) => {
    return parseFloat(celsius) + 273.15;
  };

  return (
    <div className="app">
      <h1>Sıcaklık Dönüştürücü</h1>
      <label>Celsius:</label>
      <input type="number" value={celsius} onChange={handleCelsiusChange} />
      <div>
        <div>
          <p>Fahrenheit: {fahrenheit}</p>
          <button onClick={convertToFarhenheit}>Fahrenheit'e Dönüştür</button>
        </div>
        <div>
          <p>Kelvin: {kelvin}</p>
          <button onClick={convertToKelvin}>Kelvin'e Dönüştür</button>
        </div>
      </div>
    </div>
  );
};

export default App;
 */}
)

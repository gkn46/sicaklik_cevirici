import { useState } from "react";
import Button from "./components/Button";
import Ceviri from "./components/Ceviri";

function App() {
  return (
    <>
      <h1>Sıcaklık Çevirici</h1>
      <input
        type="number"
        name="derece"
        id="derece"
        placeholder="Sıcaklık °C °F K"
      ></input>
      <select>
        <option value="" disabled selected>
          Çevirmek İstediğini Seç
        </option>
        <option>Kelvin</option>
        <option>Fahreneit</option>
      </select>
      <Button />
      <p>°F = °C × 1.8 + 32</p>
      <p>°K = °C + 273.15</p>
      <div>
        <h3>
          Yeni Sıcaklık: <Ceviri />
        </h3>
      </div>
    </>
  );
}

export default App;

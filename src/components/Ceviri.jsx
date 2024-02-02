import React, { useState } from "react";
import Input_ from "./Input_";
import Button from "./Button";
import SonucHesap from "./SonucHesap";

function Ceviri() {
  const [derece, setDerece] = useState('');
  const [sonuc, setSonuc] = useState('');

  function handleClick(event) {
    const inputValue = parseFloat(derece);

    if (!derece.trim()) {
      alert("Lütfen bir derece değeri girin.");
      return;
    }

    if (event.target.id === 'kel') {
      const kelvinSonuc = (inputValue + 273).toFixed(2);
      setSonuc(`Sonuç: ${kelvinSonuc} °K`);
    }
    else if (event.target.id === 'fah') {
      const fahrenheitSonuc = ((9/5) * inputValue + 32).toFixed(2);
      setSonuc(`Sonuç: ${fahrenheitSonuc} °F`);
    }

    setDerece('');}
    function handleChange(event) {
      const inputValue = event.target.value;
      setDerece(inputValue);
    }
    return (
      <div className="jumbotron" >
        <h3 className='baslik'>Sıcaklık Dönüştürücü</h3>
        <Input_ value={derece} onChange={handleChange} />
        <Button onClick={handleClick} id='kel' text="Kelvin'e Çevir" />
        <Button onClick={handleClick} id='fah' text="Fahrenheit'a Çevir" />
        <SonucHesap sonuc={sonuc} />
      </div>
    );
  
}


export default Ceviri;

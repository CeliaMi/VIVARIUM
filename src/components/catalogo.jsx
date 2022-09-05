import React from "react"
import especie1 from '../imagenes/pradera-de-posidonia 2.svg';
import '../css/catalogo.css';
import { findRenderedComponentWithType } from "react-dom/test-utils";

function Catalogo() {
  return (
    <div className="Catalogo">
      <header className="Catalogo-header">
      <div className="tarjeta">
      <img src={especie1} className="Portada-logo" alt="logo"/>

      </div>
      </header>
    </div>
  );
}





export default Catalogo;

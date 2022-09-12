import React, { useState } from "react";
import Card from "./card";
import "../../css/catalogo.css"
import Cards from "../../db.json"
import Parrafos from "./Paraffos";


function Catalogo() {

  return (
  <div className="Prueba">
    <Parrafos/>
    <div className="Catalogo">
      {Cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  </div>
  );
}



export default Catalogo;

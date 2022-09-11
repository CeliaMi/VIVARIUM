import React, { useState } from "react";
import Card from "./card";
import "../css/catalogo.css";
import Cards from "../db.json";


function Catalogo() {
  
  return (
    <div className="Catalogo">
      {Cards.map((card) => {
        return <Card card={card} />;
      })}
    </div>
  );
}



export default Catalogo;

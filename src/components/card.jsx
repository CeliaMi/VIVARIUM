import mas from "../imagenes/mas.svg";
import React, {useState} from "react";

function Card(props) {
  const [flippedClass, setFlippedClass] = useState('');

  return (
    <div className="Cards"> 
      <div className={`CardsInner ${flippedClass}`} key={props.card.id}>
        {/* Tarjeta Front */}
        <div className="CardsFace CardsFaceFront">
          <div className="CardsHeader">
            <img src={props.card.img} alt="" className="ImagenEspecie" />
            <h2>{props.card.nombre}</h2>
            <div
              className="BotonMas"
              onClick={() => {
                setFlippedClass("is-flipped");
              }}
            >
              <img src={mas} className="VerMas" />
            </div>
          </div>
        </div>
        {/* Tarjeta back */}
        <div className="CardsFace CardsFaceBack">
          <div className="CardsBody">
          <span className="Equis" onClick={() => {
                setFlippedClass("");
              }}>x</span>
            <p>{props.card.texto}</p>
          </div>
          <div className="BotonBack">
            <a href="#" className="Btn">
              Apadrinar ❤️
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

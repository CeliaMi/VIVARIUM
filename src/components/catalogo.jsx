import React from "react"
import mas from '../imagenes/mas.svg'
import '../css/catalogo.css';
import Cards from '../db.json'


function Catalogo() {

  return (
    <div className="Catalogo">
    {
      Cards.map(card => {
      return(
      <div className="Cards">
          <div className="CardsInner"  key={ card.id }>
          {/* Tarjeta Front */}
              <div className="CardsFace CardsFaceFront">
                  <div className="CardsHeader">
                  <img src={ card.img }  alt="" className="ImagenEspecie" />
							    <h2>{ card.nombre }</h2>
							    <div className="BotonMas">
								    <img src={mas} className="VerMas" alt="" />
							    </div>
              </div>
          </div>
         {/* Tarjeta back */}
              <div className="CardsFace CardsFaceBack">
                   <div className="CardsBody">
						            <p>{ card.texto }</p>
					        </div>
					        <div className="BotonBack">
						      <a className="Btn">Apadrinar ❤️</a>
					        </div>
              </div>
        </div>
    </div>
    )
  })
  }
  </div>
  );
}





export default Catalogo;

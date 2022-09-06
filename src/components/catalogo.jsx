import React from "react"
import especie1 from '../imagenes/pradera-de-posidonia 2.svg';
import mas from '../imagenes/mas.svg'
import '../css/catalogo.css';

function Catalogo() {
  return (
    <div className="Catalogo">
      <div className="Cards">
          <div className="CardsInner">
          {/* Tarjeta Front */}
              <div className="CardsFace CardsFaceFront">
                  <div className="CardsHeader">
                  <img src={especie1}  alt="" className="pp" />
							    <h2>Posidonia Oceánica</h2>
							    <div className="BotonMas">
								    <img src={mas} className="VerMas" alt="" />
							    </div>
              </div>
          </div>
         {/* Tarjeta back */}
              <div className="CardsFace CardsFaceBack">
                   <div className="CardsBody">
						            <p>Se trata de una planta marina exclusiva del Mediterráneo, pues da refugio a gran número de
							            especies que se alimentan, se reproducen y se cobijan en estas praderas. Además, la
							            posidonia filtra y oxigena las aguas, por lo que su presencia nos indica la buena calidad de
							            las mismas.</p>
					        </div>
					        <div className="BotonBack">
						      <a href="#" className="Btn">Apadrinar ❤️</a>
					        </div>
              </div>
        </div>
    </div>
  </div>
  );
}





export default Catalogo;


import './estilob3.css';
import React from "react";
import TiempoAemet from './ApiTiempo';




function Bloque3() {
  return (
    <section className="bloque">
            <div>
              <h2 className="h2Bloque3">Observa</h2>   
              <div className='cardMapa'>
                  <div className='apiMapa' >
                  </div>
                  <div className='apiTiempo'>
                    <TiempoAemet />
                  </div>
              </div>

            </div>
            <div>
              <h2 className="h2Bloque3">Apadrina</h2>
              <div className='cardFormulario'>
                <form className='formulario'>
                  <input className='inputform' placeholder='Nombre y apellidos' id=''></input>
                  <input className='inputform' placeholder='Email' id=''></input>
                  <input className='inputform' placeholder='Especies a adoptar' id=''></input>
                  <input className='inputform' placeholder='Cantidad' id=''></input>
                  <button className='enviar'>Enviar ❤</button>
                  
                </form>
              </div>
            </div>                 
    </section>
  );
}



export default Bloque3;
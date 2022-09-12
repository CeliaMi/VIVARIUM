
import './estilob3.css';
import React from 'react';
import Formulario from './formulario';

function Bloque3() {
  return (
    <section className="bloque">
            <div>
              <h2 className="h2Bloque3">Observa</h2>   
              <div className='cardMapa'>
                  <div className='apiMapa'></div>
                  <div className='apiTiempo'></div>
              </div>

            </div>
            <div>
              <h2 className="h2Bloque3">Apadrina</h2>
              <div className='cardFormulario'>
                <Formulario/>
              </div>
            </div>                 
    </section>
  );
}



export default Bloque3;
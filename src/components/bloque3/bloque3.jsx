
import ReCAPTCHA from 'react-google-recaptcha';
import './estilob3.css';





function Bloque3() {

  return  (
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
                <form className='formulario'>
                  <input className='inputform' placeholder='Nombre y apellidos' id='nomape'></input>
                  <div id='alerta1'></div>
                  <input className='inputform' placeholder='Email' id='email'></input>
                  <div id='alerta2'></div>
                  <input className='inputform' placeholder='Especies a adoptar' id='especie'></input>
                  <div id='alerta3'></div>
                  <input type='number' className='inputform' placeholder='Cantidad' id='cantidad'></input>
                  <div id='alerta4'></div>
                  <button type='button' className='enviar' value='Enviar' onClick={clickeado}>Enviar ❤</button>
                  <div id='alerta5'></div>
                  <div className="recaptcha">
                    <ReCAPTCHA
                        sitekey="6LcXmvAhAAAAAAOUdYLj3QptwgeXZGLEFwVYeWB7"
                        
                    />
                  </div>

                </form>
              </div>
            </div>                 
    </section>
  );
}



function clickeado() {
  var nombre = document.getElementById("nomape").value;
  var correo = document.getElementById("email").value;
  var regex = /[a-z.]+[a-z]+\.+[a-z]+/g;
  var especie = document.getElementById("especie").value;
  var cantidad = document.getElementById("cantidad").value;

  
  var alerta1 = document.getElementById("alerta1");
  var alerta2 = document.getElementById("alerta2");
  var alerta3 = document.getElementById("alerta3");
  var alerta4 = document.getElementById("alerta4");
  var alerta5 = document.getElementById("alerta5");
    
  
  if (nombre === "") {
    alerta1.innerHTML = "Complete campo nombre"; 
} 
  else if (correo === "") {
    alerta2.innerHTML = "Complete campo correo";
}
  else if (!regex.test(correo)) {
    alerta2.innerHTML= "Debe introducir un correo valido";
}
  else if (especie === "") {
    alerta3.innerHTML = "Complete campo especie";
}
  else if (cantidad === "") {
    alerta4.innerHTML = "Complete campo cantidad";
}
  else {
      alerta5.innerHTML = "Enviado"
  }
    
}




export default Bloque3;
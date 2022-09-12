import './estilob3.css';

function Formulario() {

    function clickeado() {
        var nombre = document.getElementById("nomape").value;
        var correo = document.getElementById("email").value;
        var regex = /[a-z.]+\@+[a-z]+\.+[a-z]+/g;
        var especie = document.getElementById("especie").value;
        var cantidad = document.getElementById("cantidad").value;
    
        
        var alerta1 = document.getElementById("alerta1");
        var alerta2 = document.getElementById("alerta2");
        var alerta3 = document.getElementById("alerta3");
        var alerta4 = document.getElementById("alerta4");
        var alerta5 = document.getElementById("alerta5");
        
        
        if (nombre === "") {
        alerta1.innerHTML = "Complete campo nombre"; 
    } else { 
        alerta1.innerHTML = " ";
    }
        if (correo === "") {
        alerta2.innerHTML = "Complete campo correo";
    } else if (!regex.test(correo)) {
        alerta2.innerHTML= "Debe introducir un correo valido";
    } else {
        alerta2.innerHTML = " ";
    }
        if (especie === "") {
        alerta3.innerHTML = "Complete campo especie";
    } else {
        alerta3.innerHTML = " ";
    }
        if (cantidad === "") {
        alerta4.innerHTML = "Complete campo cantidad";
    } else {
        alerta4.innerHTML = " ";
    }
        if ( (nombre, correo, especie, cantidad) )  {
            alerta5.innerHTML = "Enviado 💙";
    }
        
    }
    return( 
        <form className='formulario'>
        <input className='inputform' placeholder='Nombre y apellidos' id='nomape'></input>
        <div className='alertita' id='alerta1'></div>
        <input className='inputform' placeholder='Email' id='email'></input>
        <div className='alertita' id='alerta2'></div>
        <input className='inputform' placeholder='Especies a adoptar' id='especie'></input>
        <div className='alertita' id='alerta3'></div>
        <input type='number' className='inputform' placeholder='Cantidad' id='cantidad'></input>
        <div className='alertita' id='alerta4'></div>
        <button type='button' className='enviar' value='Enviar' onClick={clickeado}>Enviar ❤</button>
        <div className='alertitaGuay' id='alerta5'></div>

        </form>
)
}

export default Formulario;
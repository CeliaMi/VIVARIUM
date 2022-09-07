import '../porter.css';

function Footer() {
    return (
      <div className="Footer">
        <div className='box'>
          <div className='cajita'>
            <h2>Nuestra Misión</h2>
            <h3>Crear conciencia</h3>
            <p>Contribuir a mejorar el conocimiento e importancia de las gorgonias y posidonias en el mar mediterráneo, para fomentar su conservación.</p> 
            <h3>Restaurar</h3>
            <p>Cultivar y repoblar algunas zonas en el mediterráneo, frenar el declive y favorecer la protección de las gorgonias y posidonias.</p>
          </div>
          <div className='cajita'>
            <h2>Nosotros</h2>
            <p>Este proyecto nació desde la idea de devolverle al planeta un poco de lo que nos dá.</p>
          </div>
          <div className='cajita'>
            <h2>Contáctanos</h2>
            <div className='iconos'>
          <div className='iconcito1'>
            <p></p>
          </div>
          <div className='iconcito2'>
            <p></p>
          </div>
          <div className='iconcito3'>
            <p></p>
          </div>
          <div className='iconcito4'>
            <p></p>
          </div>
        </div>
          </div>
        </div>  
        
        <div className='copy'>
        <p>Copyright © 2010-2022 Vivarium. Todos los derechos reservados.</p>
        </div>
      </div>
    );
  }

  export default Footer;
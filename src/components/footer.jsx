import '../porter.css';

function Footer() {
    return (
      <div className="Footer">
        <div className='box'>
          <div className='MisiónF'>
            <h2>Nuestra Misión</h2>
            <h3>Crear conciencia</h3>
            <p>Contribuir a mejorar el conocimiento e importancia</p>
            <p>de las gorgonias y posidonias en el mar mediterráneo,</p>
            <p>para fomentar su conservación.</p>
            <h3>Restaurar</h3>
            <p>Cultivar y repoblar algunas zonas en el mediterráneo,</p>
            <p>frenar el declive y favorecer la protección de las</p>
            <p>gorgonias y posidonias.</p>
          </div>
          <div className='Nosotros'>
            <h2>Nosotros</h2>
            <p>Este proyecto nació desde la idea de</p>
            <p>devolverle al planeta</p> 
            <p>un poco de lo que nos dá.</p>
          </div>
          <div className='Contacto'>
            <h2>Contáctanos</h2>
          </div>
        </div>  
        <div className='copy'>
        <p>Copyright © 2010-2022 Vivarium. Todos los derechos reservados.</p>
        </div>
      </div>
    );
  }

  export default Footer;
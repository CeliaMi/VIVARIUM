import logo from '../imagenes/Logovivarium.svg';
import '../porter.css';

function Portada() {
  return (
    <div className="Portada">
      <header className="Portada-header">
      <nav>
          <ul className="Barra">
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
          </ul>
        </nav>
        <img src={logo} className="Portada-logo" alt="logo" />
        
        <p>
        Vivarium quiere proteger y restarurar la VIDA MARINA, con un trabajo de cultivo y restauración, donde sus principales protagonistas serán las Gorgonias y Posidonias, siendo estas unas de las especies necesarias e importantes en el ecosistema del mediterráneo.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apadrina
        </a>
      </header>
    </div>
  );
}



export default Portada;

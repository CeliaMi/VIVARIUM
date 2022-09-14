import logo from '../imagenes/Logovivarium.svg';
import '../porter.css';
import { Link } from "react-scroll"

function Portada() {
  return (
    <div className="Portada">
      <header className="Portada-header">
      <nav>
          <ul className="Barra">
            <li><Link
          to="Footer"
          smooth={true}
          duration={1200}>Sobre Nosotros</Link></li>
            <li><Link
          to="Footer"
          smooth={true}
          duration={1200}>Contacto</Link></li>
          </ul>
        </nav>
        <img src={logo} className="Portada-logo" alt="logo" />
        
        <p className="Entradilla">
        Vivarium es un espacio donde vas a encontrar distintas especies con las que hacer match y ayudarles a equilibrar el ecosistema marino. Anímate a conocerlas y podrás tener un seguimiento personalizado.
        </p>
        <h2> Devuelve la vida al Mediterráneo</h2>
        <Link
          className="App-link"
          to="Bloque3"
          smooth={true}
          duration={1200}
        >
          APADRINAR
        </Link>
        
      </header>
    </div>
  );
}



export default Portada;

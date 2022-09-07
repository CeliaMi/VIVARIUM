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
        
        <p className="Entradilla">
        Vivarium es un espacio donde vas a encontrar distintas especies con las que hacer match y ayudarles a equilibrar el ecosistema marino. Anímate a conocerlas y podrás tener un seguimiento personalizado.
        </p>
<<<<<<< HEAD
        <h2> Devuelve la vida a los océanos</h2>
        <a
=======
      <a
>>>>>>> d6859466e2f7367e50bf292a9542cbc9f743842f
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Apadrina aqui
        </a>
        
      </header>
    </div>
  );
}



export default Portada;

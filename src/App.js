import './App.css';
//import db from "./db.json";
import Portada from './components/portada';
import Catalogo from './components/bloque2/catalogo';
import Bloque3 from './components/bloque3/bloque3';
import Footer from './components/footer';
import { useCookies } from "react-cookie";
import Recaptcha from 'react-google-recaptcha';

function App() {
  const [cookies, setCookie] = useCookies(['usuario']);
  
   function handleCookie () {
    setCookie('usuario', 'valor', {
      path: '/'
    });
  };
  
  return (
    <div className="App">
      <Portada />
      <Catalogo />
      <section id="Bloque3">
      <Bloque3 />
      </section>
      <section id="Footer">
      <Footer />
      </section>
      <div className="Prueba">
      <h2 className="CookiesTitulo">Utilizamos cookies para asegurar que damos la mejor experiencia al usuario en nuestra web. Si sigues utilizando este sitio asumiremos que estás de acuerdo.</h2>
      {cookies.usuario && <p>{cookies.usuario}</p>}
      <button onClick={handleCookie} className="BtnCookies">Aceptar Cookies</button> 
      </div>
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;

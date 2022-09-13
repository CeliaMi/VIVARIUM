import './App.css';
//import db from "./db.json";
import Portada from './components/portada';
import Catalogo from './components/catalogo';
import Bloque3 from './components/bloque3/bloque3';
import Footer from './components/footer';
import Recaptcha from 'react-google-recaptcha';

function App() {
  return (
    <div className="App">
      <Portada />
      <Catalogo />
      <Bloque3 />
      <Footer />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;

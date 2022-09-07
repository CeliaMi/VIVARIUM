import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './index.css';
<<<<<<< HEAD
import Portada from './components/portada';
import Footer from './components/footer';
=======
import App from './App';
>>>>>>> d6859466e2f7367e50bf292a9542cbc9f743842f
=======
import './App.css';
import Portada from './components/portada';
import Footer from './components/footer';
import Bloque3 from './components/bloque3/bloque3';
import Catalogo from './components/catalogo';
import './index.css';
import './App';
>>>>>>> ad50f97854495bc3eb020e4d622b8a2c57c92100
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> ad50f97854495bc3eb020e4d622b8a2c57c92100
    <Portada />
    <Catalogo />
    <Bloque3 />
    <Footer />
<<<<<<< HEAD
=======
    <App />
>>>>>>> d6859466e2f7367e50bf292a9542cbc9f743842f
=======
>>>>>>> ad50f97854495bc3eb020e4d622b8a2c57c92100
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
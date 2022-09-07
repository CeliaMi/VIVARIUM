import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import './App.css';
import Portada from './components/portada';
import Footer from './components/footer';
import Bloque3 from './components/bloque3/bloque3';
import Catalogo from './components/catalogo';
import './index.css';
import './App';
=======
import './index.css';
import App from './App';
>>>>>>> 7cbdab68c04bd25c10d5dadd31ca995cbb997584
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Portada />
    <Catalogo />
    <Bloque3 />
    <Footer />
=======
    <App />
>>>>>>> 7cbdab68c04bd25c10d5dadd31ca995cbb997584
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
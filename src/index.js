import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Portada from './components/portada';
<<<<<<< HEAD
import Bloque3 from './components/bloque3/bloque3';
=======
import Footer from './components/footer';
>>>>>>> 0f19d63dceb7ab6ee0af8611c37aa528df24ce8f
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portada />
<<<<<<< HEAD
    <Bloque3 />
=======
    <Footer />
>>>>>>> 0f19d63dceb7ab6ee0af8611c37aa528df24ce8f
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
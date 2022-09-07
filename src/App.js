import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Portada from './components/portada';
import Catalogo from './components/catalogo';
import Bloque3 from './components/bloque3/bloque3';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portada />
    <Catalogo />
    <Bloque3 />
    <Footer />
  </React.StrictMode>
);

import './App.css';
//import db from "./db.json";


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;

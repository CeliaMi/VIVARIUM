import { Animated, Dimensions, StyleSheet, Text, View } from "react-native";


// import React from "react"
// import mas from '../imagenes/mas.svg'
// import '../css/catalogo.css';
// import Cards from '../db.json'
// import Girar from "./girar";

// function Catalogo() {
//   return (
//     <div className="Catalogo">
//     {
//       Cards.map(card => {
//       return(
//       <div className="Cards">
//           <div className={`CardsInner ${flippedClass}`}  onClick="" key={ card.id }>
//           {/* Tarjeta Front */}
//               <div className="CardsFace CardsFaceFront">
//                   <div className="CardsHeader">
//                   <img src={ card.img }  alt="" className="ImagenEspecie" />
// 							    <h2>{ card.nombre }</h2>
// 							    <div className="BotonMas">
// 								    <img src={mas} className="VerMas" />
// 							    </div>
//               </div>
//           </div>
//          {/* Tarjeta back */}
//               <div className="CardsFace CardsFaceBack">
//                    <div className="CardsBody">
// 						            <p>{ card.texto }</p>
// 					        </div>
// 					        <div className="BotonBack">
// 						      <a href="#" className="Btn">Apadrinar ❤️</a>
// 					        </div>
//               </div>
//         </div>
//     </div>
//     )
//   })
//   }
//   </div>
//   );
// }


// export default Catalogo;

// const [flipped, set] = useState(false)
//   const { transform } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: { mass: 5, tension: 500, friction: 80 }
//   })
//   return (
//     <div onClick={() => set(state => !state)}>
//       <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
//       <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
//     </div>
//   )



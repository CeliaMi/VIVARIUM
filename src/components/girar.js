// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       // Este enlace es necesario para hacer que `this` funcione en el callback
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
//   }


function Girar (){

  const carta = document.querySelector(".CardsInner");
  
  carta.addEventListener("click", function (e) {
    carta.classList.toggle('is-flipped');
  });
}
  
// export default Girar;
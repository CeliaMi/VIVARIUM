import { render, screen } from '@testing-library/react';
import  Parrafos  from '../components/bloque2/Paraffos'
//funcion screen: tiene las opciones para que podamos recuperar elementos del componente que se esta renderizando
describe('Parrafos component',() =>{

    test('la caja de texto se encuentra en el documento', () => {
        render(<Parrafos />);
        const article = screen.getByRole('article', {name: 'parrafo cards'})
        expect(article).toBeInTheDocument();
    // funcion expect diremos todo aquello que vamos a evaluar. Con el toBeInTheDocument() comprobaremos si el paragraph se encuentra en el documento
    });
});

// getByRole, es una forma muy recomendable para poder acceder a los diferentes elementos, ya que ademas vamos a 
//asegurarnos de que esos elementos esten dentro de lo que se denomina la accesibilidad de nuestra página van a estar muy accesibles. 
import React, {Component} from 'react';

import Navbar from "./components/navbar";
import Card from "./components/card";

import sneaker from './images/sneaker.jpeg';
import giubbotto from './images/giubbotto.jpeg';
import giu1 from './images/giu1.jpeg';
import felpa from './images/felpa.jpeg';
import fel1 from './images/fel1.jpeg';
import sneak1 from './images/sneak1.jpeg';
import pantaloni from './images/pantaloni.jpeg';
import pantele from './images/pantaloni1.jpeg';




class App extends Component {
    state = {
      cards:[
        {id:0, nome: 'sneaker', prezzo: 69.99, immagine: sneaker},
        {id:1, nome: 'Giubbotto', prezzo: 169.99, immagine: giubbotto},
        {id:2, nome: 'giubbotto ', prezzo: 49.99, immagine: giu1},
        {id:3, nome: 'felpa', prezzo: 89.99, immagine: felpa},
        {id:4, nome: 'felpa', prezzo: 99.99, immagine: fel1},
        {id:5, nome: 'scarpe eleganti', prezzo: 199.99, immagine: sneak1},
        {id:6, nome: 'pantaloni', prezzo: 59.99, immagine: pantaloni},
        {id:7, nome: 'Pantaloni eleganti', prezzo: 79.99, immagine: pantele}
      ]
    }
     
    render () {
    
    return (
      <>
      <Navbar/>
      
      <h1> Cosa desideri ordinare? </h1>
      <div className="container">

      <div className="row">
        {this.state.cards.map(card =>(
          <Card
            key={card.id}
            card={card}/>
        ))}
      </div>
      </div>
    </>
  );
}
}
export default App;

import React, {Component} from 'react'; 
import { render } from '@testing-library/react';

class Card extends Component {
    render (){
    return (
        <div className="col">
            <div className="card" style={{width: '18rem', textAlign:'center'}}>
                <img src= {this.props.card.immagine} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{this.props.card.nome}</h5>
                        <p className="card-text">£{this.props.card.prezzo}</p>
                        <button className="btn btn-info">Aggiungi al carrello</button>
                    </div>
            </div>
        </div>

    );
}
}
export default Card;
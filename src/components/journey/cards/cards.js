import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import Card from './card';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journey_name: [],
            cards: []
        }

        this.cards = this.cards.bind(this);
    }

    fetchCards = () => {
        // TO DO - add dimamic call based on card id
        axios.get('https://glms-e42b5.firebaseio.com/user/j/journey/0.json').then(response => {
            // console.log('response data:', response.data.cards);
            this.setState({
                journey_name: response.data.journey_name,
                cards: response.data.cards
            })
        }).catch(error => {
            console.log(`fetchCards error : ${error}`);
        });
    }

    cards = () => {
        // return console.log('cards', this.state.cards)
        return (
            this.state.cards.map(card => {
                return (
                    <Card
                        key = {card.card_id}
                        card_name = {card.card_name}
                        explanation = {card.explanation}
                        image_url = {card.image}
                        points = {card.points}
                        reference = {card.reference}
                    />
                )
            })
        )
}

componentDidMount() {
    this.fetchCards();

}

render() {

    return (
        <div>
            <div>
                Cards
                </div>
            <div>
                {this.cards()}
            </div>

        </div>
    );
}
}

export default Cards;

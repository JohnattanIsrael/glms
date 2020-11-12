import React, { Component } from 'react';
import axios from 'axios';

import { myApi } from '../../../../myApi';
import Card from './card';

class Cards extends Component {
    constructor(props) {
        super(props);

        this.state = {
            journey_name: [],
            cards: [],
            data: [],
            hero: []

        }

        this.cards = this.cards.bind(this);
    }


    fetchCards = () => {

        axios.get(`${myApi()}/user/j/journey/0.json`).then(response => {
            this.setState({
                journey_name: response.data.journey_name,
                cards: response.data.cards,
            })
        }).catch(error => {
            console.log(`fetchCards error : ${error}`);
        });
    }

    cards = () => {
        return (
            this.state.cards.map(card => {
                return (
                    <Card
                        key={card.card_id}
                        card_name={card.card_name}
                        explanation={card.explanation}
                        image_url={card.image}
                        points={card.points}
                        reference={card.reference}
                    />
                )
            })
        )
    }

    fetchData = () => {

        axios.get(`${myApi()}/user/j.json`).then(response => {

            this.setState({
                data: response.data,
                hero: response.data.hero
            })
        }).catch(error => {
            console.log(`fetchData error : ${error}`);
        });
    }

    componentDidMount() {
        this.fetchCards();
        this.fetchData();

    }

    render() {

        return (
            <div className='cards-page'>

                <div className='cards-rail'>
                    {this.cards()}
                </div>

            </div>
        );
    }
}

export default Cards;

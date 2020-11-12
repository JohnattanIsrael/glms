import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretSquareLeft } from '@fortawesome/free-solid-svg-icons'

import MapItem from '../mapItems';
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
        // TO DO - add dimamic call based on card id
        axios.get('https://glms-e42b5.firebaseio.com/user/j/journey/0.json').then(response => {
            // console.log('response data:', response.data.cards);
            this.setState({
                journey_name: response.data.journey_name,
                cards: response.data.cards,
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
        // TO DO - add dimamic call based on user_email
        axios.get('https://glms-e42b5.firebaseio.com/user/j.json').then(response => {
            // console.log('response data:', response.data.journey);
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
                {/* <div className='cards-page__navbar'>
                    <Link to='/'>
                        <FontAwesomeIcon icon={faCaretSquareLeft} />
                    </Link>
                    <MapItem
                        name={this.state.data.name}
                        level={this.state.hero.level}
                        points={this.state.hero.points}
                        class='cards-user'
                    />
                </div> */}

                <div className='cards-rail'>
                    {this.cards()}
                </div>

            </div>
        );
    }
}

export default Cards;

import { faKissBeam } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";


export default class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCard: false
        }

        this.handleCardFace = this.handleCardFace.bind(this);
        this.handleCardBack = this.handleCardBack.bind(this);
        this.cardBack = this.cardBack.bind(this);
        this.cardFace = this.cardFace.bind(this);
        this.cardState = this.cardState.bind(this);
        this.handleCard = this.handleCard.bind(this);
    }

    handleCardBack = () => {
        this.setState = {
            showCard: true
        }
    }

    handleCardFace = () => {
        this.setState = {
            showCard: false
        }
    }

    cardFace = () => {
        return (
            <div className='card-front'>
                <div className='card-front__name'>{this.props.card_name}</div>
            </div>
        )
    }

    cardBack = () => {
        return (
            <div className='card__back'>
                <div className='card__back__text'>
                    <div className='card-front__name'>{this.props.card_name}</div>
                    <div>explanation: {this.props.explanation}</div>
                </div>
                <div className='card__back__image'>
                    {/* <h4>image url: {this.props.image_url}</h4> */}
                </div>
                {/* <div>reference: {this.props.reference}</div> */}
                <div className='card-front__points'>{this.props.points}</div>
            </div>
        )
    }

    cardState = () => {
        return (
            this.state.showCard ? this.handleCardBack() && console.log(this.state) : this.handleCardFace() && console.log(this.state)
        )
        // if (this.state.showCard == true) {
        //     this.handleCardBack();
        //     console.log(this.state);             
        // } else if (this.state.showCard == false) {
        //     this.handleCardFace();
        //     console.log(this.state); 
        // }
    }

    handleCard = () => {
        if (this.state.showCard == true) {
            this.cardFace();
        } else if (this.state.showCard == false) {
            this.cardBack();
        }
    }

    render() {
        return (
            <div className='card'>

                <div className='card__front'>
                    <div className='card__front__name'>{this.props.card_name}</div>
                </div>

                <div className='card__back'>
                    <div className='card__back__content'>
                        <div className='card__back__text'>
                            <div className='card__back__name'>{this.props.card_name}</div>
                            <div className='card__back__explanation'>{this.props.explanation}</div>
                        </div>
                        <a className='card__back__reference' href={this.props.reference}>more on this...</a>
                        <div className='card__back__image'>
                            <img src={this.props.image_url} />
                        </div>

                        <div className='card__back__points'>{this.props.points} points.</div>
                    </div>
                </div>

            </div>
        )
    }
}
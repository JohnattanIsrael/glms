import React, { Component } from "react";


export default class Card extends Component {
    constructor(props) {
        super(props);

    };

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

                    </div>
                </div>

            </div>
        )
    }
}
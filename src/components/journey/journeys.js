import React, { Component } from "react";


export default class Journey extends Component {
    constructor(props) {
        super(props);

        this.position = this.position.bind(this);
        this.image = this.image.bind(this);
    }

    position = () => {
        if ((this.props.journey_id + 1) % 6 == 0) {
            return ('center')
        } else if ((this.props.journey_id + 1) % 3 == 0) {
            return ('right')
        } else if ((this.props.journey_id + 1) % 2 == 0) {
            return ('center')
        } else {
            return ('left')
        }
    }

    image = () => {
        return (
            Math.floor(Math.random() * 12) + 1
        )
    }

    render() {
        
        return (
            <div className={`journey journey-position__${this.position()}`}>

                <div className={`journey-card journey-image__${this.image()}`}>
                    <div className='journey-links'>

                        <h1 className='journey-links__almost-gone'>{this.props.journey_name}</h1>
                        <h1 className='journey-links__more-transparent'>{this.props.journey_name}</h1>
                        <h1 className='journey-links__transparent'>{this.props.journey_name}</h1>
                        <h1 className='journey-links__solid'>{this.props.journey_name}</h1>


                    </div>
                </div>


            </div>
        )
    }
}

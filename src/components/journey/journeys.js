import React from "react";
import { Link } from "react-router-dom";
// TO DO - add dinamic prop to use as class to position it diferent each time
export default function (props) {

    const position = () => {
        if((props.journey_id + 1) % 3 == 0) {
            return('right')
        } else if ((props.journey_id + 1) % 2 == 0) {
            return('center')
        } else {
            return('left')
        }
    }

    const image = () => {
        return (
            // Math.floor(Math.random() * 12) + 1
            1
        )
    }

    return (
        <div className={`journey journey-position__${position()}`}>
            <div className={`journey-wrapper journey-image__${image()}`}>
                <p>background image</p>
                <Link
                    to={`/cards`}
                >
                            
                    <h1 className='journey-wrapper__more-transparent'>{props.journey_name}</h1>
                    <h1 className='journey-wrapper__transparent'>{props.journey_name}</h1>
                    <h1 className='journey-wrapper__solid'>{props.journey_name}</h1>
                
                </Link>
            </div>

        </div>
    )
}
import React from "react";
import { Link } from "react-router-dom";
// TO DO - add dinamic prop to use as class to position it diferent each time
export default function (props) {
    return (
        <div>
            <div>
                <p>background image</p>
                <p>{props.journey_id}</p>
                <Link
                    to={`/cards`}
                >
                    <h1>{props.journey_name}</h1>
                    <h2>{props.journey_name}</h2>
                    <h3>{props.journey_name}</h3>
                    <h4>{props.journey_id}</h4>
                </Link>
            </div>

        </div>
    )
}
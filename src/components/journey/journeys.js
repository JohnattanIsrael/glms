import React from "react";
import { Link } from "react-router-dom";
// TO DO - add dinamic prop to use as class to position it diferent each time
export default function (props) {
    return (
        <div>
            <div>
                <p>background image</p>
            <div>
                <h1>{props.journey_name}</h1>
                <h2>{props.journey_name}</h2>
                <h3>{props.journey_name}</h3>
            </div>
            </div>

        </div>
    )
}
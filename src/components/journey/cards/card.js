import React from "react";


export default function (props) {
    return (
        <div>
            <h2>name: {props.card_name}</h2>
            <h4>explanation: {props.explanation}</h4>
            <h4>image url: {props.image_url}</h4>
            <h4>points : {props.points}</h4>
            <h4>reference: {props.reference}</h4>

        </div>
    )
}
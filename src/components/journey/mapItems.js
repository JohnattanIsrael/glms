import React from "react";
import { Link } from "react-router-dom";

export default function (props) {
    return (
        <div>
            <h1>Add beautiful interfase here</h1>
            <h2>level: {props.level}</h2>
            <h3>name: {props.name}</h3>
            <h4>points: {props.points}</h4>

        </div>
    )
}
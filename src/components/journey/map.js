import React, { Component } from 'react';
import axios from 'axios';

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.State = {
            user_id: props.user_id
        }
    }

    // fetchData = () => {
    //     axios.get
    // }
    render() {
        return (
            <div>
                <h1>Map of Journeys</h1>
                <h2>{this.State.user_id}</h2>
            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';

import MapItem from './mapItems';

export default class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.user_id,
            data: [],
            hero:[]
        }


        this.heroItems = this.heroItems.bind(this);
    }

    fetchData = () => {
        // TO DO - add dimamic call based on user_email
        axios.get('https://glms-e42b5.firebaseio.com/user/j.json').then(response => {
            console.log('response data:', response.data.hero.level);
            this.setState({
                data: response.data,
                hero: response.data.hero
            })
        }).catch(error => {
            console.log(`fetchData error : ${error}`);
        });
    }

    heroItems() {
        return (
            console.log( 'data rendered:',this.state.data)
        )
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        
        return (
            <div>
                <h1>Map of Journeys</h1>
                <h2>{this.state.user_id}</h2>
                
                <MapItem
                name={this.state.data.name}
                level={this.state.hero.level}
                points={this.state.hero.points}
                />
                
                



            </div>
        );
    }
}

import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import MapItem from './mapItems';
import Journey from './journeys';

class Map extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_id: props.user_id,
            data: [],
            hero: [],
            journeys: []
        }

        this.journeys = this.journeys.bind(this);
    }

    fetchData = () => {
        // TO DO - add dimamic call based on user_email
        axios.get('https://glms-e42b5.firebaseio.com/user/j.json').then(response => {
            // console.log('response data:', response.data.journey);
            this.setState({
                data: response.data,
                hero: response.data.hero,
                journeys: response.data.journey
            })
        }).catch(error => {
            console.log(`fetchData error : ${error}`);
        });
    }

    journeys = () => {
        return this.state.journeys.map(item => {
            return (
                <Journey key={item.journey_id} journey_id={item.journey_id} journey_name={item.journey_name}/>
            )
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <div>
                {/* {console.log('the email to dinamically call API:', this.state.user_id)} */}
                <div>
                    <MapItem
                        name={this.state.data.name}
                        level={this.state.hero.level}
                        points={this.state.hero.points}
                    />
                </div>
                <div>
                    {this.journeys()}
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state, user_id) => {
    
    return { 
        user_id,
        ...state
    }
}

export default connect(mapStateToProps)(Map);

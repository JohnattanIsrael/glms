import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { myApi } from '../../../myApi';

import MapItem from './mapItems';
import Journey from './journeys';
import Cards from './cards/cards';


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
        this.handleShowCards = this.handleShowCards.bind(this);
    }

    fetchData = () => {
        axios.get(`${myApi()}/user/j.json`).then(response => {
            this.setState({
                data: response.data,
                hero: response.data.hero,
                journeys: response.data.journey
            })
        }).catch(error => {
            console.log(`fetchData error : ${error}`);
        });
    }

    handleShowCards = () => {
        if(document.getElementById('journey-card').classList.contains('card-hidden')){
            document.getElementById('journey-card').classList.remove('card-hidden');
            document.documentElement.scrollTop = 0;
        } else {
            document.getElementById('journey-card').classList.add('card-hidden');
        }
    }
      

    journeys = () => {
        return this.state.journeys.map(item => {
            return (
                <div key={item.journey_id} className={`card-journey`} onClick={() => this.handleShowCards()}>
                    <Journey journey_id={item.journey_id} journey_name={item.journey_name} />
                </div>
            )
        })
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {

        return (
            <div className={`dashboard`}>
                <div className='dashboard__left'>
                    <MapItem
                        name={this.state.data.name}
                        level={this.state.hero.level}
                        points={this.state.hero.points}
                    />
                </div>
                <div className='dashboard__right'>
                    <div className='dashboard__right__journeys'>
                        {this.journeys()}
                    </div>
                    { }
                    <div id='journey-card' className='dashboard__right__cards card-hidden'>
                        <Cards />
                        <div className='card-journey__button' onClick={() => this.handleShowCards()}>Back.</div>
                    </div>
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

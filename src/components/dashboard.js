import React, { Component } from 'react';
import axios from 'axios';

export default class Dashboard extends Component {

    fetchData = () => {
        axios.get('https://glms-e42b5.firebaseio.com/user.json').then(response => {
            // console.log(response);
            let data = response;
            console.log("Hero Level:", data.data.hero.level);
            

        }).catch(error => {
            console.log("fetchData erro", error);
        });
    }



    render() {
        return (
            <div>
                <h1>Hello there</h1>
                {this.fetchData()}
            </div>
        );
    }
}

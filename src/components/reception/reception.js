import React, { Component } from 'react';
import history from 'history';

import { GreenButton, RedButton } from '../buttons';


export default class Reception extends Component {
    render() {
        return (
            <div>
                <h1>Have an account?</h1>
                <GreenButton 
                onClick={() => history.push('/signin')}
                />
                <RedButton />

            </div>
        );
    }
}

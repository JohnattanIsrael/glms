import React, { Component } from 'react';

import Reception from '../reception';
import SignInForm from './signInForm';
import { BlueButton } from '../../buttons';

export default class SignIn extends Component {
    render() {
        return (
            <div>
                <Reception />
                {/* <SignInForm /> */}
                <BlueButton />
                
            </div>
        );
    }
}

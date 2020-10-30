import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import Reception from './reception';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        // axios.post("glms-e42b5.firebaseapp.com")
        event.preventDefault();
        console.log('handleSubmit', this.state.email, this.state.password);
    }


    render() {
        return (
            <div>
                <Reception />
                <div className='signin'>
                    <div className='signin__form'>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <input
                                type='password'
                                name='password'
                                placeholder='Password'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />

                            <div className='signin-buttons'>
                                <div className='signin-buttons__button'>
                                    <button type='submit' className='signin-buttons__circle'>
                                        Blue Button
                                </button>
                                </div>
                                <div className='signin-buttons__description'>
                                    Send.
                            </div>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        );
    }
}

export default SignIn;
import React, { Component } from 'react';
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';

import Reception from '../reception/reception';

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            name: ''
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
        console.log('handleSubmit', this.state.email, this.state.password, this.state.name);
    }


    render() {
        return (
            <div>
                <div className='reception__title'>
                    Register please.
                </div>
                <div className='signup'>
                    <Link to="/" className='button-back'>
                        Back.
                    </Link>
                    <div className='signup__form'>
                        <form
                            onSubmit={this.handleSubmit}
                        >
                            <input
                                type='name'
                                name='name'
                                placeholder='Name'
                                value={this.state.name}
                                onChange={this.handleChange}
                            />
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
                            <input
                                type='password'
                                name='password'
                                placeholder='Password Confirm'
                                value={this.state.password}
                                onChange={this.handleChange}
                            />

                            <div className='signup-buttons'>
                                <div className='signup-buttons__button'>
                                    {/* <button type='submit' className='signup-buttons__circle'>
                                        Blue Button
                                    </button> */}
                                    <Link to="/dashboard" className='button-blue-circle'>
                                        Blue Button
                                    </Link>
                                </div>
                                <div className='signup-buttons__description'>
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

export default SignUp;
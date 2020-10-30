import React, { Component } from 'react';
import {Form, Button, Card } from 'react-bootstrap';

export default class SignUp extends Component {
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
                <div className='signup__title'>
                    Sign Up
                </div>
                <div className='signup'>
                    <div className='signup__form'>
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
                            <input
                                type='password'
                                name='password'
                                placeholder='Password Confirm'
                                value={this.state.password}
                                onChange={this.handleChange}
                                
                            />

                            <div className='signup-buttons'>
                                <div className='signup-buttons__button'>
                                    <button type='submit' className='signup-buttons__circle'>
                                        Blue Button
                                    </button>
                                </div>
                                <div className='signup-buttons__description'>
                                    Sign Up.
                            </div>
                            </div>
                        </form>

                    </div>


                </div>
            </div>
        );
    }
}

import React, { Component } from 'react';

// import { Field } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import history from 'history';

import { FormInput } from '../../formFields';

export default class SignInForm extends Component {
    render() {
        // const { className } = this.props;
        // ${className}<----
        return (
        <form className={` sign-in-form`}>
                <Field
                    className='sign-in-form__email'
                    name='email'
                    type='email'
                    title='Email'
                    placeholder='Email'
                    component={FormInput}
                />

                <Field
                    className='sign-in-form__password'
                    name='password'
                    type='password'
                    title='Password'
                    placeholder='Password'
                    component={FormInput}
                />
            </form>
        );
    }
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);


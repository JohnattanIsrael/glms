import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare, faCircle, faCaretUp, faShapes, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'


const Sign = (props) => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError
    } = props;

    return (
        <section className='login-wrapper'>
            <div className='login-content-wrapper'>
                <div className='login'>

                    {hasAccount ? (

                        <div className='login-left'>
                            <div className='login-left__title'>
                                Enter your account.
                            </div>
                            <div className='login-left__button'>
                                <div className='login-left__items' onClick={() => setHasAccount(!hasAccount)}>
                                    <div className='login-left__legend'>
                                        or Sign Up.
                                    </div>
                                    <div className='button'>
                                        <div className='button__yellow'>
                                            <FontAwesomeIcon icon={faSquare} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ) : (

                            <div>
                                <div className='login-left__title'>
                                    Create an account.
                            </div>
                                <div className='login-left__button'>
                                    <div className='login-left__items' onClick={() => setHasAccount(!hasAccount)}>
                                        <div className='login-left__legend'>
                                            or Sign In.
                                        </div>
                                        <div className='button'>
                                            <div className='button__yellow'>
                                                <FontAwesomeIcon icon={faSquare} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )}

                    <div className='login-right'>
                        <div className='login-right__form'>
                            <p className='error-message'>{emailError}</p>
                            <input
                                className='login-right__form__input'
                                type='text'
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label>Username</label>

                            <p className='error-message'>{passwordError}</p>
                            <input
                                className='login-right__form__input'
                                type='password'
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label>Password</label>

                        </div>
                        {hasAccount ? (
                            <div className='login-right__button'>
                                <div className='loging-right__button-button' onClick={handleLogin}>
                                    <div className=' button button__blue'>
                                        <FontAwesomeIcon icon={faCircle} />
                                    </div>
                                    <div className='login-right__legend'>
                                        Sign In.
                                    </div>
                                </div>
                            </div>
                        ) : (
                                <div className='login-right__button'>

                                    <div className='loging-right__button-button' onClick={handleSignUp}>
                                        <div className=' button button__blue'>
                                            <FontAwesomeIcon icon={faCircle} />
                                        </div>
                                        <div className='login-right__legend'>
                                            Sign Up.
                                        </div>

                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sign;

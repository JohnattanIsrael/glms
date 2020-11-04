import React from 'react';

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
        <section>
            <div className='login'>

                {hasAccount ? (

                    <div className='login-left'>
                        <div className='login-left__title'>
                            Don´t have an account ?
                        </div>
                        <div className='login-left__button'>
                            <div onClick={() => setHasAccount(!hasAccount)}>
                                <div className='login-left__legend'>
                                    Sign up
                                </div>
                                <div className='button'>
                                    <div className='button__green'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                ) : (

                        <div>
                            <div className='login-left__title'>
                                Have an account ?
                            </div>
                            <div className='login-left__button'>
                                <div onClick={() => setHasAccount(!hasAccount)}>
                                    <div className='login-left__legend'>
                                        Sign in
                                    </div>
                                    <div className='button'>
                                        <div className='button__red'></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}

                <div className='login-right'>
                    <div className='login-right__form'>
                        <label>Username</label>
                        <input
                            type='text'
                            autoFocus
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p className='error-message'>{emailError}</p>
                        <label>Password</label>
                        <input
                            type='password'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className='error-message'>{passwordError}</p>
                    </div>
                    {hasAccount ? (
                        <div className='login-right__button'>
                            <button onClick={handleLogin}>
                                <div className='loging-right__button-button button__blue' />
                                <div className='login-right__legend'>
                                    Sign In
                                </div>
                            </button>
                        </div>
                    ) : (
                            <div className='login-right__button'>

                                <button onClick={handleSignUp}>
                                    <div className='loging-right__button-button button__blue' />
                                    <div className='login-right__legend'>
                                        Sign Up
                                    </div>
                                </button>
                            </div>
                        )}
                </div>
            </div>
        </section>
    );
}

export default Sign;

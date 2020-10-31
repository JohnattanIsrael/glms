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
        <section className='login'>
            <div className='login__container'>
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
                <div className='button-container'>
                    {hasAccount ? (
                        <div>
                            <button onClick={handleLogin}>
                                Sign In
                            </button>
                            <p>
                                Don´t have an account ?
                                <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </div>
                    ) : (
                            <div>
                                <button onClick={handleSignUp}>
                                    Sign Up
                                </button>
                                <p>
                                    Have an account ?
                                    <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                                </p>
                            </div>
                        )}
                </div>
            </div>
        </section>
    );
}

export default Sign;

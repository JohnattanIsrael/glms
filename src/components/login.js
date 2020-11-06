import React, { Component, useState, useEffect } from 'react';
import fire from '../fire';

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSquare, faCircle, faCaretUp, faShapes, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

library.add(
  faSquare, 
  faCircle, 
  faCaretUp, 
  faShapes, 
  faCaretLeft, 
  faCaretRight
)

import Sign from './sign';
import Dashboard from './dashboard';
import Map from './journey/map';

const Login =() => {

    
    const [user, setUser ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err => {
                switch(err.code){
                    case 'auth/invalid-email':
                    case 'auth/user-disabled':
                    case 'auth/user-not-found':
                        setEmailError(err.message);
                        break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
                }
            });
    }

    const handleSignUp = () => {
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
            switch(err.code){
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    setEmailError(err.message);
                    break;
                case 'auth/weak-password':
                    setPasswordError(err.message);
                    break;
            }
        });
    }

    const handleLogOut = () => {
        fire.auth().signOut();
    };

    
    const authListener = (user_id) => {
        user_id = '';
        fire.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
                user_id = user.email;
            } else {
                setUser('');
            }
        });
    }

    useEffect(() => {
        authListener();
    }, []);

        return (
            
            <div>
                
                {user ? (
                    <div>
                    <Dashboard 
                    handleLogOut={handleLogOut}
                    user_id={user.email}
                    />
                    <Map 
                    user_id={user.email}
                    />
                    </div>
                ) : (
                    <Sign 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignUp={handleSignUp}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                    />  
                    
                )}
                
                
                

            </div>
        );
    
}

export default Login;

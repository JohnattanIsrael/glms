import React, { Component, useRef } from 'react';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useAuth, AuthProvider } from '../../context/AuthContext';

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();

        signup(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <AuthProvider>
            <Container
                className='d-flex align-items-center justify-content-center'
                style={{ minHeight: '100vh' }}
            >
                <div
                    className='w-100'
                    style={{ maxWidth: '400px' }}>
                    <Card>
                        <Card.Body>
                            <h2 className='text-center mb-4'>
                                Sign Up
                        </h2>
                            <Form.Group id='email'>
                                <Form.Label>
                                    Email
                            </Form.Label>
                                <Form.Control type='email' ref={emailRef} required>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group id='password'>
                                <Form.Label>
                                    Password
                            </Form.Label>
                                <Form.Control type='password' ref={passwordRef} required>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group id='password-confirm'>
                                <Form.Label>
                                    Password Confirmation
                            </Form.Label>
                                <Form.Control type='password' ref={passwordConfirmRef} required>
                                </Form.Control>
                            </Form.Group>
                            <Button className='w-100' type='submit'>Sign Up</Button>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Have an Account? login.
                </div>
                </div>
            </Container>
        </AuthProvider>
    );

}

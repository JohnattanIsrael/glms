import React, { Component } from 'react';

import { useHistory, Link } from 'react-router-dom';

class Reception extends Component {
    constructor(props) {
        super(props);

    }    

    render() {
        return (
            <div className='reception'>
                <div className='reception__title'>
                    Have an account?
                </div>
                {/* <a 
                onClick={() => this.getSingInForm()}
                >
                    Green Buuton
                </a> */}
                <div className='reception__buttons'>
                    <div className='reception__buttons__green'>
                        <div className='button-description'>
                            Yes.
                        </div>
                        <div className='button-square'>
                            <Link to="/signin" className='button-green-square'>
                                Green Button
                            </Link>
                        </div>
                    </div>
                    <div className='reception__buttons__red'>
                        <div className='button-description'>
                            No.
                        </div>
                        <div className='button-triangle'>
                            <Link to="/signup" className='button-red-square'>
                                Red Button
                            </Link>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Reception;
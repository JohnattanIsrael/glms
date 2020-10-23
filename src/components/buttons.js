import React from 'react';

export function GreenButton() {
    return (
        <div className='buttons'>
            <div 
            className='buttons__green-btn'
            onClick={() => console.log('clicked on the green squared button')}
            >
                Green button
            </div>
        </div>
    );
}

export function RedButton() {
    return (
        <div className='buttons'>
            <div 
            className='buttons__red-btn'
            onClick={() => console.log('clicked on the red triangled button')}
            >
                Red button
            </div>
        </div>
    );
}

export function BlueButton() {
    return (
        <div className='buttons'>
            <div 
            className='buttons__blue-btn'
            onClick={() => console.log('clicked on the blue circled button')}
            >
                Blue button
            </div>
        </div>
    );
}

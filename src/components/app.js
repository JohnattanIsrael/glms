import React, { Component } from 'react';

import Reception from './reception/reception';
import SignIn from './reception/signIn';

export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        {...this.props.children}
      </div>
    );
  }
}

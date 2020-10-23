import React, { Component } from 'react';

import Reception from './reception/reception';

export default class App extends Component {
  render() {
    return (
      <div className='app-wrapper'>
        {...this.props.children}
      </div>
    );
  }
}

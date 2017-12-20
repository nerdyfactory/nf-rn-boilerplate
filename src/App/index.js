import React, { Component } from 'react'

import { store, Provider } from '../Store'

import RootContainer from '../Containers/RootContainer'

export default class App extends Component {

  render() {
    return (
      <Provider store={store} >
        <RootContainer />
      </Provider>
    );
  }
}

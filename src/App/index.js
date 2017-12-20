import React, { Component } from 'react'

import { store, dispatch, Provider, Navigation } from '../Store'

export default class App extends Component {

  render() {
    return (
      <Provider
        dispatchNavigation={dispatch}
        navigationState={store.nav}
        store={store} >
        <Navigation />
      </Provider>
    );
  }
}

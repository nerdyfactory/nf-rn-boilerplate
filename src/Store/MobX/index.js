import React, { Component } from 'react'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import RootNavigator from '../../App/RootNavigator'
import { addNavigationHelpers } from 'react-navigation'

export { Provider } from 'mobx-react'

/* The best approach is to have a parent class and inside of it many stores, like:

class NavStore {
  state = observable({
    nav: {
      index: 0,
      routes: [{
        key: 'Launch',
        routeName: 'Launch'
      }]
    }
  })

  dispatch = action.bound((action, stackNavState = true) => {
    RootStore.nav = RootNavigator.router.getStateForAction(action, stackNavState ? RootStore.nav : null)
    return RootStore.nav
  })
}

class RootStore {
  navStore = new NavStore()
}

export const RootStore = new RootStore()
export const dispatch = RootStore.navStore.dispatch

Had too many issues on that, picked a simpler path for now

*/
export const RootStore = observable({
  nav: {
    index: 0,
    routes: [{ key: 'Launch', routeName: 'Launch' }]
  },
  counters: {
    counter: 0
  }
})

export const dispatch = action.bound((action, stackNavState = true) => {
  RootStore.nav = RootNavigator.router.getStateForAction(action, stackNavState ? RootStore.nav : null)
  return RootStore.nav
})
  

export const CountersActions = {
  increase: action.bound(() => RootStore.counters.counter++ ),
  decrease: action.bound(() => RootStore.counters.counter--)
}

export const Navigation = observer(class Navigation extends Component {
  render() {
    return (
      <RootNavigator navigation={addNavigationHelpers({ dispatch, state: RootStore.nav })} />
    )
  }
})


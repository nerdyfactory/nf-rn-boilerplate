import RootNavigator from '../../App/RootNavigator'
import { NavigationActions } from 'react-navigation'

export default NavigationActions
export const NavigationSelectors = {
  getRoute: state => state.nav.routes[state.nav.index]
}

export const reducer = (state, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state)
  return newState || state
}

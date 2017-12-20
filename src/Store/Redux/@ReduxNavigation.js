import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import RootNavigator from '../../App/RootNavigator'

// here is our redux-aware our smart component
function ReduxNavigation(props) {
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <RootNavigator navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)

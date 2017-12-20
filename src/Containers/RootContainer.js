import React, { Component } from 'react'
import { View, StatusBar, BackHandler, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

/** MobX */
import { AppNavigation as Navigation, AppActions } from '../Store'
/** */

/** Redux *
import { connect } from 'react-redux'
import ReduxPersist from '../Store/Redux/@Persist'
import Navigation from '../Store/Redux/@ReduxNavigation'
import AppActions from '../Store/Redux/AppRedux'
/** */

// import I18n from '../I18n'

class RootContainer extends Component {
  state = {
    startedUp: false
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentDidMount() {
    /** Redux *
    if (!ReduxPersist.active) {
      this.props.startupRequest()
    }
    /** */
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props
    if (nav.index === 0) {
      return false
    }
    dispatch(NavigationActions.back())
    return true
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='transparent' barStyle='dark-content' translucent />
        <Navigation />
      </View>
    )
  }
}

/** Redux *
const mapStateToProps = state => ({
  startedUp: state.app.startedUp,
  nav: state.nav
})

const mapDispatchToProps = {
  startupRequest: AppActions.startupRequest
}

export default connect(null, dispatch => { return { dispatch } })(connect(mapStateToProps, mapDispatchToProps)(RootContainer))
/** */

export default RootContainer

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

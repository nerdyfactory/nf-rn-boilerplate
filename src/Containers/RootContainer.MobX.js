import React, { Component } from "react";
import { View, StatusBar, BackHandler, StyleSheet } from "react-native";
import { NavigationActions } from "react-navigation";

/** MobX */
import { AppNavigation as Navigation, AppActions } from "../Store";
/** */

// import I18n from '../I18n'

class RootContainer extends Component {
  state = {
    startedUp: false
  };

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress);
    /** Redux */
    if (!ReduxPersist.active) {
      this.props.startupRequest();
    }
    /** */
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent
        />
        <Navigation />
      </View>
    );
  }
}

/** MobX */
export default RootContainer;
/** */

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

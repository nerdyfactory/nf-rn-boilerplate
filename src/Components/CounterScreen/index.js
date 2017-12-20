import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class CounterScreen extends Component {

  _goTo = title => {
    const { navigate } = this.props.navigation
    navigate('Counter', { title })
  }

  render() {
    const { counter, increase, decrease } = this.props
    return (
      <View style={styles.container}>
        <View style={{ padding: 30, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text onPress={increase} >Increase</Text>
          <Text>{counter}</Text>
          <Text onPress={decrease} >Decrease</Text>
        </View>
        <Text style={styles.text}>
          {this.props.navigation.state.params.title}
        </Text>
        <View style={{padding: 30, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text onPress={() => this._goTo('Sample1')} >Sample1</Text>
          <Text onPress={() => this._goTo('Sample2')} >Sample2</Text>
          <Text onPress={() => this._goTo('Sample3')} >Sample3</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

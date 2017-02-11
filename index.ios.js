import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const biasData = {
  title: 'Loss Aversion',
  summery: 'text of loss aversion article',
  link: '[link to loss aversion]'
}

export default class mfa extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {biasData.title}
        </Text>
        <Text style={styles.instructions}>
          {biasData.summery}
        </Text>
        <Text style={styles.instructions}>
          {biasData.link}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('mfa', () => mfa);

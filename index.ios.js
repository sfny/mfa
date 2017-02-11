import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import CogbisListing from './app/cogbis/cogbisListing'

export default class mfa extends Component {

  render() {
    return (
      <CogbisListing />
    );
  }

}

AppRegistry.registerComponent('mfa', () => mfa);

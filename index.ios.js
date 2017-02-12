import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet
} from 'react-native';
import CogbisListing from './app/cogbis/cogbisListing';
import Router from 'react-native-simple-router';

const FIRST_ROUTE = {
  name: 'Home',
  component: CogbisListing,
};

class mfa extends Component {
  render() {
    return (
      <Router
        firstRoute={FIRST_ROUTE}
        headerStyle={styles.header}/>
    );
  }

}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#38556A',
  },
})

AppRegistry.registerComponent('mfa', () => mfa);

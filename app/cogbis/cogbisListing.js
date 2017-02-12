import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

import About from "../pages/About";

const BASE_URL = 'https://en.wikipedia.org/w/api.php?format=json&action=parse&page=Loss_aversion&prop=text';
const BUSTER = './datalist.json';
const URL = "https://raw.githubusercontent.com/sfny/mfa/master/app/cogbis/dataList.json";

//var responseData = []

export default class CogbisListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      cogbi: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(responseData),
        })
      });
  }

  nextPage() {
    this.props.toRoute({
      name: 'About Us',
      component: About,
    });
  }

  render() {
      if (this.state.cogbis) {
          return (
              <View>
                <Text> "Loading"</Text>
              </View>
          );
      }
      return (
            <TouchableHighlight onPress={this.nextPage.bind(this)} style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderSingleCogBi.bind(this)} />
            </TouchableHighlight>
      );
    }
      renderSingleCogBi(cogbi) {
          return (
            <View style={styles.listView}>
              <Text style={styles.rowText}>
              {cogbi.name}
              </Text>
            </View>
          );
        }
} //Component close

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4C6983',
  },
  listView: {
    marginLeft:20,
    marginBottom: 10,
    flex: 1,
  },
  rowText: {
    fontSize: 20,
    color: '#F4F7F7',
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

module.exports = CogbisListing;

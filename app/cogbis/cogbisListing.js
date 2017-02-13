import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  TouchableHighlight,
  View
} from 'react-native';

import Detail from "../cogbis/cogbiDetail";

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

  nextPage(cogbi) {
    console.log(cogbi)
    this.props.toRoute({
      name: cogbi.name,
      component: Detail,
      data: cogbi,
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
                <ListView dataSource={this.state.dataSource}
                  renderRow={this.renderSingleCogBi.bind(this)} />
      );
    }
      renderSingleCogBi(cogbi) {
          return (
          <TouchableHighlight onPress={this.nextPage.bind(this, cogbi)} style={styles.container}>
            <View style={styles.listView}>
              <Text style={styles.rowText}>
              {cogbi.name}
              </Text>
            </View>
          </TouchableHighlight>
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

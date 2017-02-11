import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ListView,
  View
} from 'react-native';

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

  render() {
      if (this.state.cogbis) {
          return (
              <View>
                <Text> "Loading"</Text>
              </View>
          );
      }
      return (
            <View>
              <ListView dataSource={this.state.dataSource}
                renderRow={this.renderSingleCogBi.bind(this)} />
            </View>
      );
    }
      renderSingleCogBi(cogbi) {
          return (
            <View style={styles.title}>
              <Text>{cogbi.name}</Text>
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
    backgroundColor: '#F5FCFF',
  },
  listData: {
    marginLeft:20,
    flex: 1
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
